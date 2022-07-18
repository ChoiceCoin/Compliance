// Imports
import './App.css';
//import algosdk from "algosdk";

// Compliance
function ChoiceCompliance() {
   // Algorand Network Connection
   const algod_token = {
    'X-API-Key': ''
  }
  const algod_address = '';
  const headers = '';
  const ASSET_ID = 297995609;
  //const algodClient = new algosdk.Algodv2(algod_token, algod_address, headers);
  const serviceAddress = ''

  // Contract
  const compliance = () => {
    console.log('Compliance')
  }
  return (
    <button onClick={compliance}>Calculate Compliance</button>
  )
};

// Wallet Connect
function WalletConnect() {
  const wallet = () => {
    console.log('Connect')
  }
  return(
    <button onClick={wallet}>Connect Wallet</button>
  )
};

// React functions must return a React component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Choice Coin Compliance
        </h1>
        <div>
          Factor One
        </div>
        <div>
          Factor Two
        </div>
        <div>
        <WalletConnect />
        </div>
        <div>
        <ChoiceCompliance />
        </div>
      </header>
    </div>
  );

}

export default App;