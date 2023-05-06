import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import GlobalStyle from 'renderer/components/config/globalStyle';
import App from '../renderer/App';

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
