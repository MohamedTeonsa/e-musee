import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Menu, X, Palette, Globe, Music, Home, Search, User, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'
import HomePage from './components/HomePage'
import ArtSection from './components/ArtSection'
import CultureSection from './components/CultureSection'
import MusicSection from './components/MusicSection'
import ContemporaryArtSection from './components/ContemporaryArtSection'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Accueil', icon: Home },
    { path: '/art', label: 'Art', icon: Palette },
    { path: '/art-contemporain', label: 'Art Contemporain', icon: Sparkles },
    { path: '/culture', label: 'Culture', icon: Globe },
    { path: '/musique', label: 'Musique', icon: Music },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br text-xl from-yellow-600 to-orange-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              {/* <Palette className="w-6 h-6 text-white" /> */}
              🏛️
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent hidden sm:block">
              E-Musée
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              )
            })}
            <div className="flex items-center space-x-2 pt-2 border-t border-gray-200 mt-2">
              <Button variant="ghost" size="icon" className="rounded-full flex-1">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full flex-1">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Musée Interactif</span>
            </div>
            <p className="text-gray-400">
              Explorez l'art, la culture et la musique du monde entier dans une expérience immersive et interactive.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/art" className="hover:text-white transition-colors">Art</Link></li>
              <li><Link to="/art-contemporain" className="hover:text-white transition-colors">Art Contemporain</Link></li>
              <li><Link to="/culture" className="hover:text-white transition-colors">Culture</Link></li>
              <li><Link to="/musique" className="hover:text-white transition-colors">Musique</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">
              Email: contact@musee-interactif.fr<br />
              Tél: +33 1 23 45 67 89
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Musée Interactif. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/art" element={<ArtSection />} />
            <Route path="/art-contemporain" element={<ContemporaryArtSection />} />
            <Route path="/culture" element={<CultureSection />} />
            <Route path="/musique" element={<MusicSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

