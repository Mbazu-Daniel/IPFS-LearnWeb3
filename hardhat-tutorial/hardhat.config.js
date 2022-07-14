require("@nomiclabs/hardhat-waffle"); // library from Hardhat to enable us write this kind of code
require("dotenv").config({ path: ".env" }); // This gets the environment variables

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [MUMBAI_PRIVATE_KEY],
    },
  },
};
