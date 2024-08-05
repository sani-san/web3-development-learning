// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.14;

contract Sender {
  receive() external payable {}

  function withdrawTransfer(address payable _to) public {
    _to.transfer(10); // ! will throw an error if fails.
  }

  function withdrawSend(address payable _to) public {
    bool isSent = _to.send(10); // ! will return a boolean of whether it went through or not. won't fail.
    require(isSent, "Failed to send funds.");
  }
}

contract ReceiverNoAction {
  receive() external payable {}

  function balance() public view returns(uint) {
    return address(this).balance;
  } 
}

contract ReceiverAction {
  uint public balanceReceived;
  
  receive() external payable {
    balanceReceived += msg.value;
  }
}