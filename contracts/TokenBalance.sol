// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenBalance is ERC20, Ownable {

    address[] whitelistAddress = [0x34A7350f5C5F08f9444CbBef1624275E66cCFFBf,0x074130e9AF22f457092C24aB7E14C0c7f34CEb90,0x3831826A3a0c10251f596DB93B36Ad3dE74cD995,0xf0D8CD99D25495c00Feec066D5b6075B8F5dA901,0xADA880C04c9F39c6F0713f83f8a4D45949ADa6a1];

    uint256 constant public Initial_Supply_Contract = 5000 * 10 ** 18;
    uint256 constant public Initial_Supply_addresses = 1000 * 10 ** 18;
    mapping(address=>uint256) balances;

    //Mint tokens to this smart contract and addresses
    constructor() ERC20("ZanaTest", "Test") {
        _mint(address(this), Initial_Supply_Contract);
        _mint(whitelistAddress[0], Initial_Supply_addresses);
        _mint(whitelistAddress[1], Initial_Supply_addresses);
        _mint(whitelistAddress[2], Initial_Supply_addresses);
        _mint(whitelistAddress[3], Initial_Supply_addresses);
        _mint(whitelistAddress[4], Initial_Supply_addresses);
    }

    //only Clainer can claim
    modifier onlyClaimer() {
        require(whitelistAddress[0] == _msgSender(), "You can't be a  Claimer!");
        _;
    }

    //transfer token amount to recipient
    function transfer(address _recipient, uint256 _amount) public virtual override returns (bool) {
        _transfer(_msgSender(), _recipient, _amount);
        return true;
    }

    // show the amount of token in every accounts
    function checkBalance(address _walletAddress) public view returns(uint256) {
        return address(_walletAddress).balance;
    }

    //claim 
    function claim(uint _amount) public onlyClaimer{
        require(_amount <= balanceOf(address(this)), "Claimable Token are not enough!");
        _transfer(address(this), _msgSender(), _amount);
    }

    //withdraw all token
    function withdraw() external onlyOwner {
        require(address(this).balance > 0, "There is no balance.");
        payable(owner()).transfer(address(this).balance);        
    }

    
}