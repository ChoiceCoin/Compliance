const Store = require('electron-store');

const store = new Store();

exports.getWallet = async () => {
  let wallet = await store.get('wallet');
  if (wallet != null) {
    return wallet;
  }
  return null;
};

exports.storeWallet = (wallet) => {
  store.set('wallet', wallet);
};
