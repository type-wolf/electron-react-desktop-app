import type { MenuItemConstructorOptions, BrowserWindow } from 'electron';

const subMenuViewProd = (mainWindow: BrowserWindow): MenuItemConstructorOptions => {
    return {
        label: 'View',
        submenu: [
            {
                label: 'Toggle Full Screen',
                accelerator: 'Ctrl+Command+F',
                click: () => {
                    mainWindow.setFullScreen(mainWindow.isFullScreen());
                },
            },
        ],
    };
};

export default subMenuViewProd;
