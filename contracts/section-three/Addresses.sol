// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.14;

contract Addresses {
  address public someAddress; // 0x0...0

  function setSomeAddress(address _someAddress) public {
    someAddress = _someAddress;
  }

  function getAddressBalance() public view returns(uint) {
    return someAddress.balance;
  }
}