import { dialog } from 'electron';
import type { BrowserWindow, IpcMainInvokeEvent } from 'electron';
import type { OpenMessageDialog } from '../types/Main';

let mainWindow: BrowserWindow;

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

export default openMessageDialog;
