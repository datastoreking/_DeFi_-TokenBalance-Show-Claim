const hre = require("hardhat");
const { ethers } = require("hardhat");
const lineReader = require('line-reader');
import fetch from "node-fetch";
const address = [];

fetch("address-balance.txt")
	.then((r) => r.text())
	.then(text  => {
		const lines = text.split("\n");
		for(var line = 1; line < lines.length; line ++){
            console.log(lines)
			address.push(lines)
		}
		
})

console.log(address)


// async function main() {
//   const [deployer] = await ethers.getSigners();
//   console.log("Deploying contracts with the account:", deployer.address);
//   console.log("Account balance:", (await deployer.getBalance()).toString());
//   const Tokenready = await hre.ethers.getContractFactory("TokenMint");
//   const TokenBalance = await hre.ethers.getContractFactory("TokenBalance");
//   const tokenready = await Tokenready.deploy();
//   const tokenbalance = await TokenBalance.deploy(tokenready.address, ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266","0x70997970C51812dc3A010C7d01b50e0d17dc79C8","0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC","0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC","0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65"]);
//   await tokenready.deployed();
//   await tokenbalance.deployed();
//   console.log("Addresses are ", deployer[0], deployer[1], deployer[2], deployer[3], deployer[4])
//   console.log("Token address is :", tokenready.address);
//   console.log("Contract has been deployed to:", tokenbalance.address);
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });
