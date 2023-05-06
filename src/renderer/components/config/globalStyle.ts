import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
    body {
        background: ${theme.colors.systemColors.white[800]};
    }
`;

export default GlobalStyle;
