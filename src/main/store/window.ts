import Store from 'electron-store';

export type WindowType = {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
};

const store = new Store<WindowType>({
    configFileMode: 0o666,
    defaults: {
        x: undefined,
        y: undefined,
        width: 800,
        height: 640,
    },
});

export default store;
