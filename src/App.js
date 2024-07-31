import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import RoutesApp from './routes';
import { ThemeProvider, useTheme } from './ThemeContext';

function App() {
    const { theme } = useTheme();
    return (
        <>
            <ThemeProvider>
                <RoutesApp />
                <ToastContainer />
            </ThemeProvider>
        </>
    );
}

export default App;
