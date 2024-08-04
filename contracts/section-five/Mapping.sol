// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.14;

contract Mapping {
  mapping(uint => bool) public myMapping;
  mapping(address => bool) public myAddressMapping; // whitelisting.
  mapping(uint => mapping(uint => bool)) public nestedMapping;

  function setValue(uint _index) public {
    myMapping[_index] = true;
  }
  
  function setMyAddressToTrue() public {
    myAddressMapping[msg.sender] = true;
  }
  
  function setNestedMapping(uint _key1, uint _key2, bool _value) public {
    nestedMapping[_key1][_key2] = _value;
  }
}