import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import MotionEffects from './components/MotionEffects.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <MotionEffects />
    </div>
  )
}
