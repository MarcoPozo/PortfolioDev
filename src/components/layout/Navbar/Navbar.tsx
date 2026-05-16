import { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'

import type { NavItem } from '@/types'

import isotipo from '@/assets/images/isotipo-marcode.png'

import './navbar.css'

const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', to: '/' },
  { label: 'Proyectos', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contacto', to: '/contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup: elimina el listener cuando el componente se desmonta
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className='navbar__container'>
        <NavLink to='/' className='navbar__logo'>
          <img src={isotipo} alt='MarCode' className='navbar__logo-icon' />
          <div className='navbar__logo-text'>
            <span className='navbar__logo-name'>Marco Pozo</span>
            <span className='navbar__logo-alias'>@MarCode</span>
          </div>
        </NavLink>

        <nav className='navbar__nav'>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
