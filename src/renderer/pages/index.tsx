import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import type { DispatchType } from 'renderer/types/store';
import { useSelector } from 'renderer/store';
import Box from 'renderer/components/Box/Box';
import Button from 'renderer/components/Button/Button';
import { add } from 'renderer/store/count';
import type { OpenMessageDialog, OpenMessageDialogReturnValue, OpenFileDialogReturnValue } from 'main/types/Main';
import Input from 'renderer/components/Input/Input';
import Text from 'renderer/components/Text/Text';

const LoginPage: FC = () => {
    const [path, setPath] = useState('');
    const [isStyledClick, setIsStyledClick] = useState(false);
    const [isCheck, setIsCheck] = useState(false);
    const [filePath, setFilePath] = useState('');
    const styledButtonOnClickHandler = () => {
        /* eslint no-unused-expressions: off */
        isStyledClick ? setPath('') : setPath('/');
        setIsStyledClick(!isStyledClick);
    };
    const openMessageDialog = async () => {
        const { asyncFunc } = window.electron.ipcRenderer;
        const result = await asyncFunc<OpenMessageDialog, OpenMessageDialogReturnValue>('openMessageDialog', {
            type: 'info',
            detail: 'Hello! React With Electron!',
            message: 'StyledComponents With Button OnClick To OpenMessageDialog!',
            buttons: ['Nice!', 'Bad!'],
            defaultId: 0,
            cancelId: 1,
            checkboxLabel: 'Do Not Display Such Messages In The Future ?',
        });
        setIsCheck(result.checkboxChecked);
    };
    const openFileDialog = async () => {
        const { asyncFunc } = window.electron.ipcRenderer;
        const result = await asyncFunc<void, OpenFileDialogReturnValue>('openFileDialog');
        result.canceled ? setFilePath('') : setFilePath(result.filePaths[0]);
    };
    const dispatch: DispatchType = useDispatch();
    const count = useSelector((state) => state.count.countState.count);
    return (
        <Box styleType="ShadowCenter" display="flex" width="1200px" height="600px">
            <Box styleType="HStack">
                <Box styleType="VStack" spacing="5px">
                    <Text>Count: {count}</Text>
                    <Button onClick={() => dispatch(add(count + 1))}>ReduxToolKit</Button>
                </Box>
                <Box styleType="VStack" spacing="5px">
                    <Text>JampRootPath: {path}</Text>
                    <Button onClick={styledButtonOnClickHandler}>
                        <Link to="/">RoutePath</Link>
                    </Button>
                </Box>
                <Box styleType="VStack" spacing="5px">
                    <Text>{isCheck ? 'Use Checked' : 'Use UnChecked'}</Text>
                    <Button onClick={openMessageDialog}>OpenMessageDialog</Button>
                </Box>
                <Box styleType="VStack" spacing="5px">
                    <Text>{filePath ? `Selected File: ${filePath}` : 'Use Cancel'}</Text>
                    <Button color="black" background="gray" onClick={openFileDialog}>
                        OpenFileDialog
                    </Button>
                </Box>
                <Box styleType="VStack" spacing="5px">
                    <Text>Text Input</Text>
                    <Input />
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPage;
