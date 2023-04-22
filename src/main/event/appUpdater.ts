import { dialog } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';

export default class AppUpdater {
    constructor() {
        log.transports.file.level = 'info';
        autoUpdater.logger = log;
        autoUpdater.setFeedURL({
            provider: 'github',
            owner: 'ito-rui',
            repo: 'electron-react-desktop-app',
            // private: true,
            // token: process.env.GH_TOKEN as string, // Repo Scope Permission
        });
        autoUpdater.checkForUpdates();
        autoUpdater.on('checking-for-update', () => {
            log.info(process.pid, 'checking-for-update...');
        });
        autoUpdater.on('update-available', () => {
            log.info(process.pid, 'Update available.');
        });
        autoUpdater.on('update-not-available', () => {
            log.info(process.pid, 'Update not available.');
        });
        autoUpdater.on('update-downloaded', async () => {
            const dialogOpts = {
                type: 'info',
                buttons: ['更新して再起動', 'あとで更新する'],
                message: '新しいバージョンがあります',
                detail: '新バージョンをダウンロードしました。\n\n再起動して更新を適用しますか？',
            };
            const { response } = await dialog.showMessageBox(dialogOpts);
            if (response === 0) {
                autoUpdater.quitAndInstall();
            }
        });
        autoUpdater.on('error', (err) => {
            log.error(process.pid, err);
        });
    }
}
