## Introduction

This project is a test application that shows how to visualize past events emitted by a contract deployed to the Ethereum Mainnet by using React + Web3. In particular, it connects to the ENS Registrar Contract and visualizes the past BidRevealed events, starting at a specified block number. It uses Infura to connect to the Mainnet.

For simplicity reasons it is not validating the inputs.

The code was styled with [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## How to run:

Edit web3.js and complete your Infura key (you can get one at infura.io).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
