import { BrowserWindow } from 'electron';
import store from '../store/window';

const close = (mainWindow: BrowserWindow) => {
    const { x, y, width, height } = mainWindow.getBounds();
    store.set({ x, y, width, height });
};

export default close;
