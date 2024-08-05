const { Web3 } = require("web3");
const web3 = new Web3("http://127.0.0.1:8545");
const extractABI = require("./extract-abi");
const eventScript = require("./contract-scripts/event");

const tabLog = (message) => {
  console.log("\t" + message);
}

(async () => {
  try {
    let accounts = await web3.eth.getAccounts();
    let balance = await web3.eth.getBalance(accounts[0]);
    balance = web3.utils.fromWei(balance, "ether");

    console.log("--- Event Contract ---\n");
    await eventScript(web3, extractABI, accounts, tabLog);
    console.log();
  } catch(error) {
    console.error("cannot fetch accounts." + error);
  }
})();