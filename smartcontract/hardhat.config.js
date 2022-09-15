require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');
const dotenv = require('dotenv');
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.7',
  networks: {
    rinkeby: {
      url: process.env.INFURA_KEY,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
};
