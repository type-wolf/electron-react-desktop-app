/* Disable no-unused-vars, broken for spread args */
/* eslint no-unused-vars: off */

import type { Channels } from 'main/types/Preload';
import type { ElectronHandler } from 'main/preload';

declare global {
    interface Window {
        electron: ElectronHandler;
    }
}

export {};
