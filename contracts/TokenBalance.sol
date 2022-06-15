// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol";

import "openzeppelin-solidity/contracts/utils/math/SafeMath.sol";
contract TokenBalance {
    address public tokenAddress;
    address[]  public whitelistAddress = new address[](5);
    mapping(address=>uint256) balances;

    constructor(address _tokenAddress, address[] memory _whitelistAddress) {
        require(_tokenAddress != address(0), "_erc20_contract_address address can not be zero");
        tokenAddress = _tokenAddress;
        require(_whitelistAddress.length == 5,"address's count should be five");
        for (uint i = 0;i<_whitelistAddress.length;i++){
            whitelistAddress.push(_whitelistAddress[i]);
            balances[_whitelistAddress[i]] = 0;
        }
    }

    modifier onlyWhitelistAddress(address _walletAddress) {
        bool flag = false;
        for (uint i = 0;i<whitelistAddress.length;i++){
            flag = true;
        }
        require(flag,"wallet address is not whitelisted");
        _;
    }

    function claim(address _walletAddress, uint256 _amount) public onlyWhitelistAddress(_walletAddress)  {
        require(_amount <= IERC20(tokenAddress).balanceOf(address(this)),"Token is not enough to transfer");
        IERC20(tokenAddress).transfer(_walletAddress,_amount);
        balances[_walletAddress] = IERC20(tokenAddress).balanceOf(_walletAddress);
    }

    function checkBalance(address _walletAddress) public view returns(uint256) {
        return IERC20(tokenAddress).balanceOf(_walletAddress);
    }
}