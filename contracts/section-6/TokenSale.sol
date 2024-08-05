// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.16;

abstract contract _ERC20 {
  function decimals() public virtual view returns (uint8);
  function transferFrom(address _from, address _to, uint256 _value) public virtual returns (bool success);
  function convertToWei(uint amount) public virtual view returns (uint256);
}

contract TokenSale {
  _ERC20 public token;
  address public tokenOwner;

  uint public tokenPriceInWei = 1 ether;

  constructor(address _token) {
    tokenOwner = msg.sender;
    token = _ERC20(_token);
  }

  function purchaseCoffee() public payable {
    require(msg.value >= tokenPriceInWei, "Not enough money sent.");
    uint tokensToTransfer = msg.value / tokenPriceInWei;
    uint remainder = msg.value - tokensToTransfer * tokenPriceInWei;
    token.transferFrom(tokenOwner, msg.sender, token.convertToWei(tokensToTransfer));
    payable(msg.sender).transfer(remainder);
  }
}