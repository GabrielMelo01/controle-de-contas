import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Header from './Components/Header';

function RoutesApp() {
    return (
        <BrowserRouter>
        <Header/>
        <hr/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />

                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}
export default RoutesApp;