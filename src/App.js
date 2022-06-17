import React, { useEffect, useState } from "react";
import './ConnectMetamask'
import './App.css';
import Input from './Address_Balance.txt';
import ConnectMetamask from "./ConnectMetamask";

// make the array of all claimable addresses
const claimableAddress_Array = [];

fetch(Input)
	.then((r) => r.text())
	.then(text  => {
		const lines = text.split("\n");
		for(var line = 0; line < lines.length; line ++){
			if(lines[line]){
				const claimableAddress = lines[line].slice(0,42);
				claimableAddress_Array.push(claimableAddress);
			}
		}
		
})

function App() {
  
  return (
    <div className="App">
      <ConnectMetamask />
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
    </div>
  );
}

export default App;
