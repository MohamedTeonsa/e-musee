import { useState, useEffect, useRef } from 'react'
import { Palette, Eye, Move, RotateCw, ZoomIn, Maximize2, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

function ContemporaryArtSection() {
  const [selectedArtwork, setSelectedArtwork] = useState(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [isRotating, setIsRotating] = useState(false)
  const [currentGalleryView, setCurrentGalleryView] = useState(0)
  const [is3DMode, setIs3DMode] = useState(false)
  const canvasRef = useRef(null)

  const artworks = [
    {
      id: 1,
      title: 'Fragments Colorés',
      artist: 'Marina Abstracta',
      year: '2023',
      description: 'Une exploration vibrante de la géométrie et de la couleur, créant un dialogue entre formes organiques et structures abstraites.',
      style: 'Art Abstrait 3D',
      dimensions: '120 x 180 cm',
      image: '/contemporary-art-1.jpg',
      color: 'from-blue-600 to-purple-700'
    },
    {
      id: 2,
      title: 'Métamorphose Urbaine',
      artist: 'David Sculptural',
      year: '2024',
      description: 'Sculpture murale tridimensionnelle qui capture l\'énergie et le dynamisme de la vie urbaine contemporaine.',
      style: 'Sculpture Contemporaine',
      dimensions: '150 x 200 cm',
      image: '/contemporary-art-2.jpg',
      color: 'from-cyan-600 to-blue-700'
    },
    {
      id: 3,
      title: 'Lumière Digitale',
      artist: 'Sophie Numérique',
      year: '2023',
      description: 'Installation interactive combinant projection numérique et sculpture physique pour créer une expérience immersive.',
      style: 'Art Numérique',
      dimensions: '200 x 300 cm',
      image: '/contemporary-gallery.jpg',
      color: 'from-pink-600 to-rose-700'
    }
  ]

  const galleryViews = [
    {
      id: 1,
      name: 'Salle Principale',
      description: 'Vue panoramique de la galerie d\'art contemporain',
      perspective: 'perspective-[1000px]',
      transform: 'rotateY(0deg)'
    },
    {
      id: 2,
      name: 'Mur Gauche',
      description: 'Exposition des œuvres abstraites',
      perspective: 'perspective-[800px]',
      transform: 'rotateY(-15deg)'
    },
    {
      id: 3,
      name: 'Mur Droit',
      description: 'Collection de sculptures contemporaines',
      perspective: 'perspective-[800px]',
      transform: 'rotateY(15deg)'
    },
    {
      id: 4,
      name: 'Vue Centrale',
      description: 'Installation centrale interactive',
      perspective: 'perspective-[600px]',
      transform: 'rotateX(5deg)'
    }
  ]

  // Animation automatique de rotation
  useEffect(() => {
    let animationFrame
    if (isRotating) {
      const animate = () => {
        setRotation(prev => ({
          x: prev.x,
          y: (prev.y + 1) % 360
        }))
        animationFrame = requestAnimationFrame(animate)
      }
      animationFrame = requestAnimationFrame(animate)
    }
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isRotating])

  const handleMouseMove = (e) => {
    if (!is3DMode) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 30
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 30
    setRotation({ x, y })
  }

  const nextGalleryView = () => {
    setCurrentGalleryView((prev) => (prev + 1) % galleryViews.length)
  }

  const prevGalleryView = () => {
    setCurrentGalleryView((prev) => (prev - 1 + galleryViews.length) % galleryViews.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Palette className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold">Art Contemporain</h1>
              <p className="text-purple-100 text-lg mt-2">
                Explorez l'art moderne en 3D avec notre visite virtuelle immersive
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Virtual Gallery Tour */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Visite Virtuelle 3D</h2>
              <p className="text-gray-300">Naviguez dans notre galerie d'art contemporain</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                onClick={prevGalleryView}
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                size="sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <span className="text-white font-medium px-4">
                {currentGalleryView + 1} / {galleryViews.length}
              </span>
              <Button
                onClick={nextGalleryView}
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                size="sm"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* 3D Gallery View */}
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className={`${galleryViews[currentGalleryView].perspective} w-full h-[500px] flex items-center justify-center p-8`}>
              <div
                className="w-full h-full transition-all duration-1000 ease-out"
                style={{
                  transform: galleryViews[currentGalleryView].transform,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Gallery Room */}
                <div className="relative w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-2xl">
                  {/* Floor */}
                  <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-gray-400 to-transparent opacity-30"></div>
                  
                  {/* Ceiling Light */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-64 h-4 bg-yellow-200 rounded-full blur-xl opacity-60"></div>

                  {/* Artworks on walls */}
                  <div className="grid grid-cols-3 gap-8 p-12 h-full items-center">
                    {artworks.map((artwork, index) => (
                      <div
                        key={artwork.id}
                        className="group relative bg-white p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105"
                        onClick={() => setSelectedArtwork(artwork)}
                        style={{
                          animation: `float ${3 + index}s ease-in-out infinite`,
                          animationDelay: `${index * 0.5}s`
                        }}
                      >
                        <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded overflow-hidden">
                          <img
                            src={artwork.image}
                            alt={artwork.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          Cliquer pour voir
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Gallery Info */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    <h3 className="font-bold text-gray-900">{galleryViews[currentGalleryView].name}</h3>
                    <p className="text-sm text-gray-600">{galleryViews[currentGalleryView].description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-4 right-4 flex items-center space-x-2">
              <Button
                onClick={() => setIs3DMode(!is3DMode)}
                className={`${is3DMode ? 'bg-purple-600' : 'bg-white/10'} hover:bg-purple-700 text-white backdrop-blur-sm`}
                size="sm"
              >
                <Move className="w-4 h-4 mr-2" />
                Mode 3D
              </Button>
            </div>
          </div>
        </div>

        {/* 3D Animated Artworks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Œuvres Animées en 3D</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => !isRotating && setRotation({ x: 0, y: 0 })}
              >
                {/* 3D Card Effect */}
                <div
                  className="relative h-96 transition-transform duration-300 ease-out"
                  style={{
                    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${zoom})`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Artwork Image */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>

                  {/* 3D Layer Effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ transform: 'translateZ(20px)' }}
                  ></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white" style={{ transform: 'translateZ(30px)' }}>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
                      {artwork.title}
                    </h3>
                    <p className="text-purple-200 font-medium mb-1">{artwork.artist}</p>
                    <p className="text-sm text-gray-300 mb-3">{artwork.style} • {artwork.year}</p>
                  </div>
                </div>

                {/* 3D Controls */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    onClick={() => setIsRotating(!isRotating)}
                    className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                    size="sm"
                  >
                    {isRotating ? <Pause className="w-4 h-4" /> : <RotateCw className="w-4 h-4" />}
                  </Button>
                  <Button
                    onClick={() => setZoom(zoom === 1 ? 1.2 : 1)}
                    className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                    size="sm"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={() => setSelectedArtwork(artwork)}
                    className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                    size="sm"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Artwork Detail Modal */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedArtwork(null)}
        >
          <div
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl max-w-5xl w-full overflow-hidden animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Image */}
              <div className="relative">
                <div
                  className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl"
                  style={{
                    transform: `perspective(1000px) rotateY(${rotation.y * 0.5}deg)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => setRotation({ x: 0, y: 0 })}
                >
                  <img
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl font-bold mb-4">{selectedArtwork.title}</h2>
                  <p className="text-2xl text-purple-300 mb-2">{selectedArtwork.artist}</p>
                  <p className="text-gray-400 mb-6">{selectedArtwork.year}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-purple-300 mb-2">Description</h4>
                      <p className="text-gray-300">{selectedArtwork.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-purple-300 mb-1">Style</h4>
                        <p className="text-gray-300">{selectedArtwork.style}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-300 mb-1">Dimensions</h4>
                        <p className="text-gray-300">{selectedArtwork.dimensions}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    <Eye className="w-4 h-4 mr-2" />
                    Vue 360°
                  </Button>
                  <Button
                    onClick={() => setSelectedArtwork(null)}
                    variant="outline"
                    className="flex-1 border-purple-500 text-purple-300 hover:bg-purple-500/20"
                  >
                    Fermer
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}

export default ContemporaryArtSection

