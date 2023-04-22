/* Disable no-unused-vars, broken for spread args */
/* eslint no-unused-vars: off */

import { contextBridge, ipcRenderer as ipcMainRenderer } from 'electron';
import type { IpcRendererEvent } from 'electron';
import type { Channels } from './types/Preload';

const electronhandler = {
    ipcRenderer: {
        sendMessage<t>(channel: Channels, args: t[]) {
            ipcMainRenderer.send(channel, args);
        },
        on<t, r>(channel: Channels, func: (...args: t[]) => r) {
            const subscription = (_event: IpcRendererEvent, ...args: t[]) => func(...args);
            ipcMainRenderer.on(channel, subscription);
            return () => {
                ipcMainRenderer.removeListener(channel, subscription);
            };
        },
        once<t, r>(channel: Channels, func: (...args: t[]) => r) {
            ipcMainRenderer.once(channel, (_event, ...args) => func(...args));
        },
        async asyncFunc<t, r>(channel: Channels, ...args: t[]) {
            const result: Promise<r> = await ipcMainRenderer.invoke(channel, ...args);
            return result;
        },
    },
};

contextBridge.exposeInMainWorld('electron', electronhandler);

export type ElectronHandler = typeof electronhandler;

declare global {
    interface window {
        electron: ElectronHandler;
    }
}
