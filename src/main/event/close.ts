import { BrowserWindow } from 'electron';
import windowStore from '../store/window';

const setWindowStore = (mainWindow: BrowserWindow) => {
    const { x, y, width, height } = mainWindow.getBounds();
    windowStore.set({ x, y, width, height });
};

export default setWindowStore;
