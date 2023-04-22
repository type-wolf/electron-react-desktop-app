import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import LoginPage from './pages';

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                </Routes>
            </Router>
        </Provider>
    );
}
