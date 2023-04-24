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
        <Box styleType="Center" display="flex" width="1200px" height="600px">
            <Box styleType="HStack" spacing="30px" width="80%" height="80%">
                <Box styleType="VStack" spacing="5px" width="100%" height="80%">
                    <p>Count: {count}</p>
                    <Button onClick={() => dispatch(add(count + 1))}>ReduxToolKit</Button>
                </Box>
                <Box styleType="VStack" spacing="5px" width="80%" height="80%">
                    <p>JampRootPath: {path}</p>
                    <Button onClick={styledButtonOnClickHandler}>
                        <Link to="/">RoutePath</Link>
                    </Button>
                </Box>
                <Box styleType="VStack" spacing="5px" width="80%" height="80%">
                    <p>{isCheck ? 'Use Checked' : 'Use UnChecked'}</p>
                    <Button onClick={openMessageDialog}>OpenMessageDialog</Button>
                </Box>
                <Box styleType="VStack" spacing="5px" width="80%" height="80%">
                    <p>{filePath ? `Selected File: ${filePath}` : 'Use Cancel'}</p>
                    <Button color="black" background="gray" onClick={openFileDialog}>
                        OpenFileDialog
                    </Button>
                </Box>
                <Box styleType="VStack" spacing="5px" width="80%" height="80%">
                    <p>Text Input</p>
                    <Input />
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPage;
