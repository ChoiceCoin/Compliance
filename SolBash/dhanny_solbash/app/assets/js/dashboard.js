// const {
//   Keypair,
//   Transaction,
//   Connection,
//   clusterApiUrl
// } = require('@solana/web3.js');
const bs58 = require('bs58');
// const { Keypair } = require(__dirname + '/node_modules/@solana/web3.js');
// const { Keypair } = require('@solana/web3.js');

const { getWallet } = require(__dirname + '/assets/js/AppStore');

(async () => {
  console.log('Getting wallet...');
  const walletAddress = document.getElementById('walletAddress');
  const wallet = await getWallet();
  walletAddress.innerText = wallet.publicAddress.substring(0, 15) + '...';
})();

const getVal = async (e) => {
  e.preventDefault();
  const equity = document.getElementById('equity');
  const purpose = document.getElementById('purpose');
  const control = document.getElementById('control');
  const derivatives = document.getElementById('derivatives');
  console.log(`${JSON.stringify(equity.value)} ${purpose.value}`);

  let embedded_knowledge =
    equity.value * purpose.value * control.value * derivatives.value;

  let intelligent_analysis = embedded_knowledge ** (1 / 9);
  console.log(intelligent_analysis);

  await makeTransaction();
};

const makeTransaction = async () => {
  const logPanel = document.getElementById('');
  // let fromKeyPair = Keypair.fromSecretKey(
  //   bs58.decode(
  //     'i4zzYZMJErMXS4PZEUcb6h8mHqHoVcA2PwWXLdQmAHu6L1MM9twCtcR9kKjaprqiCMqnsgZUyp9qLYxZgniVq7o'
  //   )
  // );
  // let toAddress = '27StTu34WJeZ4HkqgRyu6hPc4mCbRwqz8Zzs9hEXvXwa';
  // let transaction = new Transaction();
  // let connection = new Connection(clusterApiUrl('devnet'));
  // console.log('Checking balance on wallet...');
  // let balance = await connection.getBalance(fromKeyPair.publicKey);
  // console.log(`Getting balance is ${balance}`);
};
