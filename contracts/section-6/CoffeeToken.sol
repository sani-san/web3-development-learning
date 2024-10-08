// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract CoffeeToken is ERC20, AccessControl {
  bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

  event CoffeePurchased(address indexed receiver, address indexed buyer);

  constructor() ERC20("CoffeeToken", "CFE") {
    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    _grantRole(MINTER_ROLE, msg.sender);
  }

  function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
    _mint(to, convertToWei(amount));
  }

  function convertToWei(uint amount) public view returns(uint) {
    return amount * 10 ** decimals();
  }

  function buyOneCoffee() public {
    _burn(_msgSender(), convertToWei(1));
    emit CoffeePurchased(_msgSender(), _msgSender());
  }

  function buyOneCoffeeFrom(address account) public {
    _spendAllowance(account, _msgSender(), convertToWei(1));
    _burn(account, convertToWei(1));
    emit CoffeePurchased(_msgSender(), account); 
  }
}