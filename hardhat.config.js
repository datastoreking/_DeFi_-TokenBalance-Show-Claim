require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 3,
      gas: 8000000,
      gasMultiplier: 2,
      allowUnlimitedContractSize: true
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/NXqkxxyuNympXDCFSBP8v9TTSyualSUk",
      accounts: [process.env.ACCOUNT_0_PRIVATE_KEY]
    },
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/KGHPZwmUNmeWprMgIVZbJLO4Rx2vWt2b",
      accounts: [process.env.ACCOUNT_0_PRIVATE_KEY]
    },
    mainnet: {
      url: "https://eth-mainnet.alchemyapi.io/v2/7BrttDu47Up_TL4HY5ptWZ3sVGgeLms3",
      accounts: [process.env.ACCOUNT_0_PRIVATE_KEY]
    },
    matic: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [process.env.ACCOUNT_0_PRIVATE_KEY],
    },
    local: {
      url: "http://localhost:8545",
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
      mainnet: process.env.API_KEY,
      rinkeby: process.env.API_KEY,
      ropsten: process.env.API_KEY,
      polygon: process.env.MATIC_API_KEY // from polygon.com
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};
