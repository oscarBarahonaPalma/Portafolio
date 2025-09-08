import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Estilos/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header" role="banner">
      <div className="header__inner">
        <Link to="/" className="brand" aria-label="Inicio">
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="24" height="24" rx="6" fill="#00FF99" />
            <path d="M9 9L5 12L9 15" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 9L19 12L15 15" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="brand__name">Oscar.dev</span>
        </Link>

        <button
          className={`hamburger ${menuOpen ? 'is-open' : ''}`}
          aria-label="Abrir menú"
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="primary-navigation" className={`menu ${menuOpen ? 'is-open' : ''}`}>
          <li>
            <NavLink to="/" onClick={closeMenu} end>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/Proyectos" onClick={closeMenu}>
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink to="/Sobre_Mi" onClick={closeMenu}>
              Sobre Mí
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contacto" onClick={closeMenu}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
