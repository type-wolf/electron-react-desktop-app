import path from 'path';
import { app, BrowserWindow, screen } from 'electron';

const createSplashWindow = () => {
    const RESOURCES_PATH = app.isPackaged
        ? path.join(process.resourcesPath, '../../assets')
        : path.join(__dirname, '../../../../assets');

    const getAssetPath = (...paths: string[]): string => {
        return path.join(RESOURCES_PATH, ...paths);
    };

    const offSet = 150;

    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    const splashWindow = new BrowserWindow({
        show: false,
        frame: false,
        x: Math.floor((width - 350) / 2),
        y: Math.floor((height - 350) / 2) - offSet,
        width: 350,
        height: 350,
        icon: getAssetPath('../../icon.png'),
        webPreferences: {
            nodeIntegration: true,
            preload: app.isPackaged ? path.join(__dirname, 'preload.js') : path.join(__dirname, '../../../.erb/dll/preload.js'),
        },
    });

    return splashWindow;
};

export default createSplashWindow;
