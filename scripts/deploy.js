const hre = require("hardhat");
const fs = require('fs');
const readline = require('readline');

async function main() {
  // We get the contract to deploy
  const fileStream = fs.createReadStream('Address_Balance.txt');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  const addresses = [];
  const amounts = [];
  for await (const line of rl) {
    const address_balace = line.split(",");
    addresses.push(address_balace[0]);
    amounts.push(parseInt(address_balace[1]));
  }
  
  const testToken = await hre.ethers.getContractFactory("TestToken");
  const testContract = await testToken.deploy(addresses[0], addresses[1], addresses[2], addresses[3], addresses[4], amounts[0], amounts[1], amounts[2], amounts[3], amounts[4]);

  await testContract.deployed();

  console.log("Test contract deployed to:", testContract.address);

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
