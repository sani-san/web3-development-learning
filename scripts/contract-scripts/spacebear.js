const spacebearScript = async (web3, extractABI, accounts, tabLog) => {
  const { abi, address } = extractABI("Spacebear");
  const contractInstance = new web3.eth.Contract(abi, address);

  console.log("--- Minting NFT ---");
  try {
    const gasEstimate = await contractInstance
      .methods
      .safeMint(accounts[0], "spacebear_1.json")
      .estimateGas({ from: accounts[0] });
    await contractInstance.methods.safeMint(accounts[0], "spacebear_1.json").send({ 
      from: accounts[0], 
      gas: Number(gasEstimate)
    });
    tabLog("Success! NFT Minted.\n");
  } catch(e) {
    console.log(e);
  }

  console.log("--- Balance Of Owner ---");
  try {
    const balance = await contractInstance.methods.balanceOf(accounts[0]).call();
    console.log(Number(balance));
  } catch(e) {
    console.log(e);
  }

  console.log("--- Get URI of Token ---");
  try {
    const uri = await contractInstance.methods.tokenURI(0).call();
    tabLog(uri);
  } catch(e) {
    console.log(e);
  }
}

module.exports = spacebearScript;