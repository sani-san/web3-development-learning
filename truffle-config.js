require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

const privateKey = process.env.PRIVATE_KEY;
const infuraProjectId = process.env.INFURA_PROJECT_ID;

if (!privateKey || !infuraProjectId) {
  throw new Error('Please set your PRIVATE_KEY and INFURA_PROJECT_ID in a .env file');
}

const provider = new HDWalletProvider({
  privateKeys: [privateKey],
  providerOrUrl: `https://sepolia.infura.io/v3/${infuraProjectId}`
});

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    sepolia: {
      provider: () => provider,
      network_id: 11155111,       // Sepolia's network id
      gas: 5500000,               // Gas limit
      confirmations: 2,           // Number of confirmations to wait between deployments
      timeoutBlocks: 200,         // Number of blocks before a deployment times out
      skipDryRun: true            // Skip dry run before migrations
    },
  },
  compilers: {
    solc: {
      version: "0.8.21",    // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
