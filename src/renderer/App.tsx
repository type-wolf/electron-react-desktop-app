import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import store from './store/index';
import theme from './components/theme';
import LoginPage from './pages';

export default function App() {
    return (
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                    </Routes>
                </Router>
            </ChakraProvider>
        </Provider>
    );
}
