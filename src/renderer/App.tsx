import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { theme } from 'rvi-system';
import store from './store/index';
import LoginPage from './pages';

export default function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </Provider>
    );
}
