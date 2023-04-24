/* eslint react/jsx-props-no-spreading: off */

import { FC } from 'react';
import type { TextType } from 'renderer/types/components/Text';
import StyledTextList from './StyleList';

const Text: FC<TextType> = ({ styleType = 'base', children, ...props }) => {
    const StyledText = StyledTextList[styleType];
    return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
