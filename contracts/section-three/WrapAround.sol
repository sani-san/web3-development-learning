// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.14;

contract WrapAround {
  uint256 public myUint;
  uint public myUint8 = 2**4;

  function setMyUint(uint _myUint) public {
    myUint = _myUint;
  }
  function incrementUint() public {
    myUint++;
  }
  function decrementInt() public {
    unchecked {
      myUint--;
    }
  }
}