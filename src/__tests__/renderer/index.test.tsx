/* eslint no-unused-vars: off */

import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { theme } from 'rvi-system';
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
                <ThemeProvider theme={theme}>
                    <MemoryRouter>
                        <LoginPage />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );
        const textElement = screen.getByText(/Dashboard/);
        expect(textElement).toBeInTheDocument();
    });
});
