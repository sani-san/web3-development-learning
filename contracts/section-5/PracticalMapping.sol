// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.14;

contract PracticalMapping {
  mapping(address => uint) public depositers;

  function getBalance() public view returns(uint) {
    return address(this).balance;
  }

  function deposit(uint _amount) public payable {
    depositers[msg.sender] += _amount;
  }

  function withdraw(uint _amount) public {
    if (getBalance() <= 0) { return; } // ensures there is money in the contract.
    if (depositers[msg.sender] < _amount) { return; } // ensures the sender has the requested amount in the contract.
    depositers[msg.sender] -= _amount; // ! prevents re-entry attacks.
    payable(msg.sender).transfer(_amount);
  }
}