const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const Web3 = require('web3');
const solc = require('solc');
const fs = require('fs');

let privateKey = process.env.SKALE_PRIVATE_KEY;
let account = process.env.SKALE_ACCOUNT;
let schainEndpoint = process.env.SKALE_CHAIN_URL;

console.log(schainEndpoint);

let contractName = 'Verify';
let contractFileName = 'Verify.sol';

//Retrieve and compile contract source code
const contractPath = path.resolve(__dirname, 'contracts', contractFileName);
const contractContent = fs.readFileSync(contractPath, 'UTF-8');

console.log(contractContent);

//Format contract for solc reader
var contracts = {
  language: 'Solidity',
  sources: {},
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

//add HelloSKALE contract to contract sources
contracts.sources[contractFileName] = { content: contractContent };

//compile data via solc reader
let solcOutput = JSON.parse(solc.compile(JSON.stringify(contracts)));

//get compile HelloSKALE contract
let contractCompiled = solcOutput.contracts[contractFileName][contractName];

//Connect Web3 to your SKALE Chain
const web3 = new Web3(new Web3.providers.HttpProvider(schainEndpoint));

//create transaction
var tx = {
  data: '0x' + contractCompiled.evm.bytecode.object,
  arguments: [account],
  from: account,
  gasPrice: 200000000,
  gas: 80000000,
};

//sign transaction to deploy contract
web3.eth.accounts.signTransaction(tx, privateKey).then((signed) => {
  web3.eth
    .sendSignedTransaction(signed.rawTransaction)
    .on('receipt', (receipt) => {
      console.log(receipt);
    })
    .catch(console.error);
});
