import type { BrowserWindow, MenuItemConstructorOptions } from 'electron';

const subMenuViewDev = (mainWindow: BrowserWindow): MenuItemConstructorOptions => {
    return {
        label: 'View',
        submenu: [
            {
                label: 'Reload',
                accelerator: 'Command+R',
                click: () => {
                    mainWindow.webContents.reload();
                },
            },
            {
                label: 'Toggle Full Screen',
                accelerator: 'Ctrl+Command+F',
                click: () => {
                    mainWindow.setFullScreen(mainWindow.isFullScreen());
                },
            },
            {
                label: 'Toggle Developer Tools',
                accelerator: 'Alt+Command+I',
                click: () => {
                    mainWindow.webContents.toggleDevTools();
                },
            },
        ],
    };
};

export default subMenuViewDev;
