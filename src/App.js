import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import './App.css';

function App() {

  const [errorMessage, setErrorMessage] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [userAddress, setUserAddress] = useState("");
  const [amount, setAmount] = useState();
  const [toaddress, setToaddress] = useState("address-1");

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

  // useEffect(() => {
  //   connectHandler()
  // },[]);

  const getInputValue = (event)=>{
    // show the user input value to console
    const userValue = event.target.value;
    setAmount(userValue);
    
  };


  const claimHandle = () => {
    console.log(amount);
    console.log(toaddress);
  }

  return (
    <div className="App">
      <div>
        <div className='address-balance'>
          <select className='address' onChange={(e) => setToaddress(e.target.value)}>
            <option value="address-1">address-1</option>
            <option value="address-2">address-2</option>
            <option value="address-3">address-3</option>
            <option value="address-4">address-4</option>
            <option value="address-5">address-5</option>
          </select>
          <div className='balance'>balance: <span>100</span></div>
        </div>
        <div className='claim-connect'>
          <input type="text" className="amount" onChange={getInputValue}/>
          {
            account != null ? <button className='btn-claim-enable' onClick={claimHandle}>claim</button> : <button className='btn-claim-disabled' disabled>claim</button>
          }
          
        </div>
        {
          account == null ? <button className='btn-connectwallet' onClick={connectHandler}>connect metamask</button> : <button className='btn-connectwallet' onClick={connectHandler}>{userAddress}</button>
        }
      </div>
    </div>
  );
}

export default App;
