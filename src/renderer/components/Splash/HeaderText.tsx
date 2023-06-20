import { useState } from 'react';
import type { FC } from 'react';
import { RvSpan } from 'rvi-system';
import type { SendStatusToRendererType } from 'main/types/Events/AppUpdater';

const SpalashHeaderText: FC = () => {
    const [data, setData] = useState<string | number>();
    window.electron.ipcRenderer.on('appUpdaterMessage', (datas: SendStatusToRendererType) => {
        if (datas.status === 'download-progress') {
            setData('Downloading ...');
        } else {
            setData(datas.data);
        }
    });
    return (
        <RvSpan fontSize="16px" textColor="white500" marginTop="150px">
            {data}
        </RvSpan>
    );
};

export default SpalashHeaderText;
