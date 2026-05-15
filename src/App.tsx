import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from '@/components/layout/Layout'

import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import Projects from '@/pages/Projects'

// 📘 TypeScript — este componente tampoco recibe props.
// React.FC<Props> es una forma de tipar componentes, pero la comunidad
// prefiere hoy en día funciones normales + inferencia de tipos (como acá).

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*
         * Route path="/" con element={<Layout />} actúa como "ruta padre".
         * Todas las rutas anidadas adentro heredan el Layout (Navbar + Footer).
         * El index indica cuál es la ruta default cuando la URL es exactamente "/".
         */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
