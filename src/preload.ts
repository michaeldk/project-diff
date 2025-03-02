// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';
import { Setting } from './types/settings';

contextBridge.exposeInMainWorld('electronAPI', {
  getSetting: (key: string) => ipcRenderer.invoke('get-setting', key),
  setSetting: (key: string, value: Setting) => ipcRenderer.invoke('set-setting', key, value),
  deleteSetting: (key: string) => ipcRenderer.invoke('delete-setting', key),
  getAllSettings: () => ipcRenderer.invoke('get-all-settings')
});