import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { useScrolled } from '../../hooks/useScrolled';
import './Navbar.css';

type NavItem = {
  label: string;
  to: string;
  id: string;
  end?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/', id: 'home', end: true },
  { label: 'Projects', to: '/projects', id: 'projects' },
  { label: 'About', to: '/about', id: 'about' },
];

function MenuIcon() {
  return (
    <svg
      className="navbar__menu-icon"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7H20M4 12H20M4 17H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="navbar__menu-icon"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Navbar() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
      role="banner"
    >
      <div className="page-container navbar__inner">
        <Link
          to="/"
          className="navbar__logo"
          aria-label="Karen Dinalli — Home"
          onClick={closeMenu}
        >
          <img
            src="/images/logo-karen-dinalli.svg"
            alt=""
            className="navbar__logo-image"
            width={157}
            height={14}
          />
        </Link>

        <nav className="navbar__nav navbar__nav--desktop" aria-label="Main navigation">
          <ul className="navbar__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `navbar__link${isActive ? ' navbar__link--active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="navbar__menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`navbar__mobile-overlay${menuOpen ? ' navbar__mobile-overlay--open' : ''}`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      >
        <div
          className="navbar__mobile-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="page-container navbar__mobile-header">
            <Link
              to="/"
              className="navbar__logo"
              aria-label="Karen Dinalli — Home"
              onClick={closeMenu}
            >
              <img
                src="/images/logo-karen-dinalli.svg"
                alt=""
                className="navbar__logo-image"
                width={157}
                height={14}
              />
            </Link>
            <button
              type="button"
              className="navbar__menu-toggle"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="navbar__mobile-nav" aria-label="Mobile navigation">
            <ul className="navbar__mobile-list">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`
                    }
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
