/* eslint global-require: off, no-console: off, promise/always-return: off, no-unused-vars: off */

import { app, ipcMain } from 'electron';
import { splashWindowReady } from './event';
import allClose from './event/allClose';
import openFileDialog from './utils/openDialog';
import readFilesSync from './utils/readFileSync';
import openMessageDialog from './utils/openMessageDialog';

app.on('window-all-closed', () => allClose());

(async () => {
    await app.whenReady().catch(console.log);
    await splashWindowReady();
})();

/**
 * Add event listeners...
 */

ipcMain.on('ipc-example', async (event, arg) => {
    const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
    console.log(msgTemplate(arg));
    event.reply('ipc-example', msgTemplate('pong'));
});
ipcMain.handle('openFileDialog', openFileDialog);
ipcMain.handle('readFilesSync', readFilesSync);
ipcMain.handle('openMessageDialog', openMessageDialog);
