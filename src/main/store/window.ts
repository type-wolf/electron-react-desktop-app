import Store from 'electron-store';
import type { WindowStoreType } from 'main/types/Store/Window';

const windowStore = new Store<WindowStoreType>({
    configFileMode: 0o666,
    defaults: {
        x: undefined,
        y: undefined,
        width: 800,
        height: 640,
    },
});

export default windowStore;
