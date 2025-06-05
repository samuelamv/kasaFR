// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Detail from './pages/Details.jsx'
import Error from './pages/Error.jsx'
import Navbar from './components/Navbar'
import Footer from './components/footer'

export default function App() {
  return (
    <>
      <Navbar /> {/* 👈 affichée sur toutes les pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}