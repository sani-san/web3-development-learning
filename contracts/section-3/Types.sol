// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Types {
  // BOOLEANS
  bool public myBool;

  function setBool(bool _myBool) public {
    myBool = _myBool;
  }

  // UNSIGNED INTEGERS 
  uint public myUint;     // [0 -> (2^256)-1]
  uint8 public smallUint = 0; // 0 -> 256;
  int public myInt = -10; // -2^128 -> 2^128

  function setMyUint(uint _myUint) public {
    myUint = _myUint;
  }
  function incrementUint() public {
    smallUint++;
  }
  function decrementInt() public {
    myInt--;
  }
}