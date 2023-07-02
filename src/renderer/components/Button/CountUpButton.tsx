/* eslint react/jsx-props-no-spreading: off */

import type { FC } from 'react';
import { IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import type { IconButtonProps } from '@chakra-ui/react';
import { DispatchType } from 'renderer/types/store';
import { useDispatch } from 'react-redux';
import { add } from 'renderer/store/count';

const CountUpButton: FC<IconButtonProps> = ({ ...props }) => {
    const dispatch: DispatchType = useDispatch();
    const onClickHandler = () => {
        dispatch(add(1));
    };
    return <IconButton {...props} onClick={onClickHandler} icon={<AddIcon />} />;
};

export default CountUpButton;
