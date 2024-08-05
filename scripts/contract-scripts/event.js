const eventScript = async (web3, extractABI, accounts, tabLog) => {
  const { abi, address } = extractABI("Event")
  const contractInstance = new web3.eth.Contract(abi, address);
  let balance;

  contractInstance.events.TokensSent({
    fromBlock: 'latest'
  })
  .on('data', event => {
    let e = event.returnValues;
    const from = e['0'];
    const to = e['1'];
    const value = web3.utils.toWei(e['2'], 'wei');
    tabLog('Event Received: ');
    tabLog('\tSender: ' + from);
    tabLog('\tReceiver: ' + to);
    tabLog('\tToken Amount: ' + value);
    console.log();
  })

  // * Get all past events from a specific event.
  // contractInstance.getPastEvents("TokensSent", { 
  //     fromBlock: 0,
  //     filter: {
  //       _to: accounts[0]
  //     }
  //   }
  // )
  //   .then(e => console.log(e));

  await contractInstance.methods.sendToken(accounts[0], 10).send({ from: accounts[1] });

  balance = await contractInstance.methods.getTokenBalance(accounts[0]).call();
  balance = web3.utils.toWei(balance, "wei");
  tabLog("Address 0 Balance: " + balance);

  balance = await contractInstance.methods.getTokenBalance(accounts[1]).call();
  balance = web3.utils.toWei(balance, "wei");
  tabLog("Address 1 Balance: " + balance);
}

module.exports = eventScript;