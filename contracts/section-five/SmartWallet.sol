// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.14;

contract Consumer {
  function getBalance() public view returns(uint) {
    return address(this).balance;
  }

  function deposit() public payable {}
}

contract SmartWallet {
  address public payable owner;
  address public payable nextOwner;
  uint public guardiansResetCount;
  uint public constant confirmationsFromGuardiansForReset = 3;

  mapping(address => uint) public userAllowance;
  mapping(address => bool) public isAllowedToSend;
  mapping(address => bool) public guardians;
  mapping(address => mapping(address => bool)) hasVoted;

  constructor() { owner = payable(msg.sender); }

  function setGuardian(address _guardian, bool _isGuardian) public {
    require(msg.sender == owner, "Only the owner can set a guardian.");
    guardians[_guardian] = _isGuardian;
  }

  function proposeNewOwner(address payable _newOwner) public {
    require(guardians[msg.sender], "You are not a guardian of this contract.");
    require(!hasVoted[_newOwner][msg.sender], "You have already casted a vote for this address.");

    hasVoted[_newOwner][msg.sender] = true;

    if (_newOwner != nextOwner) {
      nextOwner = _newOwner; 
      guardiansResetCount = 0;
    }

    guardiansResetCount++;

    if (guardiansResetCount >= confirmationsFromGuardiansForReset) {
      owner = nextOwner;
      nextOwner = payable(address(0));
    }
  }

  receive() external payable {}

  function transfer(address payable _to, uint _amount, bytes memory _payload) public returns(bytes memory) {
    require(getBalance() >= _amount, "Insufficient funds.");
    if (msg.sender != owner) {
      require(isAllowedToSend[msg.sender], "You are not allowed to send funds.");
      require(userAllowance[msg.sender] < _amount, "You are spending more than your allowance.");
      userAllowance[msg.sender] -= _amount;
    }

    (bool success, bytes memory returnData) = _to.call{value: _amount}(_payload);
    require(success, "Aborting, call was no successful.");

    return returnData;
  }

  function getBalance() public view returns(uint) {
    return address(this).balance;
  }

  function setUserAllowance(address _userAddress, uint _allowanceAmount) public {
    require(msg.sender == owner, "Only the owner can set an allowance.");
    isAllowedToSend[_userAddress] = true;
    userAllowance[_userAddress] = _allowanceAmount;
  }
}