/* eslint no-unused-vars: off */

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { GlobalStyle } from 'rvi-system';
import App from '../renderer/App';

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

describe('App', () => {
    it('should render', () => {
        expect(
            render(
                <>
                    <GlobalStyle />
                    <App />
                </>
            )
        ).toBeTruthy();
    });
});
