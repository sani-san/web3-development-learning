// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.14;

contract SmartMoney {
  address owner;
  string fallbackMsg;

  constructor() {
    owner = msg.sender;
  }

  function getContractBalance() public view returns(uint) {
    return address(this).balance; 
  }

  function depositEth() public payable {}

  function withdrawEth() public {
    require(msg.sender == owner);
    payable(owner).transfer(getContractBalance());
  }

  function withdrawToAddress(address payable to) public {
    to.transfer(getContractBalance());
  }
}