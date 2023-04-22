/* eslint global-require: off, no-console: off, promise/always-return: off */
import { shell } from 'electron';
import AppUpdater from './appUpdater';
import MenuBuilder from '../menus';
import resolveHtmlPath from '../utils/resolveHtmlPath';
import installExtensions from './installExtensions';
import createMainWindow from './createWindow';
import readyToShow from './readyToShow';
import close from './close';

if (process.env.NODE_ENV === 'production') {
    const sourceMapSupport = require('source-map-support');
    sourceMapSupport.install();
}

const isDebug = process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) require('electron-debug')();

export default async () => {
    if (isDebug) await installExtensions();

    const mainWindow = createMainWindow();

    mainWindow.loadURL(resolveHtmlPath('index.html'));

    mainWindow.on('ready-to-show', () => readyToShow(mainWindow));

    mainWindow.once('close', () => close(mainWindow));

    mainWindow.on('closed', () => console.log('closed'));

    const menuBuilder = mainWindow ? new MenuBuilder(mainWindow) : null;
    menuBuilder?.buildMenu();

    mainWindow.webContents.setWindowOpenHandler((edata) => {
        shell.openExternal(edata.url);
        return { action: 'deny' };
    });

    // eslint-disable-next-line
    new AppUpdater();

    return mainWindow;
};
