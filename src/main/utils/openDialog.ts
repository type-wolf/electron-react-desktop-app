import { dialog } from 'electron';
import type { IpcMainInvokeEvent, FileFilter, BrowserWindow } from 'electron';

let mainWindow: BrowserWindow;

const openFileDialog = async (event: IpcMainInvokeEvent, filters: FileFilter[]) => {
    const result = await dialog.showOpenDialog(mainWindow, {
        properties: ['openFile'],
        filters,
    });
    return result;
};

export default openFileDialog;
