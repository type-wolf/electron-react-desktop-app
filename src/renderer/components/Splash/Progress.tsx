/* eslint react/jsx-no-useless-fragment: off */

import { useState } from 'react';
import type { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import type { SendStatusToRendererType } from 'main/types/Events/AppUpdater';

const Progress: FC<BoxProps> = () => {
    const [percent, setPercent] = useState<string>('0%');
    window.electron.ipcRenderer.on('appUpdaterMessage', (datas: SendStatusToRendererType) => {
        if (datas.status === 'download-progress') {
            setPercent(`${datas.data}%`);
        }
    });
    return (
        <Box width="60%" bgColor="black400" height="10px" borderRadius="5px">
            <Box width={percent} height="100%" bgColor="white500" borderRadius="5px" />
        </Box>
    );
};

export default Progress;
