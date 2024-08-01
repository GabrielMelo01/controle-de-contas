import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';

function RoutesApp() {
    return (
        <BrowserRouter>
        <Navbar/>
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