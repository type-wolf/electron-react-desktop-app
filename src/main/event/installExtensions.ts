/* eslint global-require: off, no-console: off, promise/always-return: off, no-sequences: off  */

const installExtensions = async () => {
    const installer = require('electron-devtools-installer');
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    const extensions = ['REACT_DEVELOPER_TOOLS'];
    return extensions.map((name) => installer[name]), { forceDownload, loadExtensionOptions: { allowFileAccess: true } };
};
export default installExtensions;
