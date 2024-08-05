const { Web3 } = require("web3");
const web3 = new Web3("http://127.0.0.1:8545");
const extractABI = require("./extract-abi");
const eventScript = require("./contract-scripts/event");
const inheritanceModifierScript = require("./contract-scripts/inheritance-modifier");
const CoffeeTokenSale = require("./contract-scripts/coffee-token-sale");

const ethBalanceOfAll = async (accounts) => {
  for (let i=0; i < accounts.length; i++) {
    let balance = await web3.eth.getBalance(accounts[i]);
    balance = Number(web3.utils.fromWei(balance, "ether")).toFixed(2);

    tabLog(`Account ${i}: ${balance} ETH`);
  }
  console.log();
}

const tabLog = (message) => {
  console.log("\t" + message);
}

(async () => {
  try {
    let accounts = await web3.eth.getAccounts();
    console.log('--- Account Balances ---\n')
    await ethBalanceOfAll(accounts);
    // console.log("--- Event Contract ---\n");
    // await eventScript(web3, extractABI, accounts, tabLog);
    // console.log("--- InheritanceModifier Contract ---\n");
    // await inheritanceModifierScript(web3, extractABI, accounts, tabLog);
    console.log("--- CoffeeTokenSale ---\n");
    await CoffeeTokenSale(web3, extractABI, accounts, tabLog);
    console.log();
  } catch(error) {
    console.error("cannot fetch accounts." + error);
  }
})();