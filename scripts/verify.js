const console = require('console')
const hre = require('hardhat')
const fs = require('fs');
const readline = require('readline');
// Define the NFT
async function main() {
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
  
  await hre.run('verify:verify', {
    address: '0xDBC99496c826540419d08753695A885039FC6776',
    constructorArguments: [
        addresses[0], addresses[1], addresses[2], addresses[3], addresses[4], amounts[0], amounts[1], amounts[2], amounts[3], amounts[4]
    ],
  })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })