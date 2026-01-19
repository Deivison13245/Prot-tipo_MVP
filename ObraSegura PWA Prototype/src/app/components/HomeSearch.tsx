import { Search, MapPin, Hammer, Building, PaintBucket, ChevronRight } from "lucide-react";

interface HomeSearchProps {
  onNavigate: (screen: string) => void;
}

const mockProviders = [
  { id: 1, name: "João Silva", specialty: "Pedreiro", rating: 4.9, distance: "0.8 km", lat: 0.5, lng: 0.3 },
  { id: 2, name: "Maria Santos", specialty: "Pintor", rating: 4.8, distance: "1.2 km", lat: 0.6, lng: 0.5 },
  { id: 3, name: "Carlos Oliveira", specialty: "Laje", rating: 4.7, distance: "2.1 km", lat: 0.4, lng: 0.7 },
  { id: 4, name: "Ana Costa", specialty: "Pintor", rating: 5.0, distance: "1.5 km", lat: 0.7, lng: 0.4 },
];

export function HomeSearch({ onNavigate }: HomeSearchProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1A2B45] text-white px-4 sm:px-6 lg:px-8 pt-6 pb-8 rounded-b-3xl">
        <div className="mb-6 max-w-4xl">
          <h2 className="text-2xl lg:text-3xl mb-1 text-white">Olá! 👋</h2>
          <p className="text-white/80 text-sm sm:text-base">O que você precisa hoje?</p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-4xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
          <input
            type="text"
            placeholder="Buscar serviço ou profissional..."
            className="w-full h-12 min-h-[44px] pl-12 pr-4 bg-white text-gray-900 rounded-xl outline-none focus:ring-2 focus:ring-white/20"
          />
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mt-4 text-white/80 text-sm max-w-4xl">
          <MapPin className="w-4 h-4" strokeWidth={1.5} />
          <span>Av. Paulista, 1000 - São Paulo, SP</span>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="px-4 sm:px-6 lg:px-8 -mt-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-4 lg:p-6">
          <h3 className="text-[#1A2B45] text-sm mb-3">Especialidades</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            <button className="h-20 min-h-[44px] bg-gray-50 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-[#1A2B45]/5 transition-colors border border-gray-100">
              <Hammer className="w-6 h-6 text-[#1A2B45]" strokeWidth={1.5} />
              <span className="text-xs text-gray-700">Pedreiro</span>
            </button>
            <button className="h-20 min-h-[44px] bg-gray-50 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-[#1A2B45]/5 transition-colors border border-gray-100">
              <Building className="w-6 h-6 text-[#1A2B45]" strokeWidth={1.5} />
              <span className="text-xs text-gray-700">Laje</span>
            </button>
            <button className="h-20 min-h-[44px] bg-gray-50 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-[#1A2B45]/5 transition-colors border border-gray-100">
              <PaintBucket className="w-6 h-6 text-[#1A2B45]" strokeWidth={1.5} />
              <span className="text-xs text-gray-700">Pintor</span>
            </button>
          </div>
        </div>
      </div>

      {/* Map and List Container */}
      <div className="px-4 sm:px-6 lg:px-8 mt-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Simplified Map */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="h-48 lg:h-96 bg-gradient-to-br from-blue-100 to-blue-50 relative">
              {/* Map placeholder with markers */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[#1A2B45] mx-auto mb-2" strokeWidth={1.5} />
                  <p className="text-sm text-gray-600">Profissionais próximos a você</p>
                </div>
              </div>
              
              {/* Simulated markers */}
              {mockProviders.map((provider) => (
                <div
                  key={provider.id}
                  className="absolute w-8 h-8 bg-[#1A2B45] rounded-full flex items-center justify-center text-white text-xs shadow-lg cursor-pointer hover:scale-110 transition-transform"
                  style={{
                    left: `${provider.lng * 100}%`,
                    top: `${provider.lat * 100}%`,
                  }}
                  onClick={() => onNavigate("profile")}
                >
                  {provider.rating}
                </div>
              ))}
            </div>
          </div>

          {/* Nearby Professionals */}
          <div className="pb-24 lg:pb-0">
            <h3 className="text-[#1A2B45] mb-4">Profissionais próximos</h3>
            <div className="space-y-3">
              {mockProviders.map((provider) => (
                <button
                  key={provider.id}
                  onClick={() => onNavigate("profile")}
                  className="w-full bg-white rounded-xl shadow-sm p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1A2B45] to-[#2A3B55] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    {provider.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="text-[#1A2B45] mb-1">{provider.name}</h4>
                    <div className="flex items-center gap-3 text-sm text-gray-600 flex-wrap">
                      <span>{provider.specialty}</span>
                      <span className="flex items-center gap-1">
                        ⭐ {provider.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" strokeWidth={1.5} />
                        {provider.distance}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}