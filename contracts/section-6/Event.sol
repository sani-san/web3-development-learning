// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.14;

contract Event {
  mapping(address => uint) public tokenBalance;

  event TokensSent(address indexed _from, address indexed _to, uint _amount);

  constructor() {
    tokenBalance[msg.sender] = 100;
  }

  function sendToken(address _to, uint _amount) public returns(bool) {
    require(tokenBalance[msg.sender] >= _amount, "Not enough tokens.");
    tokenBalance[msg.sender] -= _amount;
    tokenBalance[_to] += _amount;

    emit TokensSent(msg.sender, _to, _amount);

    return true;
  }

  function getTokenBalance(address _user) public view returns(uint) {
    return tokenBalance[_user];
  }
}