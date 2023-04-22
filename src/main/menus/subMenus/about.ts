import { app } from 'electron';
import type { DarwinMenuItemConstructorOptions } from 'main/types/Menus/menu';

const subMenuAbout = (): DarwinMenuItemConstructorOptions => {
    return {
        label: 'Electron',
        submenu: [
            { label: 'About ElectronReact', selector: 'orderFrontStandardAboutPanel:' },
            { type: 'separator' },
            { label: 'Services', submenu: [] },
            { type: 'separator' },
            {
                label: 'Hide ElectronReact',
                accelerator: 'Command+H',
                selector: 'hide:',
            },
            {
                label: 'Hide Others',
                accelerator: 'Command+Shift+H',
                selector: 'hideOtherApplications:',
            },
            { label: 'Show All', selector: 'unhideAllApplications:' },
            { type: 'separator' },
            {
                label: 'Quit',
                accelerator: 'Command+Q',
                click: () => {
                    app.quit();
                },
            },
        ],
    };
};

export default subMenuAbout;
