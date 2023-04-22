import type { DarwinMenuItemConstructorOptions } from 'main/types/Menus/menu';

const subMenuWindow = (): DarwinMenuItemConstructorOptions => {
    return {
        label: 'Window',
        submenu: [
            {
                label: 'Minimize',
                accelerator: 'Command+M',
                selector: 'performMiniaturize:',
            },
            { label: 'Close', accelerator: 'Command+W', selector: 'performClose:' },
            { type: 'separator' },
            { label: 'Bring All to Front', selector: 'arrangeInFront:' },
        ],
    };
};

export default subMenuWindow;
