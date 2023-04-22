import { shell } from 'electron';
import type { MenuItemConstructorOptions } from 'electron';

const subMenuHelp = (): MenuItemConstructorOptions => {
    return {
        label: 'Help',
        submenu: [
            {
                label: 'Learn More',
                click() {
                    shell.openExternal('https://electronjs.org');
                },
            },
            {
                label: 'Documentation',
                click() {
                    shell.openExternal('https://github.com/electron/electron/tree/main/docs#readme');
                },
            },
            {
                label: 'Community Discussions',
                click() {
                    shell.openExternal('https://www.electronjs.org/community');
                },
            },
            {
                label: 'Search Issues',
                click() {
                    shell.openExternal('https://github.com/electron/electron/issues');
                },
            },
        ],
    };
};

export default subMenuHelp;
