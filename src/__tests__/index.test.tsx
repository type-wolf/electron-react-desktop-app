import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import theme from '../renderer/components/config/theme';
import Store from '../renderer/store';
import LoginPage from '../renderer/pages';
import '@testing-library/jest-dom';

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
        const textElement = screen.getByText(/Count:/i);
        expect(textElement).toBeInTheDocument();
    });
});
