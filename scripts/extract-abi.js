const fs = require('fs');
const path = require('path');

const extractABI = (contractName) => {
  const contractPath = path.resolve(__dirname, `../build/contracts/${contractName}.json`);
  const contractJson = JSON.parse(fs.readFileSync(contractPath, 'utf8'));
  const abi = contractJson.abi;

  const networks = contractJson.networks;
  const networkId = Object.keys(networks)[0];
  const address = networks[networkId] && networks[networkId].address;

  if (!address) {
    console.error(`No address found for network ID ${networkId}`);
    process.exit(1);
  }

  return { abi, address };
}

module.exports = extractABI;