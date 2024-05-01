import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

import './App.css';

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [blockInfo, setBlockInfo] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const latestBlockNumber = await alchemy.core.getBlockNumber();
    setBlockNumber(latestBlockNumber);
    const currentBlockInfo = await alchemy.core.getBlock(latestBlockNumber);
    setBlockInfo(currentBlockInfo);
    const blockTransactions = await alchemy.core.getBlockWithTransactions(latestBlockNumber);
    setTransactions(blockTransactions.transactions);
  };

  const handleBlockClick = async (blockNumber) => {
    const blockInfo = await alchemy.core.getBlock(blockNumber);
    setBlockInfo(blockInfo);
    const blockTransactions = await alchemy.core.getBlockWithTransactions(blockNumber);
    setTransactions(blockTransactions.transactions);
    setSelectedTransaction(null);
  };

  const handleTransactionClick = async (transactionHash) => {
    const transaction = await alchemy.core.getTransactionReceipt(transactionHash);
    setSelectedTransaction(transaction);
  };

  const handleAccountSearch = async () => {
    const accountBalance = await alchemy.core.getBalance(account);
    setBalance(accountBalance);
  };

  return (
    <div className="App">
      <h1>Ethereum Blockchain Explorer</h1>
      <h2>Current Block Number: {blockNumber}</h2>
      <div>
        <h3>Block Information:</h3>
        <pre>{JSON.stringify(blockInfo, null, 2)}</pre>
      </div>
      <div>
        <h3>Transactions in the Current Block:</h3>
        <ul>
          {transactions.map((tx, index) => (
            <li key={index} onClick={() => handleTransactionClick(tx.hash)}>
              <strong>Transaction Hash:</strong> {tx.hash}
            </li>
          ))}
        </ul>
      </div>
      {selectedTransaction && (
        <div>
          <h3>Transaction Details:</h3>
          <pre>{JSON.stringify(selectedTransaction, null, 2)}</pre>
        </div>
      )}
      <div>
        <h3>Account Balance Lookup:</h3>
        <input
          type="text"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          placeholder="Enter Ethereum Account Address"
        />
        <button onClick={handleAccountSearch}>Search</button>
        {balance !== '' && <p>Balance: {balance}</p>}
      </div>
    </div>
  );
}

export default App;
