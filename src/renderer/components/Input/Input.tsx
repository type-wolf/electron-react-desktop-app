/* eslint react/jsx-props-no-spreading: off */

import { FC } from 'react';
import type { InputType } from 'renderer/types/components/Input';
import styleInputList from './StyleList';

const Input: FC<InputType> = ({ children, styleType = 'base', ...props }) => {
    const StyledInput = styleInputList[styleType];
    return <StyledInput {...props} />;
};

export default Input;
