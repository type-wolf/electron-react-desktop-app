import { createRoot } from 'react-dom/client';
import { ChakraProvider, VStack } from '@chakra-ui/react';
import theme from './components/theme';
import SpalashHeaderText from './components/Splash/HeaderText';
import Progress from './components/Splash/Progress';
import Loader from './components/Splash/Loader';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
    <ChakraProvider theme={theme}>
        <VStack height="100vh" spacing={10}>
            <Loader />
            <SpalashHeaderText />
            <Progress />
        </VStack>
    </ChakraProvider>
);
