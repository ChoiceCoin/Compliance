const { app, BrowserWindow, ipcMain } = require('electron');
const electron = require('electron');
const ElectronStore = require('electron-store');

try {
  require('electron-reloader')(module);
} catch (_) {}

let win;

ElectronStore.initRenderer();

const createWindow = () => {
  display = electron.screen.getPrimaryDisplay();

  win = new BrowserWindow({
    icon: __dirname + '/assets/img/choice-coin.png',
    width: 1100,
    height: 720,
    show: false,
    fullscreen: false,
    resizable: true,
    position: 'center',
    toolbar: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadURL(`file://${__dirname}/index.html`);

  ipcMain.on('connected', (event) => {
    win.loadURL(`file://${__dirname}/dashboard.html`);
  });

  win.on('closed', () => {
    win = null;
  });
  win.webContents.on('did-finish-load', function () {
    win.show();
  });
  // win.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
