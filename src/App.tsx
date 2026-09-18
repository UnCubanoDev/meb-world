import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Guadalupe from './pages/Guadalupe'
import Backstage from './pages/Backstage'
import Registro from './pages/Registro'
import FanHome from './pages/FanHome'

/** Scroll al inicio en cada cambio de ruta */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      {/* Shell responsive: columna centrada estilo dispositivo en desktop/tablet */}
      <div className="relative mx-auto w-full max-w-[480px] min-h-screen bg-[#070708] border-x border-white/[0.04] shadow-[0_0_80px_rgba(0,0,0,0.9)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guadalupe" element={<Guadalupe />} />
          <Route path="/backstage" element={<Backstage />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/fan" element={<FanHome />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}