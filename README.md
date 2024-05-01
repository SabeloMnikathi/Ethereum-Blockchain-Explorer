# Ethereum Block Explorer

Welcome to the Ethereum Block Explorer repository! This project aims to provide a platform for exploring Ethereum's blockchain network, allowing users to access various information such as blocks, transactions, and account balances. The project utilizes the Ethereum JSON-RPC API and the `ethers.js` library for communication with the Ethereum network. The starter code includes basic functionality to retrieve the current block number and display it on the webpage, but the project is open-ended, allowing for expansion and customization based on your imagination and requirements.

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Project

Clone this repository to your local machine using the following command:

```bash
git clone <repository-url>
```

### 2. Install Dependencies

Navigate to the base directory of the project and install the necessary dependencies by running:

```bash
npm install
```

### 3. Obtain Alchemy API Key

If you haven't already, create a unique Alchemy API Mainnet key for your project. You can obtain the API key by following the instructions provided [here](https://docs.alchemy.com/reference/api-overview?a=eth-bootcamp).

### 4. Configure Environment Variables

Create an empty `.env` file in the base directory of the project. Add your Alchemy API key to the `.env` file as follows:

```bash
REACT_APP_ALCHEMY_API_KEY=YOUR_ALCHEMY_API_KEY
```

Replace `YOUR_ALCHEMY_API_KEY` with the API key you obtained from Alchemy.

### 5. Start the Webserver

Run the following command to start the development server:

```bash
npm start
```

This will launch the application in development mode. Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

The webpage will automatically reload whenever you make changes to the code.

## Features and Functionality

The starter code provides a foundation for building a comprehensive Ethereum Block Explorer. Here are some features and challenges you can implement to enhance the block explorer:

### 1. Display Block Information

Retrieve additional information about the current block and display it on the webpage. You can use the `alchemy.core.getBlock()` method to fetch block details.

### 2. Explore Transactions

Retrieve the list of transactions for a given block using the `alchemy.core.getBlockWithTransactions()` method. Additionally, implement functionality to fetch details of individual transactions using the `alchemy.core.getTransactionReceipt()` method.

### 3. Interactive User Interface

Create an interactive user interface where users can click on a block to view its details, including the list of transactions. Similarly, allow users to click on specific transactions to view their details.

### 4. Account Balance Lookup

Implement an accounts page where users can look up their Ethereum account balances or the balances of other accounts.

### 5. Supercharge with AlchemySDK

Explore additional features offered by the AlchemySDK to enhance the functionality of your block explorer. Utilize specialized APIs such as NFT methods, WebSocket methods, Transact API functionality, and Notify Webhooks to implement advanced features.

## Resources

- [Etherscan](https://etherscan.io/): Explore Ethereum blockchain with Etherscan for reference.
- [AlchemySDK Documentation](https://docs.alchemy.com/reference/alchemy-sdk-quickstart?a=eth-bootcamp): Learn more about AlchemySDK and its features.
- [Alchemysdk API Surface Overview](https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview?a=eth-bootcamp): Explore specialized APIs provided by AlchemySDK.

## Conclusion

With the Ethereum Block Explorer project, you have the opportunity to delve into the world of blockchain exploration and enhance your understanding of Ethereum's capabilities. Experiment with different features, explore advanced APIs, and have fun building your custom block explorer! Good luck!