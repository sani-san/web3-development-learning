// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.14;



contract Struct {
  struct PaymentReceived {
    address from;
    uint amount;
  }

  PaymentReceived public payment;

  function payContract() public payable {
    payment.from = msg.sender;
    payment.amount = msg.value;
  }
}