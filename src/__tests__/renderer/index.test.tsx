/* eslint no-unused-vars: off, jest/expect-expect: off */

import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import theme from 'renderer/components/theme';
import Store from '../../renderer/store';
import LoginPage from '../../renderer/pages';
import '@testing-library/jest-dom';

window.matchMedia = jest.fn().mockImplementation((query) => {
    return {
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    };
});

window.ResizeObserver = jest.fn().mockImplementation(() => {
    return {
        observe() {},
        unobserve() {},
        disconnect() {},
    };
});

jest.mock('electron', () => ({
    ipcRenderer: {
        sendMessage: jest.fn(),
        on: jest.fn(),
        once: jest.fn(),
        asyncFunc: jest.fn(),
    },
}));

describe('LoginPage component', () => {
    it('renders correctly', () => {
        render(
            <Provider store={Store}>
                <ChakraProvider theme={theme}>
                    <MemoryRouter>
                        <LoginPage />
                    </MemoryRouter>
                </ChakraProvider>
            </Provider>
        );
    });
});
