import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { useTheme } from '../../ThemeContext';

function Navbar() {
    const [headerOpacity, setHeaderOpacity] = useState(0);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = 800; // Defina o valor máximo de scroll para opacidade máxima
            const opacity = Math.min(scrollY / maxScroll, 1);
            setHeaderOpacity(opacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav style={{ backgroundColor: `rgba(0, 0, 0, ${headerOpacity > 0.70 ? 0.70 : headerOpacity})`, backdropFilter: 'blur(5px)' }}>
            <Link className="logo" to='/'>Minhas Despesas</Link>
            <Link className="favoritos" to='/login'>Minha Conta</Link>
            <button onClick={toggleTheme} className="theme-button" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>{theme === 'light' ? '🌙' : '☀️'}</button>
        </nav>
    );
}

export default Navbar;