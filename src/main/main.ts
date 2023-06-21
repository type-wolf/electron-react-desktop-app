/* eslint global-require: off, no-console: off, promise/always-return: off, no-unused-vars: off */

import { app, BrowserWindow, ipcMain, dialog } from 'electron';
import type { IpcMainInvokeEvent, FileFilter } from 'electron';
import { readFileSync } from 'fs';
import { mainWindowReady, splashWindowReady } from './event';
import allClose from './event/allClose';
import type { OpenMessageDialog } from './types/Main';

let mainWindow: BrowserWindow;
let splashWindow: BrowserWindow;

app.on('window-all-closed', () => allClose());

(async () => {
    await app.whenReady().catch(console.log);
    splashWindow = await splashWindowReady();
})();

// FileDialogを起動する関数
const openFileDialog = async (event: IpcMainInvokeEvent, filters: FileFilter[]) => {
    const result = await dialog.showOpenDialog(mainWindow, {
        properties: ['openFile'],
        filters,
    });
    return result;
};

const readFilesSync = (event: IpcMainInvokeEvent, filePath: string) => {
    const fileData = readFileSync(filePath);
    return fileData;
};

// MessageDislogを起動する関;
const openMessageDialog = async (event: IpcMainInvokeEvent, datas: OpenMessageDialog) => {
    const { type, message, detail, buttons, checkboxLabel } = datas;
    const result = await dialog.showMessageBox(mainWindow, {
        type,
        message,
        detail,
        buttons,
        defaultId: 2,
        cancelId: 1,
        checkboxLabel,
    });
    return result;
};

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
