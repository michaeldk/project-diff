import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import started from 'electron-squirrel-startup';
import {
  getSetting,
  setSetting,
  editSetting,
  deleteSetting,
  getAllSettings,
} from './services/settings';
import { Setting } from './types/settings';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  // IPC handlers
  ipcMain.handle('get-setting', async (event, key: string) => {
    return getSetting(key);
  });
  
  ipcMain.handle('set-setting', async (event, value: Setting) => {
    setSetting(value);
  });
  
  ipcMain.handle('edit-setting', async (event, key: string, value: Setting) => {
    editSetting(key, value);
  });
  
  ipcMain.handle('delete-setting', async (event, key: string) => {
    deleteSetting(key);
  });
  
  ipcMain.handle('get-all-settings', async (event) => {
    return getAllSettings();
  });

  createWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});