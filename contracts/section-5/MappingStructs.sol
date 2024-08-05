// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.14;

contract MappingStructs {
  struct Transaction {
    uint amount;
    uint timestamp;
  }

  struct Balance {
    uint totalBalance;
    uint numDeposits;
    uint numWithdrawls;
    mapping(uint => Transaction) deposits;
    mapping(uint => Transaction) withdrawals;
  }

  mapping(address => Balance) balance;

  function getDepositNum(address _from, uint _numDeposit) public view returns(Transaction memory) {
    return balance[_from].deposits[_numDeposit];
  }

  function getBalance() public view returns(uint) {}

  function depositMoney() public payable {
    Transaction memory deposit;
    deposit.amount = msg.value;
    deposit.timestamp = block.timestamp;
    balance[msg.sender].deposits[balance[msg.sender].numDeposits] = deposit;
    balance[msg.sender].numDeposits++;
    balance[msg.sender].totalBalance += msg.value;
  }

  function withdrawMoney(address payable _to, uint _amount) public {
    Transaction memory withdrawal;
    withdrawal.amount = _amount;
    withdrawal.timestamp = block.timestamp;
    balance[msg.sender].withdrawals[balance[msg.sender].numWithdrawls] = withdrawal;
    balance[msg.sender].numWithdrawls++;
    balance[msg.sender].totalBalance -= _amount;
    _to.transfer(_amount);
  }
}