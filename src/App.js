import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import './ConnectMetamask'
import './App.css';
import Input from './Address_Balance.txt';

 const App = () => {

  const [claimableAddress_Array, setclaimableAddress_Array] = useState([])
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

  const [errorMessage, setErrorMessage] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
      if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountsChanged);
      window.ethereum.on("chainChanged", chainChanged);
      }
  }, []);

  const connectHandler = async () => {
      if (window.ethereum) {
      try {
          const res = await window.ethereum.request({
          method: "eth_requestAccounts",
          });
          await accountsChanged(res[0]);
          const { ethereum } = window;
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          
          const addr = await signer.getAddress();

          setUserAddress(addr.toString());
      } catch (err) {
          console.error(err);
          setErrorMessage("There was a problem connecting to MetaMask");
      }
      } else {
      setErrorMessage("Install MetaMask");
      }
      
  };

  const accountsChanged = async (newAccount) => {
      setAccount(newAccount);
      try {
      const balance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [newAccount.toString(), "latest"],
      });
      setBalance(ethers.utils.formatEther(balance));
      } catch (err) {
      console.error(err);
      setErrorMessage("There was a problem connecting to MetaMask");
      }
  };

  const chainChanged = () => {
      setErrorMessage(null);
      setAccount(null);
      setBalance(null);
  };

  return (
    <div className="App">
      <button className="btn-connectwallet" onClick={connectHandler}>{account == null ? "Connect Metamask" : userAddress}</button>
      <div className="claimableAddress">
        <h1>Claimable Addresses and their balances:</h1>
        <p>{claimableAddress_Array[0]}: <span> 1000</span></p>
        <p>{claimableAddress_Array[1]}: <span> 1000</span></p>
        <p>{claimableAddress_Array[2]}: <span> 1000</span></p>
        <p>{claimableAddress_Array[3]}: <span> 1000</span></p>
        <p>{claimableAddress_Array[4]}: <span> 1000</span></p>
        <h1>Current Smart Contract Balance:</h1>
        <p className="contractBalance">10000</p>
      </div>
      <div className="claimPart">
        <input type="text" className="claimAmount" placeholder="Input Claim Amount"/>
        <button className="btn-claim-enable">Claim</button>
      </div>
    </div>
  );
}

export default App;