import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app/css/index.css'
import Navbar from './app/components/widgets/navbar'
import Home from './app/layouts/home/home-index'
import Footer from './app/components/widgets/footer'
import Products from './app/layouts/productos/products-index'
import Contact from './app/layouts/contactos/mensajes-index'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/mensajes" element={<Contact />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)