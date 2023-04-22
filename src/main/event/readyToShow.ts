import { BrowserWindow } from 'electron';

const readyToShow = (mainWindow: BrowserWindow) => {
    if (!mainWindow) {
        throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
        mainWindow.minimize();
    } else {
        mainWindow.show();
    }
};

export default readyToShow;
