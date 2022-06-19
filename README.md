# setting .env
After creat .env file, please copy the content of .env.sample.
And you can set params.


# deploy
 npx hardhat run  --network rinkeby scripts/deploy.js

# verify
- first contract
 npx hardhat verify --network rinkeby 0x6----first contract address----5

 https://rinkeby.etherscan.io/address/0xDBC99496c826540419d08753695A885039FC6776#code

# test
npx hardhat test


//================ Proposal =====================

(0) Technologies - React / Angular, Node.JS, Solidity

(1) There must be a file with the list of 5 addresses and the number of tokens in there.

You need to write:

(2) Small SmartContract where there will be addresses and the number of tokens attached to them

(3) On the front client must connect his metamask and:
(3.1) see the number of tokens on his balance
(3.2) claim any amount of tokens to his address from the smart contract address
(3.3) only the wallets among those five can claim tokens

Please:
 ⁃ structure everything in one repo that can be launched on localhost via hardhat.
 ⁃ please provide docs.

- video of how it works



//================ Result ======================

https://rinkeby.etherscan.io/address/0xDBC99496c826540419d08753695A885039FC6776#code

