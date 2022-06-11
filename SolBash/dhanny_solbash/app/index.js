const { app, BrowserWindow, ipcMain } = require('electron');
const electron = require('electron');
try {
  require('electron-reloader')(module);
} catch (_) {}

let win;

const createWindow = () => {
  display = electron.screen.getPrimaryDisplay();

  win = new BrowserWindow({
    icon: __dirname + '/assets/img/choice-coin.png',
    width: 900,
    height: 720,
    show: false,
    fullscreen: false,
    resizable: true,
    position: 'center',
    toolbar: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      webSecurity: false
    }
  });

  win.loadFile(__dirname + '/index.html');

  ipcMain.on('connected', (event) => {
    win.loadFile(__dirname + '/dashboard.html');
  });

  win.on('closed', () => {
    win = null;
  });
  win.webContents.on('did-finish-load', function () {
    win.show();
  });
  win.webContents.openDevTools();
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
