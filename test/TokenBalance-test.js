const { expect } = require("chai");
const { ethers } = require("hardhat");
const utils = require("ethers/lib/utils");
const gasFee = ethers.utils.parseUnits("50", "gwei");
const gasLimit = 50000000;

describe("Testing Every Functions", function () {

  it("Should instantiate the created test contract and call its functions", async () => {
    const [deployer] = await ethers.getSigners();
    const TokenBalance = await hre.ethers.getContractFactory("TokenBalance");

    const deployerBalance = await TokenBalance.signer.getBalance();
    console.log(`Deployer balance:  ${ethers.utils.formatEther(deployerBalance)}`);
    console.log(`Deployment price:  ${ethers.utils.formatEther(deploymentPrice)}`);
    
    const gasPrice = await TokenBalance.signer.getGasPrice();
    console.log(`Current gasPrice: ${gasPrice}`);
    const estimatedGas = await TokenBalance.signer.estimateGas(
      TokenBalance.getDeployTransaction(),
    );
    console.log(`Estimated gasPrice: ${estimatedGas}`);
    const deploymentPrice = gasPrice.mul(estimatedGas);
    
    if (deployerBalance.lt(deploymentPrice)) {
      throw new Error(
        `Deposite more tokens up to ${ethers.utils.formatEther(
          deploymentPrice.sub(deployerBalance),
        )}`,
      );
    }

    const currentBalance = await tokenbalance.checkBalance(tokenbalance.address);
    console.log("\n")
    console.log("Contract has been deployed to:", tokenbalance.address);
    console.log("\n")
    console.log('Current balance in contract is: ', currentBalance.toString());
    
    const claimerAddr = await tokenbalance.connect(whitelistAddress[0]).whitelistAddress[0];
    const Addr1 = await tokenbalance.connect(whitelistAddress[0]).whitelistAddress[1];
    const Addr2 = await tokenbalance.connect(whitelistAddress[0]).whitelistAddress[2];
    const Addr3 = await tokenbalance.connect(whitelistAddress[0]).whitelistAddress[3];
    const Addr4 = await tokenbalance.connect(whitelistAddress[0]).whitelistAddress[4];

    console.log('Claimer Address : ', claimerAddr);
    console.log("\n")
    console.log('Address1 : ', Addr1);
    console.log("\n")
    console.log('Address2 : ', Addr2);
    console.log("\n")
    console.log('Address3 : ', Addr3);
    console.log("\n")
    console.log('Address4 : ', Addr4);
    
    const ClaimerBal = await tokenbalance.connect(whitelistAddress[4]).balanceOf(claimerAddr);
    const Addr1Bal = await tokenbalance.connect(whitelistAddress[4]).balanceOf(Addr1);
    const Addr2Bal = await tokenbalance.connect(whitelistAddress[4]).balanceOf(Addr2);
    const Addr3Bal = await tokenbalance.connect(whitelistAddress[4]).balanceOf(Addr3);
    const Addr4Bal = await tokenbalance.connect(whitelistAddress[4]).balanceOf(Addr4);
    
    console.log('Current Contract Value :', ethers.utils.formatEther(currentBalance));
    console.log('Claimer Value :', ethers.utils.formatEther(ClaimerBal));
    console.log('Addr1 Value :', ethers.utils.formatEther(Addr1Bal));
    console.log('Addr2 Value :', ethers.utils.formatEther(Addr2Bal));
    console.log('Addr3 Value :', ethers.utils.formatEther(Addr3Bal));
    console.log('Addr4 Value :', ethers.utils.formatEther(Addr4Bal));
  })
});