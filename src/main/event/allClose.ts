import { app } from 'electron';

const allClose = () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
};

export default allClose;
