//https://eth-ropsten.alchemyapi.io/v2/gXSVwqX9x6h6KG6xxNTY9IkxeJSSptqE

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.11',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/gXSVwqX9x6h6KG6xxNTY9IkxeJSSptqE',
      accounts: ['0b6409e7a11668c44c4cae32c11ba4c79c995f56603265d7abcd4049d9f0f3af']
    }
  }
}