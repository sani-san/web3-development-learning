// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.14;

contract Constructor {
  address public myAddress;
  
  constructor() {
    myAddress = address(this);
  }
}