# Project run

### `npm install`
### `npm start`

###
 - Click the connect wallet button and connect to "Rinkeyby Test Network"
 - And then users can see the claimable wallet accounts and their current balance, and smart contract    balance of test tokens

### 
    1: import this metamask account (These 5 accounts are only cliamable)
        - account 1
            public key:  0xa66AefA24488db264e9Bf3589bBDa0b64d4aee86
            private key: f0b5f01c954530fb9a0813568edc65153f120a235884963415eb4e9581d3a3fa
        -account 2
            public key:  0x98D9EebEF8Ab2F1f7b455519Ff7FFE72d9ea9Bb3
            private key: 315f9fde73c8953ddb40aa43dec25ec9946c9f25bab2a45f6013a295f8e74f12
        -account 3
            public key:  0x1663bDC4f4B6e5C3B5feF05123d546CfD84D918b
            private key: f002b10ab945709d7efa7d46972eac8548f741bbbd7b44581228a4d07ef77a60
        -account 4
            public key:  0x3095791B68e101d13e53F942a5d974E0b2629f7B
            private key: f728dde439368b07f2da15c9006d867d522f15634d250bfb760d996160768779
        -account 5
            public key:  0x474A850f26177F60280eB1d8E5a6aA7f03e20961
            private key: 3b3671e8360074b88ec12f25e4bb88afe10934c48e979eb1542ed8274e21f671

    2: Import test token with this token contract address : 0xDBC99496c826540419d08753695A885039FC6776
       Then you can see the test token amounts in the metamask 

    3: Input the amount of token to cliam and click the claim button 
        - if your current account of metamask is one of the above 5 accounts, then claim is possible, but not the other accouts can do


This project was bootstrapped with [my repo](https://github.com/socr102/TokenBalance-Show.git).

In this repository there are 2 branches
Main: Frontend, Smart contract integration available see the whole DApp working
Hardhat: Hardhat project including smart contract, deploy, test scripts

# About Project
Initially there are tokens in smart contract and 5 user accounts
After connect wallet, only account among 5 accounts can claim token from smart contract to his account

