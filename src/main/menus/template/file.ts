import type { BrowserWindow } from 'electron';

const fileMenu = (mainWindow: BrowserWindow) => {
    return {
        label: '&File',
        submenu: [
            {
                label: '&Open',
                accelerator: 'Ctrl+O',
            },
            {
                label: '&Close',
                accelerator: 'Ctrl+W',
                click: () => {
                    mainWindow.close();
                },
            },
        ],
    };
};

export default fileMenu;
