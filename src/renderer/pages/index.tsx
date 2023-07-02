/* eslint no-unused-expressions: off */

import type { FC } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import CounterText from 'renderer/components/Text/CounterText';
import CountUpButton from 'renderer/components/Button/CountUpButton';

const LoginPage: FC = () => {
    return (
        <Box>
            <VStack>
                <CounterText />
                <CountUpButton aria-label="Countup" />
            </VStack>
        </Box>
    );
};

export default LoginPage;
