import path from 'path';
import { app, BrowserWindow } from 'electron';
import windowStore from '../store/window';

const createWindow = () => {
    const RESOURCES_PATH = app.isPackaged
        ? path.join(process.resourcesPath, '../../assets')
        : path.join(__dirname, '../../../../assets');

    const getAssetPath = (...paths: string[]): string => {
        return path.join(RESOURCES_PATH, ...paths);
    };

    const mainWindow = new BrowserWindow({
        show: false,
        x: windowStore.get('x'),
        y: windowStore.get('y'),
        width: windowStore.get('width'),
        height: windowStore.get('height'),
        icon: getAssetPath('../../icon.png'),
        webPreferences: {
            nodeIntegration: true,
            preload: app.isPackaged ? path.join(__dirname, 'preload.js') : path.join(__dirname, '../../../.erb/dll/preload.js'),
        },
    });

    return mainWindow;
};

export default createWindow;
