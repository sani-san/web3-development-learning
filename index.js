const { Web3 } = require("web3");
const web3 = new Web3("http://127.0.0.1:8545");

let address = "0x4611113bbcDedc9F6B09906Ee4A514ad14F095CE";
let abiArray = [
  {
    "inputs": [],
    "name": "myBool",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "myInt",
    "outputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "myUint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "smallUint",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "_myBool",
        "type": "bool"
      }
    ],
    "name": "setBool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_myUint",
        "type": "uint256"
      }
    ],
    "name": "setMyUint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "incrementUint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decrementInt",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

(async () => {
  try {
    let accounts = await web3.eth.getAccounts();
    let balance = await web3.eth.getBalance(accounts[0]);
    balance = web3.utils.fromWei(balance, 'ether');
    let contractInstance = new web3.eth.Contract(abiArray, address);

    // output balance for user 0.
    console.log(balance + " ETH");
    // change bool to true.
    await contractInstance.methods.setBool(true).send({ from: accounts[0] });
    console.log(await contractInstance.methods.myBool().call())
    // change bool to false..
    await contractInstance.methods.setBool(false).send({ from: accounts[0] });
    console.log(await contractInstance.methods.myBool().call())



  } catch(error) {
    console.error("cannot fetch accounts." + error);
  }
})();