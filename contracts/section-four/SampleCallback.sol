// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.14;

contract SampleCallback {
  uint public lastValueSent;
  string public lastFunctionCalled;
  uint public myUint;

  function setMyUint(uint _myNewUint) public {
    myUint = _myNewUint;
  }

  // ! receive() isn't reliable, it uses little gas and any meaningful interaction requires too much gas.
  // ! there cannot be any calldata send into the function -- needs a fallback function.
  receive() external payable {
    lastValueSent = msg.value;
    lastFunctionCalled = "receive";
  } 

  fallback() external payable {
    lastValueSent = msg.value;
    lastFunctionCalled = "fallback"; 
  }
}