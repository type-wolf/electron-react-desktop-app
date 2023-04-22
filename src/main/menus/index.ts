import { Menu } from 'electron';
import type { BrowserWindow, MenuItemConstructorOptions } from 'electron';
import subMenuAbout from './subMenus/about';
import subMenuEdit from './subMenus/edit';
import subMenuHelp from './subMenus/help';
import subMenuWindow from './subMenus/window';
import subMenuViewProd from './subMenus/view';
import subMenuViewDev from './dev/view';
import fileMenu from './template/file';
import viewMenu from './template/view';
import helpMenu from './template/help';

export default class MenuBuilder {
    mainWindow: BrowserWindow;

    constructor(mainWindow: BrowserWindow) {
        this.mainWindow = mainWindow;
    }

    buildMenu(): Menu {
        if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
            this.setupDevelopmentEnvironment();
        }

        const template = process.platform === 'darwin' ? this.buildDarwinTemplate() : this.buildDefaultTemplate();

        const menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);

        return menu;
    }

    setupDevelopmentEnvironment(): void {
        this.mainWindow.webContents.on('context-menu', (_, props) => {
            const { x, y } = props;

            Menu.buildFromTemplate([
                {
                    label: 'Inspect element',
                    click: () => {
                        this.mainWindow.webContents.inspectElement(x, y);
                    },
                },
            ]).popup({ window: this.mainWindow });
        });
    }

    buildDarwinTemplate(): MenuItemConstructorOptions[] {
        const subMenuView =
            process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true'
                ? subMenuViewDev(this.mainWindow)
                : subMenuViewProd(this.mainWindow);

        return [subMenuAbout(), subMenuEdit(), subMenuView, subMenuWindow(), subMenuHelp()];
    }

    buildDefaultTemplate() {
        const templateDefault = [fileMenu(this.mainWindow), viewMenu(this.mainWindow), helpMenu()];
        return templateDefault;
    }
}
