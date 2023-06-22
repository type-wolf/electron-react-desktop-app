/* eslint lines-between-class-members: off, no-useless-constructor: off, no-unused-vars: off, no-empty-function: off, max-classes-per-file: off */

import { BrowserWindowConstructorOptions, BrowserWindow } from 'electron';
import { autoUpdater } from 'electron-updater';
import AppUpdater from '../../main/event/appUpdater';

jest.mock('electron', () => {
    class MockBrowserWindow {
        constructor(options: BrowserWindowConstructorOptions) {}
        webContents = {
            send: jest.fn(),
            once: jest.fn(),
        };
        hide = jest.fn();
        destroy = jest.fn();
    }

    return {
        BrowserWindow: MockBrowserWindow,
    };
});

jest.mock('electron-updater', () => ({
    autoUpdater: {
        setFeedURL: jest.fn(),
        checkForUpdates: jest.fn(),
        on: jest.fn(),
        quitAndInstall: jest.fn(),
        getVersion: jest.fn(),
    },
}));

describe('AppUpdater', () => {
    let mockWindow: any;

    beforeEach(() => {
        mockWindow = new BrowserWindow() as any;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should send initial status message to renderer on did-finish-load event', () => {
        const appUpdater = new AppUpdater(mockWindow);
        expect(mockWindow.webContents.once).toHaveBeenCalledWith('did-finish-load', expect.any(Function));
        const didFinishLoadCallback = mockWindow.webContents.once.mock.calls[0][1];
        didFinishLoadCallback();
        expect(mockWindow.webContents.send).toHaveBeenCalledWith('appUpdaterMessage', {
            status: 'checking-for-update',
            data: 'Checking For Update...',
        });
    });

    it('should send status message to renderer on checking-for-update event', () => {
        const sendMock = jest.fn();
        const onMock = jest.fn((event: string, callback: Function) => {
            if (event === 'checking-for-update') {
                callback();
            }
            return autoUpdater;
        });

        mockWindow.webContents.send = sendMock;
        autoUpdater.on = onMock;

        const appUpdater = new AppUpdater(mockWindow);

        expect(onMock).toHaveBeenCalledWith('checking-for-update', expect.any(Function));
        expect(sendMock).toHaveBeenCalledWith('appUpdaterMessage', {
            status: 'checking-for-update',
            data: 'Checking for update...',
        });
    });
});
