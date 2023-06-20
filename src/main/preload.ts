/* Disable no-unused-vars, broken for spread args */
/* eslint no-unused-vars: off */

import { contextBridge, ipcRenderer as ipcMainRenderer } from 'electron';
import type { IpcRendererEvent } from 'electron';
import type { Channels } from './types/Preload';

const electronhandler = {
    ipcRenderer: {
        sendMessage<T>(channel: Channels, args: T[]) {
            ipcMainRenderer.send(channel, args);
        },
        on<T, R>(channel: Channels, func: (...args: T[]) => R) {
            const subscription = (_event: IpcRendererEvent, ...args: T[]) => func(...args);
            ipcMainRenderer.on(channel, subscription);
            return () => {
                ipcMainRenderer.removeListener(channel, subscription);
            };
        },
        once<T, R>(channel: Channels, func: (...args: T[]) => R) {
            ipcMainRenderer.once(channel, (_event, ...args) => func(...args));
        },
        async asyncFunc<T, R>(channel: Channels, ...args: T[]) {
            const result: Promise<R> = await ipcMainRenderer.invoke(channel, ...args);
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
