const { Keypair } = require('@solana/web3.js');
const bs58 = require('bs58');
const { ipcRenderer } = require('electron');
const { store } = require(__dirname + '/assets/js/AppStore');

// i4zzYZMJErMXS4PZEUcb6h8mHqHoVcA2PwWXLdQmAHu6L1MM9twCtcR9kKjaprqiCMqnsgZUyp9qLYxZgniVq7o
const connectBtn = document.getElementById('connectWallet');
connectBtn.addEventListener('click', () => {
  const privateKeyInput = document.getElementById('private_input');
  connectBtn.innerText = 'Connecting to wallet';
  connectBtn.setAttribute('disabled', '');
  try {
    let wallet = Keypair.fromSecretKey(bs58.decode(privateKeyInput.value));
    connectBtn.removeAttribute('disabled');
    connectBtn.innerText = 'Connect to Wallet';
    console.log(JSON.stringify(wallet));
    store.set('wallet', JSON.stringify(wallet));
    ipcRenderer.send('connected');
  } catch (error) {
    console.log(error);
    connectBtn.removeAttribute('disabled');
    connectBtn.innerText = 'Connect to Wallet';
  }
});
