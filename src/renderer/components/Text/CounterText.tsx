/* eslint react/jsx-props-no-spreading: off */

import type { FC } from 'react';
import { Text } from '@chakra-ui/react';
import type { TextProps } from '@chakra-ui/react';
import { useSelector } from 'renderer/store';

const CounterText: FC<TextProps> = ({ children, ...props }) => {
    const count = useSelector((state) => state.count.countState.count);
    return <Text {...props}>{count}</Text>;
};

export default CounterText;
