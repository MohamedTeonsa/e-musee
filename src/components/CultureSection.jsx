import { useState } from 'react'
import { Globe, MapPin, Calendar, Users, Sparkles, BookOpen, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

function CultureSection() {
  const [selectedCivilization, setSelectedCivilization] = useState(null)

  const civilizations = [
    {
      id: 1,
      name: 'Égypte Ancienne',
      period: '3100 - 30 av. J.-C.',
      region: 'Afrique du Nord',
      description:
        "L'Égypte antique, née sur les rives fertiles du Nil, est l'une des plus anciennes civilisations du monde. Elle s'est distinguée par son système d'écriture hiéroglyphique et ses monuments colossaux. La langue principale était l'égyptien ancien, évoluant plus tard vers le copte. La religion était polythéiste : les Égyptiens vénéraient des dieux tels que Rê, Osiris et Isis. La société était hiérarchisée, dirigée par le pharaon.",
      highlights: [
        { name: 'Pyramides de Gizeh', image: '/pyramides_gizeh.jpg' },
        { name: 'Vallée des Rois', image: '/vallee_des_rois.jpg' },
        { name: 'Temple de Karnak', image: '/karnak.jpg' },
        { name: 'Sphinx', image: '/sphinx.jpg' },
      ],
      artifacts: 12500,
      color: 'from-yellow-600 to-orange-700',
      icon: '🏛️',
    },
    {
      id: 2,
      name: 'Empire Romain',
      period: '27 av. J.-C. - 476 ap. J.-C.',
      region: 'Europe, medit',
      description:
        "L'Empire romain fut un pilier de la civilisation occidentale. Sa langue officielle était le latin. Il est à l'origine d'importantes avancées en droit, en ingénierie et en urbanisme. La religion évolua du polythéisme vers le christianisme aux IVe siècle.",
      highlights: [
        { name: 'Colisée', image: '/colisee.jpg' },
        { name: 'Forum Romain', image: '/forum_romain.jpg' },
        { name: 'Panthéon', image: '/pantheon.jpg' },
        { name: 'Aqueducs', image: '/aqueduc.jpg' },
      ],
      artifacts: 18200,
      color: 'from-red-700 to-purple-800',
      icon: '🏛️',
    },
    {
      id: 3,
      name: 'Grèce Antique',
      period: '800 - 146 av. J.-C.',
      region: 'Europe du Sud',
      description:
        "La Grèce antique est le berceau de la démocratie, de la philosophie et des arts. Langue principale : le grec ancien. Religion : polythéiste (les dieux de l'Olympe). Les cités-États (polis) comme Athènes et Sparte ont modelé l'organisation politique et militaire.",
      highlights: [
        { name: 'Parthénon', image: '/parthenon.jpg' },
        { name: 'Delphes', image: '/delphes.jpg' },
        { name: 'Olympie', image: '/olympie.jpg' },
        { name: 'Théâtre d\'Épidaure', image: '/epidaure.jpg' },
      ],
      artifacts: 15600,
      color: 'from-blue-600 to-cyan-700',
      icon: '⚱️',
    },
    {
      id: 4,
      name: 'Chine Impériale',
      period: '221 av. J.-C. - 1912 ap. J.-C.',
      region: 'Asie de l\'Est',
      description:
        "La Chine impériale a produit des inventions majeures (papier, boussole...). Langue écrite : chinois classique (caractères). Courants religieux/philosophiques : confucianisme, taoïsme, bouddhisme. L'empereur était le 'Fils du Ciel'.",
      highlights: [
        { name: 'Grande Muraille', image: '/grande_muraille.jpg' },
        { name: 'Cité Interdite', image: '/cite_interdite.jpg' },
        { name: 'Armée de terre cuite', image: '/armee_terre_cuite.jpg' },
        // { name: 'Route de la Soie', image: '/route_soie.jpg' },
      ],
      artifacts: 22400,
      color: 'from-red-600 to-yellow-600',
      icon: '🏯',
    },
    {
      id: 5,
      name: 'Civilisation Maya',
      period: '2000 av. J.-C. - 1500 ap. J.-C.',
      region: 'Amérique Centrale',
      description:
        "Les Mayas parlaient plusieurs langues mayas; ils ont développé une écriture hiéroglyphique et un calendrier très précis. Religion : polythéiste centrée sur la nature et le cosmos; société dirigée par des rois-prêtres.",
      highlights: [
        { name: 'Chichen Itza', image: '/chichen_itza.jpg' },
        { name: 'Tikal', image: '/tikal.jpg' },
        { name: 'Palenque', image: '/palenque.jpg' },
        { name: 'Calendrier Maya', image: '/calendrier_maya.jpg' },
      ],
      artifacts: 9800,
      color: 'from-green-700 to-emerald-800',
      icon: '🗿',
    },
    {
      id: 6,
      name: 'Japon Féodal',
      period: '1185 - 1868 ap. J.-C.',
      region: 'Asie de l\'Est',
      description:
        "Le Japon féodal fut dominé par les shoguns et les samouraïs. Langue : japonais (kanji + kana). Religions : shintoïsme et bouddhisme zen. Société : empereur symbolique, shogun, samouraïs, puis paysans/artisans/marchands.",
      highlights: [
        { name: 'Châteaux féodaux', image: '/chateau_feodal.jpg' },
        { name: 'Culture samouraï', image: '/samourai.jpg' },
        // { name: 'Cérémonie du thé', image: '/ceremonie_the.jpg' },
        { name: 'Art du jardin zen', image: '/jardin_zen.jpg' },
      ],
      artifacts: 14200,
      color: 'from-pink-600 to-red-700',
      icon: '⛩️',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Globe className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold">Patrimoine Culturel</h1>
              <p className="text-blue-100 text-lg mt-2">
                Découvrez les civilisations qui ont façonné notre monde
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Civilizations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Civilisations</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users className="w-5 h-5" />
            <span>{civilizations.length} civilisations à explorer</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {civilizations.map((civ, index) => (
            <div
              key={civ.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedCivilization(civ)}
            >
              <div className={`relative h-48 bg-gradient-to-br ${civ.color} flex items-center justify-center`}>
                <div className="text-8xl opacity-50 group-hover:scale-110 transition-transform duration-300">
                  {civ.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{civ.name}</h3>
                <div className="flex items-center space-x-3 text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{civ.period}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{civ.region}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">{civ.description}</p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold">{civ.artifacts.toLocaleString()} artefacts</span>
                  </div>
                  <Button size="sm" variant="ghost">Explorer →</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Civilization Detail Modal */}
      {selectedCivilization && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCivilization(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`relative h-64 bg-gradient-to-br ${selectedCivilization.color} flex items-center justify-center`}>
              <div className="text-9xl opacity-30">{selectedCivilization.icon}</div>
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-4xl font-bold">{selectedCivilization.name}</h2>
                <p className="text-sm">{selectedCivilization.period} — {selectedCivilization.region}</p>
              </div>
              <button
                onClick={() => setSelectedCivilization(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/30 rounded-full flex items-center justify-center text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3">À propos</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{selectedCivilization.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3">Sites & Monuments</h3>
                <div className="grid grid-cols-2 gap-4">
                  {selectedCivilization.highlights.map((item) => (
                    <div key={item.name} className="p-2">
                      <img src={item.image} alt={item.name} className="rounded-2xl shadow-md w-full h-60 object-cover" />
                      <p className="text-center mt-2 font-medium">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Artefacts disponibles</p>
                    <p className="text-3xl font-bold text-blue-600">{selectedCivilization.artifacts.toLocaleString()}</p>
                  </div>
                  <div className="text-5xl opacity-20">{selectedCivilization.icon}</div>
                </div>
              </div>

              <div className="mt-6 text-right">
                <Button 
                variant="outline" 
                className={`bg-gradient-to-r ${selectedCivilization.color} text-white`}
                onClick={() => setSelectedCivilization(null)}
                >
                  Fermer
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CultureSection
