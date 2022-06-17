const { expect } = require("chai");
const { ethers } = require("hardhat");
const utils = require("ethers/lib/utils");
let TestToken;
let TestTokenContract;
const _amount = 1000;
let owner, addr1, addr2, addr3, addr4, addr5;

const CLAIMABLE_ROLE = "0xbb773b98284e9eff718f1826f7f2ba72af321ca82bdb814f67424a2c0da88344"
beforeEach(async () => {
  // first contract deployment 
  [owner, addr1, addr2, addr3, addr4, addr5] = await ethers.getSigners();
  TestToken = await ethers.getContractFactory("TestToken");
  TestTokenContract = await TestToken.deploy(addr1.address, addr2.address, addr3.address, addr4.address, addr5.address, _amount, _amount, _amount, _amount, _amount);
  await TestTokenContract.deployed();
  console.log("TestToken deployed to:", TestTokenContract.address);
  console.log('owner address : ', owner.address);
});


describe("# Deploying a Contract and test its functionalities ", function () {

  it("# Check balance of contract and Users", async () => {
    let balanceOfContract = await TestTokenContract.connect(owner).balanceOf(TestTokenContract.address);
    
    let balanceOfAddress1 = await TestTokenContract.connect(owner).balanceOf(addr1.address);
    let balanceOfAddress2 = await TestTokenContract.connect(owner).balanceOf(addr2.address);
    let balanceOfAddress3 = await TestTokenContract.connect(owner).balanceOf(addr3.address);
    let balanceOfAddress4 = await TestTokenContract.connect(owner).balanceOf(addr4.address);
    let balanceOfAddress5 = await TestTokenContract.connect(owner).balanceOf(addr5.address);
    
    console.log('testToken balance of contract :', ethers.utils.formatEther(balanceOfContract));
    console.log('testToken balance of user1 :', ethers.utils.formatEther(balanceOfAddress1));
    console.log('testToken balance of user2 :', ethers.utils.formatEther(balanceOfAddress2));
    console.log('testToken balance of user3 :', ethers.utils.formatEther(balanceOfAddress3));
    console.log('testToken balance of user4 :', ethers.utils.formatEther(balanceOfAddress4));
    console.log('testToken balance of user5 :', ethers.utils.formatEther(balanceOfAddress5));

  });
  it("# ROLE checking", async () => {
    // CLAIMABLE ROLE
    expect(await TestTokenContract.hasRole(CLAIMABLE_ROLE, addr1.address)).to.eq(true);
    expect(await TestTokenContract.hasRole(CLAIMABLE_ROLE, addr2.address)).to.eq(true);
    expect(await TestTokenContract.hasRole(CLAIMABLE_ROLE, addr3.address)).to.eq(true);
    expect(await TestTokenContract.hasRole(CLAIMABLE_ROLE, addr4.address)).to.eq(true);
    expect(await TestTokenContract.hasRole(CLAIMABLE_ROLE, addr5.address)).to.eq(true);
    
});

  it("# Test Claim function", async () => {
    await TestTokenContract.connect(addr1).claim(ethers.utils.parseUnits('200'));
    
    balanceOfContract = await TestTokenContract.connect(owner).balanceOf(TestTokenContract.address);
    balanceOfAddress1 = await TestTokenContract.connect(owner).balanceOf(addr1.address);
    console.log('after claim 200, testToken balance of Address1 :', ethers.utils.formatEther(balanceOfAddress1));
    console.log('after claim 200, testToken balance of contract :', ethers.utils.formatEther(balanceOfContract));
  })
  
});