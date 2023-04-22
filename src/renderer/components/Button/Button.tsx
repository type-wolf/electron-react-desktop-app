/* eslint react/jsx-props-no-spreading: off */

import { FC } from 'react';
import { ButtonType } from '../../types/components/Button';
import styledButtonList from './StyleList';

const Button: FC<ButtonType> = ({ styleType = 'base', children, ...props }) => {
    const StyledButton = styledButtonList[styleType];
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
