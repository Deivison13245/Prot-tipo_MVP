import { ArrowLeft, Star, BadgeCheck, MessageCircle, Calendar } from "lucide-react";

interface ProfileProviderProps {
  onNavigate: (screen: string) => void;
}

const mockReviews = [
  {
    id: 1,
    author: "Maria Silva",
    rating: 5,
    date: "Há 2 dias",
    comment: "Excelente profissional! Pontual, cuidadoso e deixou tudo limpo após o serviço. Super recomendo!",
  },
  {
    id: 2,
    author: "Pedro Costa",
    rating: 5,
    date: "Há 1 semana",
    comment: "Trabalho impecável. Resolveu um problema que outros profissionais não conseguiram. Voltarei a contratar!",
  },
  {
    id: 3,
    author: "Ana Santos",
    rating: 4,
    date: "Há 2 semanas",
    comment: "Muito bom trabalho, chegou no horário combinado e respeitou o orçamento inicial.",
  },
];

const mockPortfolio = [
  "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1504204267155-aaad8e81290d?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&h=400&fit=crop",
];

export function ProfileProvider({ onNavigate }: ProfileProviderProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-[#1A2B45] text-white px-4 sm:px-6 lg:px-8 pt-6 pb-24 relative">
        <button onClick={() => onNavigate("home")} className="mb-6 p-2 -ml-2">
          <ArrowLeft className="w-6 h-6" strokeWidth={1.5} />
        </button>
      </div>

      {/* Profile Card */}
      <div className="px-4 sm:px-6 lg:px-8 -mt-16 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
          {/* Avatar & Basic Info */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#1A2B45] to-[#2A3B55] rounded-full flex items-center justify-center text-white text-2xl lg:text-3xl flex-shrink-0">
              JS
            </div>
            <div className="flex-1 w-full">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl lg:text-2xl text-[#1A2B45]">João Silva</h2>
                <BadgeCheck className="w-5 h-5 text-blue-500" fill="currentColor" strokeWidth={1.5} />
              </div>
              <p className="text-gray-600 text-sm mb-3">Pedreiro • 8 anos de experiência</p>
              
              {/* Rating */}
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-500" fill="currentColor" strokeWidth={1.5} />
                  <span className="text-lg text-[#1A2B45]">4.9</span>
                  <span className="text-sm text-gray-500">(127 avaliações)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-100">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl text-[#1A2B45] mb-1">156</div>
              <div className="text-xs lg:text-sm text-gray-500">Serviços</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl text-[#1A2B45] mb-1">98%</div>
              <div className="text-xs lg:text-sm text-gray-500">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl text-[#1A2B45] mb-1">2h</div>
              <div className="text-xs lg:text-sm text-gray-500">Resposta</div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-[#1A2B45] mb-2">Sobre</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Profissional especializado em alvenaria, reformas e acabamentos. 
              Trabalho com seriedade, pontualidade e garantia de qualidade. 
              Atendo toda região de São Paulo com orçamento sem compromisso.
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio and Reviews Container */}
      <div className="px-4 sm:px-6 lg:px-8 mt-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Portfolio Section */}
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <h3 className="text-[#1A2B45] mb-4">Portfólio</h3>
            <div className="grid grid-cols-3 gap-2">
              {mockPortfolio.map((img, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-100"
                >
                  <img
                    src={img}
                    alt={`Trabalho ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#1A2B45]">Avaliações</h3>
              <span className="text-sm text-gray-500">{mockReviews.length} avaliações</span>
            </div>
            
            <div className="space-y-4">
              {mockReviews.map((review) => (
                <div key={review.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-600">
                        {review.author.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <div className="text-sm text-[#1A2B45]">{review.author}</div>
                        <div className="text-xs text-gray-500">{review.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-500" fill="currentColor" strokeWidth={1.5} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden">
        <button
          onClick={() => onNavigate("request")}
          className="w-full h-14 min-h-[44px] bg-[#1A2B45] text-white rounded-xl flex items-center justify-center gap-2 hover:bg-[#2A3B55] transition-colors shadow-lg"
        >
          <Calendar className="w-5 h-5" strokeWidth={1.5} />
          <span>Solicitar Orçamento</span>
        </button>
      </div>

      {/* Desktop Fixed Button */}
      <div className="hidden lg:block px-4 sm:px-6 lg:px-8 mt-6 max-w-5xl mx-auto pb-8">
        <button
          onClick={() => onNavigate("request")}
          className="w-full h-14 min-h-[44px] bg-[#1A2B45] text-white rounded-xl flex items-center justify-center gap-2 hover:bg-[#2A3B55] transition-colors shadow-lg"
        >
          <Calendar className="w-5 h-5" strokeWidth={1.5} />
          <span>Solicitar Orçamento</span>
        </button>
      </div>
    </div>
  );
}