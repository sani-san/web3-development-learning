// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.14;

contract MsgSender {
  address public _address;

  function updateAddress() public {
    _address = msg.sender;
  }
}