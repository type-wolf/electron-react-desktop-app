import { readFileSync } from 'fs';
import type { IpcMainInvokeEvent } from 'electron';

const readFilesSync = (event: IpcMainInvokeEvent, filePath: string) => {
    const fileData = readFileSync(filePath);
    return fileData;
};

export default readFilesSync;
