const inheritanceModifierScript = async (web3, extractABI, accounts, tabLog) => {
  const { abi, address } = extractABI("InheritanceModifier")
  const contractInstance = new web3.eth.Contract(abi, address);
  let balance;

  console.log('[createNewToken]')
  try {
    await contractInstance.methods.createNewToken().send({ from: accounts[0] });
  } catch(e) {
    console.log(e.message);
  }

  balance = await contractInstance.methods.getTokenBalance(accounts[0]).call();
  balance = web3.utils.toWei(balance, "wei");
  tabLog("Address 0 Balance: " + balance);

  console.log('[burnToken]')
  await contractInstance.methods.burnToken().send({ from: accounts[0] });

  balance = await contractInstance.methods.getTokenBalance(accounts[0]).call();
  balance = web3.utils.toWei(balance, "wei");
  tabLog("Address 0 Balance: " + balance);

  console.log('[sendToken]')
  await contractInstance.methods.sendToken(accounts[1], 10).send({ from: accounts[0] });

  balance = await contractInstance.methods.getTokenBalance(accounts[0]).call();
  balance = web3.utils.toWei(balance, "wei");
  tabLog("Address 0 Balance: " + balance);

  balance = await contractInstance.methods.getTokenBalance(accounts[1]).call();
  balance = web3.utils.toWei(balance, "wei");
  tabLog("Address 1 Balance: " + balance);
}

module.exports = inheritanceModifierScript;