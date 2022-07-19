// Imports
import './App.css';
//import algosdk from "algosdk";
//import { PeraWalletConnect } from "@perawallet/connect";

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
    //const perawallet = new PeraWalletConnect()
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
          <p>
            <div>
            Equity
            </div>
            <div>
            Does the asset represent an equity interest in a company?
            </div>
            <div>
              <option disabled value="default" >Please select one option.</option>
            </div>
          </p>
        </div>
        <div>
          <p>
            <div>
            Decentralization
            </div>
            <div>
            How decentralized is the asset?
            </div>
            <div>
              <option disabled value="default" >Please select one option.</option>
            </div>
          </p>
        </div>
        <p>
          <div>
          <WalletConnect />
          </div>
          <div>
          <ChoiceCompliance />
          </div>
        </p>
      </header>
    </div>
  );

}

export default App;
