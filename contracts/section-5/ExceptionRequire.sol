// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.14;

contract ExceptionRequire {
  mapping (address => uint8) public balanceReceived;

  function receiveMoney() public payable {
    assert(msg.value == uint8(msg.value)); // ! CONTINUES USING GAS.
    balanceReceived[msg.sender] += uint8(msg.value);
  }

  function withdrawMoney(address payable _to, uint8 _amount) public {
    require(_amount <= balanceReceived[msg.sender], "Insufficient user funds in contract."); // ! STOPS USING GAS AT THIS POINT.
    balanceReceived[msg.sender] -= _amount;
    _to.transfer(_amount);
  }
}