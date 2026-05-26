import { Routes, Route } from 'react-router-dom'
import Navbar from './components/landing/Navbar'
import Hero from './components/landing/Hero'
import HowItWorks from './components/landing/HowItWorks'
import Benefits from './components/landing/Benefits'
import Categorias from './components/landing/Categorias'
import CTA from './components/landing/CTA'
import Footer from './components/landing/Footer'
import PublicarNecesidad from './pages/PublicarNecesidad'
import MuroSolicitudes from './pages/vendor/MuroSolicitudes'
import GestionOfertas from './pages/GestionOfertas'
import TiendaCreditos from './pages/vendor/TiendaCreditos'
import PerfilVendedor from './pages/vendor/PerfilVendedor'
import MisPublicaciones from './pages/MisPublicaciones'
import CentroMensajes from './pages/vendor/CentroMensajes'
import FinalizacionTrato from './pages/FinalizacionTrato'
import Notificaciones from './pages/vendor/Notificaciones'
import AdminDashboard from './pages/AdminDashboard'
import ReporteIngresos from './pages/ReporteIngresos'
import CentroSoporte from './pages/CentroSoporte'
import Demo from './pages/Demo'
import VerificacionVendedor from './pages/vendor/VerificacionVendedor'
import TestUI from './pages/TestUI'
import VendorDashboard from './pages/vendor/VendorDashboard'
import DetalleSolicitud from './pages/vendor/DetalleSolicitud'
import EnviarOferta from './pages/vendor/EnviarOferta'
import MisOfertas from './pages/vendor/MisOfertas'
import Configuracion from './pages/Vendor/Configuracion'

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
     <Route path="/solicitud/:id" element={<DetalleSolicitud />} />
     <Route path="/enviar-oferta/:id" element={<EnviarOferta />} />
     <Route path="/mis-ofertas" element={<MisOfertas />} />
     <Route path="/configuracion" element={<Configuracion />} />
    </Routes>
  )
}

export default App