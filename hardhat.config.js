require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-contract-sizer")
require('@typechain/hardhat')

const {
  MATIC_TESTNET_URL,
  MATIC_TESTNET_DEPLOY_KEY,
  MOONBEAM_URL,
  MOONBEAM_DEPLOY_KEY
} = require("./env.json")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.info(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    maticTestnet: {
      url: MATIC_TESTNET_URL,
      chainId: 80001,
      gasPrice: 20000000000,
      accounts: [MATIC_TESTNET_DEPLOY_KEY]
    },
    moonbeam: {
      url: MOONBEAM_URL,
      chainId: 1284,
      gasPrice: 100000000000,
      accounts: [MOONBEAM_DEPLOY_KEY]
    }
  },
  etherscan: {
    apiKey: {
      maticTestnet: MATIC_TESTNET_DEPLOY_KEY,
      moonbeam: MOONBEAM_DEPLOY_KEY,
    }
  },
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1
      }
    }
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },

  
}
