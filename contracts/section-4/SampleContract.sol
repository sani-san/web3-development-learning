// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.14;

contract SampleContract {
  string public myString = "hello world";

  function updateString(string memory _newString) public payable {
    if (msg.value == 1 ether) {
      myString = _newString;
    } else {
      payable(msg.sender).transfer( msg.value);
    }
  }
}