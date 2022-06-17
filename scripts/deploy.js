const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
  const TokenBalance = await hre.ethers.getContractFactory("TokenBalance");
  const tokenbalance = await TokenBalance.deploy();

  await tokenbalance.deployed();  
  const currentBalance = await tokenbalance.checkBalance(0x34A7350f5C5F08f9444CbBef1624275E66cCFFBf);

  console.log("Contract has been deployed to:", tokenbalance.address);
  console.log('Current balance in contract is: ', currentBalance.toString());

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
