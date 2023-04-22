import path from 'path';
import { app, BrowserWindow } from 'electron';
import store from '../store/window';

const createWindow = () => {
    const RESOURCES_PATH = app.isPackaged
        ? path.join(process.resourcesPath, '../../assets')
        : path.join(__dirname, '../../../../assets');

    const getAssetPath = (...paths: string[]): string => {
        return path.join(RESOURCES_PATH, ...paths);
    };

    const mainWindow = new BrowserWindow({
        show: false,
        x: store.get('x'),
        y: store.get('y'),
        width: store.get('width'),
        height: store.get('height'),
        icon: getAssetPath('../../icon.png'),
        webPreferences: {
            nodeIntegration: true,
            preload: app.isPackaged ? path.join(__dirname, 'preload.js') : path.join(__dirname, '../../../.erb/dll/preload.js'),
        },
    });

    return mainWindow;
};

export default createWindow;
