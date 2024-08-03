// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.14;

contract ViewPure {
  uint public storageVariable;

  function getMyStorageVariable() public view returns(uint) {
    return storageVariable; // view can access variables in storage.
  }

  function getAddition(uint a, uint b) public pure returns(uint) {
    return a + b; // pure cannot access variables in storage. 
  }
  
  function setMyStorageVariable(uint _newVar) public returns(uint) {
    storageVariable = _newVar;
    return _newVar; // ! WARNING: return values are typically used for contract to contract communication.
  }
}