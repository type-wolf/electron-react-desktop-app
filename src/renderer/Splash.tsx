import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, RvVStack, theme } from 'rvi-system';
import SpalashHeaderText from './components/Splash/HeaderText';
import Progress from './components/Splash/Progress';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RvVStack height="100vh">
            <SpalashHeaderText />
            <Progress />
        </RvVStack>
    </ThemeProvider>
);
