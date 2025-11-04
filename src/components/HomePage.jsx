import { Link } from 'react-router-dom'
import { Palette, Globe, Music, ArrowRight, Sparkles, Eye, Heart, Wand2 } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import artGallery from '../assets/art-gallery.jpeg'
import cultureArtifacts from '../assets/culture-artifacts.jpg'
import musicInstruments from '../assets/music-instruments.jpg'

function HomePage() {
  const sections = [
    {
      title: 'Art',
      description: 'Explorez des galeries virtuelles immersives présentant des chefs-d\'œuvre de la peinture, sculpture et art contemporain.',
      icon: Palette,
      path: '/art',
      image: artGallery,
      gradient: 'from-purple-600 to-pink-600',
      features: ['Galeries 3D', 'Zoom HD', 'Visites guidées']
    },
    {
      title: 'Art Contemporain',
      description: 'Découvrez l\'art moderne en 3D avec des visites virtuelles immersives et des œuvres animées en 3D.',
      icon: Wand2,
      path: '/art-contemporain',
      image: '/contemporary-gallery.jpg',
      gradient: 'from-pink-600 to-purple-600',
      features: ['Visite 3D', 'Animations', 'Vue 360°'],
      isNew: true
    },
    {
      title: 'Culture',
      description: 'Découvrez les civilisations anciennes, traditions et artefacts historiques à travers des reconstitutions 3D.',
      icon: Globe,
      path: '/culture',
      image: cultureArtifacts,
      gradient: 'from-blue-600 to-cyan-600',
      features: ['Sites archéologiques', 'Objets 3D', 'Jeux éducatifs']
    },
    {
      title: 'Musique',
      description: 'Plongez dans l\'histoire de la musique, explorez des instruments virtuels et écoutez des concerts immersifs.',
      icon: Music,
      path: '/musique',
      image: musicInstruments,
      gradient: 'from-orange-600 to-red-600',
      features: ['Instruments virtuels', 'Concerts 3D', 'Biographies']
    }
  ]

  const stats = [
    { icon: Eye, value: '10,000+', label: 'Œuvres & Artefacts' },
    { icon: Globe, value: '50+', label: 'Civilisations' },
    { icon: Music, value: '1,000+', label: 'Morceaux musicaux' },
    { icon: Heart, value: '100%', label: 'Gratuit & Accessible' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
       <section className="relative text-white py-20 sm:py-32 overflow-hidden">

      {/* Image de fond avec superposition sombre */}
      <div className="absolute inset-0">
        <img
          src={cultureArtifacts}
          alt="Fond hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div> {/* Couche transparente */}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-in fade-in slide-in-from-top duration-700">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span className="text-sm font-medium">Expérience 100% Immersive</span>
        </div>

        {/* Titre */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-top duration-700 delay-100">
          Bienvenue au
          <span className="block mt-2 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            Musée Interactif
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl sm:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-top duration-700 delay-200">
          Explorez l'art, la culture et la musique du monde entier dans une expérience en ligne immersive et interactive
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-top duration-700 delay-300">
          <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:scale-105 transition-transform">
            Commencer l'exploration
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-white bg-white/10 px-8 py-6 text-lg font-semibold rounded-full">
            En savoir plus
          </Button>
        </div>

      </div>
    </section>


      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br f from-yellow-600 to-orange-600 rounded-full mb-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explorez nos Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trois univers fascinants à découvrir, chacun avec des expériences immersives uniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <Link
                  key={index}
                  to={section.path}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-700"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* <div className={`absolute inset-0 bg-gradient-to-t ${section.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div> */}
                    {/* <div className="absolute top-4 right-4">
                      <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 bg-gradient-to-br ${section.gradient} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                      </div>
                    </div> */}
                    {section.isNew && (
                      <div className="absolute top-4 left-4">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                          NOUVEAU
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}>
                      {section.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {section.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {section.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center from-yellow-600 to-orange-600 transition-colors">
                      Découvrir
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r  from-yellow-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Prêt à commencer votre voyage culturel ?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Créez un compte gratuit pour sauvegarder vos œuvres favorites et créer des parcours personnalisés
          </p>
          <Button size="lg" className="bg-white to-orange-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:scale-105 transition-transform">
            Créer un compte gratuit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default HomePage

