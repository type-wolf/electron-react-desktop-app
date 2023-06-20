/* eslint react/jsx-no-useless-fragment: off */

import { useState } from 'react';
import { RvBox } from 'rvi-system';
import type { SendStatusToRendererType } from 'main/types/Events/AppUpdater';

const Progress = () => {
    const [percent, setPercent] = useState<string>('0%');
    window.electron.ipcRenderer.on('appUpdaterMessage', (datas: SendStatusToRendererType) => {
        if (datas.status === 'download-progress') {
            setPercent(`${datas.data}%`);
        }
    });
    return (
        <RvBox width="60%" bgColor="black400" height="10px" borderRadius="5px">
            <RvBox width={percent} height="100%" bgColor="white500" borderRadius="5px" />
        </RvBox>
    );
};

export default Progress;
