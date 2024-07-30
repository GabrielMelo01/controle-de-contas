import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import RoutesApp from './routes';
import { ThemeProvider, useTheme } from './ThemeContext';

function App() {

    return (
        <ThemeProvider>
            <Main />
        </ThemeProvider>
    );
}

function Main() {
    const { theme } = useTheme();
    return (
        <div className={theme}>
            <ToastContainer autoClose={2000} />
            <RoutesApp />
        </div>
    );
}

export default App;
