/* eslint no-unused-expressions: off */

import { FC, useState } from 'react';
import { useSelector } from 'renderer/store';
import { useDispatch } from 'react-redux';
import { DispatchType } from 'renderer/types/store';
import type { OpenMessageDialog, OpenMessageDialogReturnValue, OpenFileDialogReturnValue } from 'main/types/Main';
import { add, asyncAdd, minus } from 'renderer/store/count';
import {
    RvButton,
    RvInput,
    RvHStack,
    RvSidebarContainer,
    RvSidebar,
    RvStatHeader,
    RvMenu,
    RvMenuItem,
    RvMain,
    RvRow,
    RvColumn,
    RvStat,
    RvSidebarHeader,
    RvSubMenu,
    RvSpan,
} from 'rvi-system';

const LoginPage: FC = () => {
    const [filePath, setFilePath] = useState('');
    const [isCheck, setIsCheck] = useState<boolean>(false);
    const count = useSelector((state) => state.count.countState.count);
    const dispatch: DispatchType = useDispatch();

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

    return (
        <RvHStack width="100%" height="100%" justifyContent="start" flexWrap="nowrap" alignItems="center" bgColor="black700">
            <RvSidebarContainer>
                <RvSidebarHeader>Electron React</RvSidebarHeader>
                <RvSidebar>
                    <RvMenu>
                        <RvSubMenu label="Store">
                            <RvMenuItem onClick={() => dispatch(add(1))}>Add Store</RvMenuItem>
                            <RvMenuItem onClick={() => dispatch(minus(1))}>Minus Store</RvMenuItem>
                        </RvSubMenu>
                        <RvMenuItem>MenuItem3</RvMenuItem>
                        <RvMenuItem>MenuItem4</RvMenuItem>
                        <RvMenuItem>MenuItem5</RvMenuItem>
                        <RvSubMenu label="SubMenu2">
                            <RvMenuItem>MenuItem6</RvMenuItem>
                            <RvMenuItem>MenuItem7</RvMenuItem>
                        </RvSubMenu>
                        <RvSubMenu label="SubMenu3">
                            <RvMenuItem>MenuItem8</RvMenuItem>
                        </RvSubMenu>
                        <RvSubMenu label="SubMenu4">
                            <RvMenuItem>MenuItem9</RvMenuItem>
                            <RvMenuItem>MenuItem10</RvMenuItem>
                        </RvSubMenu>
                    </RvMenu>
                </RvSidebar>
            </RvSidebarContainer>
            <RvMain width="100%">
                <RvRow justifyContent="start" flexWrap="nowrap">
                    <RvHStack width="100%" height="20%" justifyContent="space-between" flexWrap="nowrap">
                        <RvSpan marginLeft={10} fontSize="20px">
                            Dashboard
                        </RvSpan>
                        <RvButton>Button1</RvButton>
                        <RvInput width="300px" marginRight={10} bgColor="black600" placeholder="Search" />
                    </RvHStack>
                    <RvColumn>
                        <RvStat>
                            <RvStatHeader marginTop={5}>{`Count: ${count}`}</RvStatHeader>
                            <RvButton onClick={() => dispatch(add(1))}>Add</RvButton>
                            <RvButton onClick={() => dispatch(minus(1))}>Minus</RvButton>
                            <RvButton width="auto" onClick={() => dispatch(asyncAdd({ payload: 1 }))}>
                                Async Add
                            </RvButton>
                        </RvStat>
                        <RvStat>
                            <RvStatHeader marginTop={5}>{`${isCheck ? 'isCheck: True' : 'isCheck: False'}`}</RvStatHeader>
                            <RvButton width="80%" onClick={openMessageDialog}>
                                Open Message Dialog
                            </RvButton>
                        </RvStat>
                        <RvStat>
                            <RvStatHeader marginTop={5}>{`SelectFilePath: ${filePath}`}</RvStatHeader>
                            <RvButton width="80%" onClick={openFileDialog}>
                                Open File Dialog
                            </RvButton>
                        </RvStat>
                        <RvStat>
                            <RvStatHeader>Stat4</RvStatHeader>
                        </RvStat>
                        <RvStat>
                            <RvStatHeader>Stat5</RvStatHeader>
                        </RvStat>
                        <RvStat>
                            <RvStatHeader>Stat6</RvStatHeader>
                        </RvStat>
                        <RvStat>
                            <RvStatHeader>Stat7</RvStatHeader>
                        </RvStat>
                        <RvStat>
                            <RvStatHeader>Stat8</RvStatHeader>
                        </RvStat>
                        <RvStat>
                            <RvStatHeader>Stat9</RvStatHeader>
                        </RvStat>
                    </RvColumn>
                </RvRow>
            </RvMain>
        </RvHStack>
    );
};

export default LoginPage;
