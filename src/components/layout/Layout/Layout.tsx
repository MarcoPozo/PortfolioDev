import { Outlet } from 'react-router-dom'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

import './layout.css'

function Layout() {
  return (
    <div className='layout'>
      <Navbar />
      <main className='layout__main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
