import type { BrowserWindow } from 'electron';

const viewMenu = (mainWindow: BrowserWindow) => {
    return {
        label: '&View',
        submenu:
            process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true'
                ? [
                      {
                          label: '&Reload',
                          accelerator: 'Ctrl+R',
                          click: () => {
                              mainWindow.webContents.reload();
                          },
                      },
                      {
                          label: 'Toggle &Full Screen',
                          accelerator: 'F11',
                          click: () => {
                              mainWindow.setFullScreen(!mainWindow.isFullScreen());
                          },
                      },
                      {
                          label: 'Toggle &Developer Tools',
                          accelerator: 'Alt+Ctrl+I',
                          click: () => {
                              mainWindow.webContents.toggleDevTools();
                          },
                      },
                  ]
                : [
                      {
                          label: 'Toggle &Full Screen',
                          accelerator: 'F11',
                          click: () => {
                              mainWindow.setFullScreen(!mainWindow.isFullScreen());
                          },
                      },
                  ],
    };
};

export default viewMenu;
