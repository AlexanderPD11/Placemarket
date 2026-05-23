import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Categorias from './components/Categorias'
import CTA from './components/CTA'
import Footer from './components/Footer'
import PublicarNecesidad from './pages/PublicarNecesidad'
import MuroSolicitudes from './pages/MuroSolicitudes'
import GestionOfertas from './pages/GestionOfertas'
import TiendaCreditos from './pages/TiendaCreditos'
import PerfilVendedor from './pages/PerfilVendedor'
import MisPublicaciones from './pages/MisPublicaciones'
import CentroMensajes from './pages/CentroMensajes'
import FinalizacionTrato from './pages/FinalizacionTrato'
import Notificaciones from './pages/Notificaciones'
import AdminDashboard from './pages/AdminDashboard'
import ReporteIngresos from './pages/ReporteIngresos'
import CentroSoporte from './pages/CentroSoporte'
import Demo from './pages/Demo'
import VerificacionVendedor from './pages/VerificacionVendedor'
import TestUI from './pages/TestUI'
import VendorDashboard from './pages/VendorDashboard'

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Categorias />
      <CTA />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/publicar" element={<PublicarNecesidad />} />
      <Route path="/muro" element={<MuroSolicitudes />} />
      <Route path="/ofertas" element={<GestionOfertas />} />
      <Route path="/creditos" element={<TiendaCreditos />} />
      <Route path="/perfil" element={<PerfilVendedor />} />
      <Route path="/mis-publicaciones" element={<MisPublicaciones />} />
      <Route path="/mensajes" element={<CentroMensajes />} />
      <Route path="/trato" element={<FinalizacionTrato />} />
      <Route path="/notificaciones" element={<Notificaciones />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/ingresos" element={<ReporteIngresos />} />
      <Route path="/admin/soporte" element={<CentroSoporte />} />
      <Route path="/demo" element={<Demo />} />
     <Route path="/verificacion" element={<VerificacionVendedor />} />
     <Route path="/test-ui" element={<TestUI />} />
     <Route path="/vendor-dashboard" element={<VendorDashboard />} />
    </Routes>
  )
}

export default App