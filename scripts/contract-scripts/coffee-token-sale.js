const CoffeeTokenSale = async (web3, extractABI, accounts, tabLog) => {
  const { abi: tokenAbi, address: tokenAddress } = extractABI("CoffeeToken")
  const { abi: saleAbi, address: saleAddress } = extractABI("TokenSale")

  const tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);
  const saleContract = new web3.eth.Contract(saleAbi, saleAddress);

  const getApprovalEvents = async () => {
      tokenContract.events.Approval({
      fromBlock: 'latest',
      filter: {
        spender: accounts[1]
      }
    })
    .on('data', event => {
      let e = event.returnValues;
      console.log("[approval event]")
      tabLog("Spender Address: " + e.spender);
      tabLog("Spend Approved: " + web3.utils.fromWei(e.value, "ether") + " CFE");
      console.log();
    })
  }

  console.log('[mint tokens]')
  try {
    await tokenContract.methods.mint(accounts[0], 2000).send({ from: accounts[0] });
    tabLog("Success! Tokens minted.");
  } catch(e) {
    tabLog(e);
  }

  let balance;
  console.log('\n[balance check]')
  try {
    balance = await tokenContract.methods.balanceOf(accounts[0]).call();
    balance = web3.utils.fromWei(balance, "ether");
    tabLog("Account 0: " + balance + " CFE");
  } catch(e) {
    console.log(e);
  }

  console.log('\n[set allowance for token sale contract]')
  try {
    await tokenContract.methods.approve(saleAddress, web3.utils.toWei("1000", "ether")).send({ from: accounts[0]});
    getApprovalEvents();
    tabLog("Success! Allowance permitted for token sale contract.")
  } catch(e) {
    console.log(e);
  }

  console.log('\n[purchase coffee from token sale contract]')
  try {
    await saleContract.methods.purchaseCoffee().send({ from: accounts[1], value: web3.utils.toWei("2.5", "ether")});
    tabLog("Success! Coffee Purchased.")
  } catch(e) {
    console.log(e);
  }

  console.log('\n[remaining allowance]');
  try {
    const allowance = await tokenContract.methods.allowance(accounts[0], saleAddress).call();
    tabLog(`Remaining Allowance: ${web3.utils.fromWei(allowance, 'ether')} CFE`);
  } catch(e) {
    console.log(e);
  }

  console.log('\n[balance check]')
  try {
    balance = await tokenContract.methods.balanceOf(accounts[0]).call();
    balance = web3.utils.fromWei(balance, "ether");
    tabLog("Account 0: " + balance + " CFE");
    balance = await tokenContract.methods.balanceOf(accounts[1]).call();
    balance = web3.utils.fromWei(balance, "ether");
    tabLog("Account 1: " + balance + " CFE");
    balance = await tokenContract.methods.balanceOf(saleAddress).call();
    balance = web3.utils.fromWei(balance, "ether");
  } catch(e) {
    console.log(e);
  }
}

module.exports = CoffeeTokenSale;