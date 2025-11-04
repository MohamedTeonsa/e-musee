import { useState } from 'react'
import { Palette, ZoomIn, Info, Heart, Share2, Eye, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

function ArtSection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedArtwork, setSelectedArtwork] = useState(null)

  const categories = [
    { id: 'all', label: 'Toutes' },
    { id: 'painting', label: 'Peinture' },
    { id: 'sculpture', label: 'Sculpture' },
    { id: 'photography', label: 'Photographie' },
    { id: 'contemporary', label: 'Art Contemporain' }
  ]

  const artworks = [
    {
      id: 1,
      title: 'La Nuit Étoilée',
      artist: 'Vincent van Gogh',
      year: '1889',
      category: 'painting',
      period: 'Post-Impressionnisme',
      description: "Une des œuvres les plus célèbres de Van Gogh, représentant un ciel nocturne tourbillonnant.",
      technique: 'Huile sur toile',
      dimensions: '73.7 × 92.1 cm',
      location: 'Museum of Modern Art, New York',
      color: 'from-blue-900 to-yellow-600',
      image: '/starry-night.jpg'
    },
    {
      id: 2,
      title: 'La Joconde',
      artist: 'Léonard de Vinci',
      year: '1503-1519',
      category: 'painting',
      period: 'Renaissance',
      description: "Portrait emblématique de Lisa Gherardini, célèbre pour son sourire énigmatique.",
      technique: 'Huile sur panneau de peuplier',
      dimensions: '77 × 53 cm',
      location: 'Musée du Louvre, Paris',
      color: 'from-amber-800 to-green-900',
      image: '/mona-lisa.jpg'
    },
    {
      id: 3,
      title: 'Le Penseur',
      artist: 'Auguste Rodin',
      year: '1880-1882',
      category: 'sculpture',
      period: 'Sculpture moderne',
      description: 'Sculpture en bronze représentant un homme en méditation profonde.',
      technique: 'Bronze',
      dimensions: '180 × 98 × 145 cm',
      location: 'Musée Rodin, Paris',
      color: 'from-gray-700 to-amber-900',
      image: '/le-penseur.jpg'
    },
    {
      id: 4,
      title: 'Guernica',
      artist: 'Pablo Picasso',
      year: '1937',
      category: 'painting',
      period: 'Cubisme',
      description: 'Œuvre monumentale dénonçant les horreurs de la guerre civile espagnole.',
      technique: 'Huile sur toile',
      dimensions: '349.3 × 776.6 cm',
      location: 'Museo Reina Sofía, Madrid',
      color: 'from-gray-900 to-gray-600',
      image: '/guernica.jpg'
    },
    {
      id: 5,
      title: 'Afghan Girl',
      artist: 'Steve McCurry',
      year: '1984',
      category: 'photography',
      period: 'Photographie documentaire',
      description: "Portrait iconique d'une jeune réfugiée afghane aux yeux verts perçants.",
      technique: 'Photographie couleur',
      dimensions: 'Variable',
      location: 'National Geographic',
      color: 'from-emerald-700 to-red-900',
      image: '/afghan-girl.jpg'
    },
    {
      id: 6,
      title: 'Balloon Dog',
      artist: 'Jeff Koons',
      year: '1994-2000',
      category: 'contemporary',
      period: 'Art Contemporain',
      description: 'Sculpture monumentale en acier inoxydable imitant un ballon de baudruche.',
      technique: 'Acier inoxydable avec revêtement miroir',
      dimensions: '307.3 × 363.2 × 114.3 cm',
      location: 'Collections privées',
      color: 'from-orange-500 to-pink-500',
      image: '/balloon-dog.jpg'
    }
  ]

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Palette className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold">Galerie d'Art</h1>
              <p className="text-purple-100 text-lg mt-2">
                Explorez des chefs-d'œuvre de l'histoire de l'art
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-8 bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h3 className="font-semibold text-gray-900">Filtrer par catégorie</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Artworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredArtworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedArtwork(artwork)}
            >
              {/* Artwork Preview */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Heart className="w-5 h-5 text-red-500" />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Share2 className="w-5 h-5 text-blue-500" />
                  </button>
                </div>

                {/* View Details Button */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button className="bg-white text-purple-700 hover:bg-gray-100 shadow-xl">
                    <ZoomIn className="w-4 h-4 mr-2" />
                    Voir en détail
                  </Button>
                </div>
              </div>

              {/* Artwork Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {artwork.title}
                  </h3>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-2">{artwork.year}</span>
                </div>
                <p className="text-purple-600 font-medium mb-2">{artwork.artist}</p>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{artwork.description}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">{artwork.period}</span>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{Math.floor(Math.random() * 10000)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Artwork Detail Modal */}
        {selectedArtwork && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedArtwork(null)}
          >
            <div 
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Artwork Display */}
                <div>
                  <img
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    className="w-full aspect-square object-cover rounded-xl mb-4"
                  />
                  <div className="flex space-x-2">
                    <Button className="flex-1">
                      <ZoomIn className="w-4 h-4 mr-2" />
                      Zoom HD
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      Vue 360°
                    </Button>
                  </div>
                </div>

                {/* Artwork Details */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedArtwork.title}</h2>
                      <p className="text-xl text-purple-600 font-semibold">{selectedArtwork.artist}</p>
                    </div>
                    <button
                      onClick={() => setSelectedArtwork(null)}
                      className="text-gray-400 hover:text-gray-600 text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1 flex items-center">
                        <Info className="w-4 h-4 mr-2" />
                        Description
                      </h4>
                      <p className="text-gray-600">{selectedArtwork.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-1">Année</h4>
                        <p className="text-gray-600">{selectedArtwork.year}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-1">Période</h4>
                        <p className="text-gray-600">{selectedArtwork.period}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-1">Technique</h4>
                        <p className="text-gray-600">{selectedArtwork.technique}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-1">Dimensions</h4>
                        <p className="text-gray-600">{selectedArtwork.dimensions}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">Localisation</h4>
                      <p className="text-gray-600">{selectedArtwork.location}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600">
                      <Heart className="w-4 h-4 mr-2" />
                      Ajouter aux favoris
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="w-4 h-4 mr-2" />
                      Partager
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ArtSection
