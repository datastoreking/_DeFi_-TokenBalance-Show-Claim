// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract TestToken is ERC20, AccessControl {
    
    bytes32 public constant CLAIMABLE_ROLE = keccak256("CLAIMABLE_ROLE");
    uint256 constant public SUPPLY_CONTRACT = 10000 * 10 ** 18;
  
    constructor(address _address1, address _address2, address _address3, address _address4, address _address5, uint256 _amount1, uint256 _amount2, uint256 _amount3, uint256 _amount4, uint256 _amount5 ) ERC20("Test Token", "TT") {
        _setupRole(CLAIMABLE_ROLE, _address1);
        _setupRole(CLAIMABLE_ROLE, _address2);
        _setupRole(CLAIMABLE_ROLE, _address3);
        _setupRole(CLAIMABLE_ROLE, _address4);
        _setupRole(CLAIMABLE_ROLE, _address5);
        _mint(address(this), SUPPLY_CONTRACT);
        _mint(_address1, _amount1 * 10 ** 18);
        _mint(_address2, _amount2 * 10 ** 18);
        _mint(_address3, _amount3 * 10 ** 18);
        _mint(_address4, _amount4 * 10 ** 18);
        _mint(_address5, _amount5 * 10 ** 18);
    }

    function claim(uint256 _amount) public onlyRole(CLAIMABLE_ROLE) {
        require(_amount <= balanceOf(address(this)), "Token balance of this contract is over");
        _transfer(address(this), _msgSender(), _amount);
    }
}