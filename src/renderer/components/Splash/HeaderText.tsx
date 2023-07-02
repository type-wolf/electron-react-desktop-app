import { useState } from 'react';
import type { FC } from 'react';
import { Text } from '@chakra-ui/react';
import type { TextProps } from '@chakra-ui/react';
import type { SendStatusToRendererType } from 'main/types/Events/AppUpdater';

const SpalashHeaderText: FC<TextProps> = () => {
    const [data, setData] = useState<string | number>();
    window.electron.ipcRenderer.on('appUpdaterMessage', (datas: SendStatusToRendererType) => {
        if (datas.status === 'download-progress') {
            setData('Downloading ...');
        } else {
            setData(datas.data);
        }
    });
    return (
        <Text fontSize="16px" textColor="white500" marginTop="30px">
            {data}
        </Text>
    );
};

export default SpalashHeaderText;
