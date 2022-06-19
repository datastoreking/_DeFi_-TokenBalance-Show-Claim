import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import './App.css';
import Input from './Address_Balance.txt';

const contractABI = require("./contract-abi.json");
//This smart contract has been deployed using hardhat in hardhat branch
const contractAddress = "0xDBC99496c826540419d08753695A885039FC6776";

const App = () => {

  const[accountBal, setaccountBal] = useState([]);
  const[contractBal, setcontractBal] = useState();
  const [claimableAddress_Array, setclaimableAddress_Array] = useState([]);
  const [walletAddress, setWalletAddress] = useState();
  const [amount, setAmount] = useState(0);
  const [accountSigner, setSigner] = useState();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const testContract = new ethers.Contract(contractAddress, contractABI, signer);

  // read the Address_Balance text file 
  useEffect(()=>{
    fetch(Input)
      .then((r) => r.text())
      .then(text  => {
        const lines = text.split("\n");
        for(var line = 0; line < lines.length; line ++){
          if(lines[line]){
            const claimableAddress = lines[line].slice(0,42);
            setclaimableAddress_Array(element => [claimableAddress, ...element])
          }
        }
    })
  },[])

  
  useEffect(()=>{
    if(claimableAddress_Array.length !=0){
      loadContractBalance();
      loadUserBalance();
    }
  });

  const loadContractBalance = async () => {
    let contractBalance = await testContract.balanceOf(contractAddress);
    setcontractBal(Number(contractBalance)/Math.pow(10,18))
  }
  
  const loadUserBalance = async () => {    
    let userBal1 = await testContract.balanceOf(claimableAddress_Array[0]);
    let userBal2 = await testContract.balanceOf(claimableAddress_Array[1]);
    let userBal3 = await testContract.balanceOf(claimableAddress_Array[2]);
    let userBal4 = await testContract.balanceOf(claimableAddress_Array[3]);
    let userBal5 = await testContract.balanceOf(claimableAddress_Array[4]);
    setaccountBal([Number(userBal1)/Math.pow(10,18),Number(userBal2)/Math.pow(10,18),Number(userBal3)/Math.pow(10,18),Number(userBal4)/Math.pow(10,18),Number(userBal5)/Math.pow(10,18)])
  }

  const btnhandler = async() => {
    var metamaskProvider = window.ethereum;
		await metamaskProvider.request({ method: 'eth_requestAccounts' });
		const provider = new ethers.providers.Web3Provider(metamaskProvider);
    const signer = provider.getSigner();
    const walletAddress = await signer.getAddress();
    setWalletAddress(walletAddress);
    setSigner(signer);
  };
 
  const claimHandler = async () => {
    const testContract = new ethers.Contract(contractAddress, contractABI, accountSigner);
    await testContract.claim(ethers.utils.parseEther(amount.toString()));
  }
  return (
    <div className="App">
      <button className="btn-connectwallet" onClick={btnhandler}>{walletAddress ? walletAddress : "Connect Wallet"}</button>
      <div className="claimableAddress">
        <h1>Claimable Addresses and their balances:</h1>
        <p>{claimableAddress_Array[0]}: <span> {accountBal[0]}</span></p>
        <p>{claimableAddress_Array[1]}: <span> {accountBal[1]}</span></p>
        <p>{claimableAddress_Array[2]}: <span> {accountBal[2]}</span></p>
        <p>{claimableAddress_Array[3]}: <span> {accountBal[3]}</span></p>
        <p>{claimableAddress_Array[4]}: <span> {accountBal[4]}</span></p>
        <h1>Current Smart Contract Balance:</h1>
        <p className="contractBalance">{contractBal}</p>
      </div>
      <div className="claimPart">
        <input type="number" className="claimAmount" value={amount} onChange={e => setAmount(e.target.value)}  placeholder="Input Claim Amount"/>
        <button className="btn-claim-enable" onClick={claimHandler}>Claim</button>
      </div>
    </div>
  );
}

export default App;