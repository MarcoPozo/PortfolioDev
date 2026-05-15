import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Navbar from './Navbar'

// 📘 TypeScript — este componente no recibe props, así que no necesita
// ningún tipo declarado. Cuando agreguemos props, lo tipamos en ese momento.

function Layout() {
  return (
    <div className='layout'>
      <Navbar />

      {/*
       * <Outlet /> es el "hueco" de React Router.
       * Acá se renderiza automáticamente la página
       * que corresponda a la URL actual.
       */}
      <main className='layout__main'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
