/* eslint react/jsx-props-no-spreading: off */

import { FC } from 'react';
import { BoxType } from 'renderer/types/components/Box';
import styledBoxList from './StyleList';

const Box: FC<BoxType> = ({ children, styleType = 'base', ...props }) => {
    const StyledBox = styledBoxList[styleType];
    return <StyledBox {...props}>{children}</StyledBox>;
};

export default Box;
