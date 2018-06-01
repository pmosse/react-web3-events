import Web3 from 'web3';

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    'https://mainnet.infura.io/{ YOUR INFURA KEY }'
  )
);

export default web3;
