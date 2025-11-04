import { useState } from 'react'
import { Music, Play, Volume2 } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

function MusicSection() {
  const [selectedInstrument, setSelectedInstrument] = useState(null)

  const instruments = [
    {
      id: 1,
      name: 'Piano',
      family: 'Clavier',
      origin: 'Italie, vers 1700',
      description:
        "Inventé par Bartolomeo Cristofori à Florence, le piano est un instrument à cordes frappées. Il succède au clavecin et permet une dynamique d’expression inédite grâce à la variation de la frappe. Symbole de la musique classique et du romantisme, il a ensuite conquis le jazz, la pop et la musique contemporaine.",
      icon: '🎹',
      color: 'from-gray-700 to-gray-900',
    },
    {
      id: 2,
      name: 'Violon',
      family: 'Cordes frottées',
      origin: 'Italie, XVIᵉ siècle',
      description:
        "Le violon apparaît au XVIᵉ siècle dans le nord de l’Italie. Instrument emblématique de l’orchestre, il a évolué grâce aux luthiers de Crémone, comme Stradivari. Il est au cœur du répertoire classique, mais aussi présent dans les musiques folkloriques et le jazz manouche.",
      icon: '🎻',
      color: 'from-amber-700 to-red-800',
    },
    {
      id: 3,
      name: 'Saxophone',
      family: 'Bois (anche simple)',
      origin: 'Belgique, 1840',
      description:
        "Inventé par Adolphe Sax, le saxophone fut d’abord destiné aux fanfares militaires avant de devenir un pilier du jazz. Son timbre chaud et puissant en a fait un instrument expressif, utilisé dans le classique, le funk et la pop.",
      icon: '🎷',
      color: 'from-yellow-600 to-orange-700',
    },
    {
      id: 4,
      name: 'Sitar',
      family: 'Cordes pincées',
      origin: 'Inde, XIIIᵉ siècle',
      description:
        "Le sitar, originaire du nord de l’Inde, est un instrument à cordes pincées utilisé dans la musique classique indienne. Sa sonorité envoûtante et ses résonances prolongées ont marqué l’imaginaire musical oriental et inspiré la musique occidentale dans les années 60.",
      icon: '🪕',
      color: 'from-purple-600 to-pink-600',
    },
    {
      id: 5,
      name: 'Kora',
      family: 'Cordes pincées',
      origin: 'Afrique de l’Ouest',
      description:
        "La kora est un instrument traditionnel des griots d’Afrique de l’Ouest, notamment au Mali, Sénégal et Guinée. Mi-harpe, mi-luth, elle est jouée avec les pouces et index, accompagnant les récits et chants traditionnels mandingues.",
      icon: '🎼',
      color: 'from-green-700 to-emerald-700',
    },
    {
      id: 6,
      name: 'Tambourin',
      family: 'Percussions',
      origin: 'Moyen-Orient, Antiquité',
      description:
        "Le tambourin est l’un des plus anciens instruments de percussion. Utilisé dans les cérémonies religieuses et les danses, il accompagne les musiques traditionnelles méditerranéennes, africaines et orientales.",
      icon: '🥁',
      color: 'from-red-600 to-orange-700',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <Music className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold">Instruments de Musique</h1>
            <p className="text-orange-100 text-lg mt-2">
              Découvrez l’origine, l’histoire et la beauté des instruments du monde
            </p>
          </div>
        </div>
      </div>

      {/* Instruments Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instruments.map((instrument) => (
            <div
              key={instrument.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group"
              onClick={() => setSelectedInstrument(instrument)}
            >
              <div className={`relative h-48 bg-gradient-to-r ${instrument.color} flex flex-col items-center justify-center`}>
                <span className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-500">
                  {instrument.icon}
                </span>
                <h3 className="text-xl font-bold text-white">{instrument.name}</h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-orange-600 font-semibold mb-1">{instrument.family}</p>
                <p className="text-gray-700 text-sm mb-2">{instrument.origin}</p>
                <p className="text-gray-600 text-sm line-clamp-3">{instrument.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedInstrument && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedInstrument(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full animate-in zoom-in duration-300 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`relative h-60 bg-gradient-to-br ${selectedInstrument.color} flex flex-col items-center justify-center`}>
              <span className="text-7xl mb-2">{selectedInstrument.icon}</span>
              <h2 className="text-3xl font-bold text-white">{selectedInstrument.name}</h2>
              <button
                onClick={() => setSelectedInstrument(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl hover:bg-white/40"
              >
                ×
              </button>
            </div>

            <div className="p-8">
              <p className="text-orange-600 font-semibold mb-2">
                {selectedInstrument.family}
              </p>
              <p className="text-gray-500 text-sm mb-4">
                Origine : {selectedInstrument.origin}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {selectedInstrument.description}
              </p>

              {/* <div className="grid grid-cols-2 gap-4">
                <Button className={`bg-gradient-to-r ${selectedInstrument.color} text-white`}>
                  <Play className="w-4 h-4 mr-2" />
                  Jouer un extrait
                </Button>
                <Button variant="outline">
                  <Volume2 className="w-4 h-4 mr-2" />
                  Écouter un enregistrement
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MusicSection
