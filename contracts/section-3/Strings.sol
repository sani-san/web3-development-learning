// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.14;

contract Strings {
  string public myString = "hello world";
  bytes public myBytes = "hello world"; // preferred, bytes are safer.

  function setMyString(string memory _myString) public {
    myString = _myString;
  }

  function compareTwoStrings(string memory _stringOne, string memory _stringTwo) public pure returns(bool){
    return keccak256(abi.encodePacked(_stringOne)) == keccak256(abi.encodePacked(_stringTwo));
  }
}