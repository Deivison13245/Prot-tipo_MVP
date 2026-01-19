import { Home, MessageCircle, User, Calendar, DollarSign, CheckCircle2, Clock, AlertCircle, FileText } from "lucide-react";

interface DashboardProps {
  onNavigate: (screen: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const mockServices = [
  {
    id: 1,
    provider: "João Silva",
    service: "Reboco de parede externa",
    status: "in_progress",
    date: "19/01/2026",
    value: 1550.00,
    paymentStatus: "retained",
  },
  {
    id: 2,
    provider: "Maria Santos",
    service: "Pintura de sala e quarto",
    status: "scheduled",
    date: "22/01/2026",
    value: 890.00,
    paymentStatus: "retained",
  },
  {
    id: 3,
    provider: "Carlos Oliveira",
    service: "Conserto de laje",
    status: "completed",
    date: "15/01/2026",
    value: 2200.00,
    paymentStatus: "released",
  },
];

const statusConfig = {
  in_progress: {
    label: "Em andamento",
    icon: Clock,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  scheduled: {
    label: "Agendado",
    icon: Calendar,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  completed: {
    label: "Concluído",
    icon: CheckCircle2,
    color: "text-green-600",
    bg: "bg-green-50",
  },
};

const paymentConfig = {
  retained: {
    label: "Retido",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  released: {
    label: "Liberado",
    color: "text-green-600",
    bg: "bg-green-50",
  },
};

export function Dashboard({ onNavigate, activeTab, setActiveTab }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-8">
      {/* Header */}
      <div className="bg-[#1A2B45] text-white px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-2xl lg:text-3xl text-white mb-1">Meus Serviços</h2>
        <p className="text-white/80 text-sm">Acompanhe seus agendamentos e pagamentos</p>
      </div>

      {/* Summary Cards */}
      <div className="px-4 sm:px-6 lg:px-8 -mt-6 mb-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-[#1A2B45]" strokeWidth={1.5} />
              <span className="text-xs text-gray-600">Agendados</span>
            </div>
            <div className="text-2xl text-[#1A2B45]">2</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-[#1A2B45]" strokeWidth={1.5} />
              <span className="text-xs text-gray-600">Retido</span>
            </div>
            <div className="text-2xl text-[#1A2B45]">R$ 2.440</div>
          </div>

          <div 
            className="bg-white rounded-2xl shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onNavigate("proposals")}
          >
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-orange-600" strokeWidth={1.5} />
              <span className="text-xs text-gray-600">Propostas</span>
            </div>
            <div className="text-2xl text-orange-600">3</div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" strokeWidth={1.5} />
              <span className="text-xs text-gray-600">Concluídos</span>
            </div>
            <div className="text-2xl text-green-600">1</div>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="px-4 sm:px-6 lg:px-8 space-y-4 max-w-6xl mx-auto">
        {mockServices.map((service) => {
          const StatusIcon = statusConfig[service.status as keyof typeof statusConfig].icon;
          
          return (
            <div key={service.id} className="bg-white rounded-2xl shadow-sm p-4">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-[#1A2B45] mb-1">{service.service}</h3>
                  <p className="text-sm text-gray-600">com {service.provider}</p>
                </div>
                <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${statusConfig[service.status as keyof typeof statusConfig].bg}`}>
                  <StatusIcon className={`w-4 h-4 ${statusConfig[service.status as keyof typeof statusConfig].color}`} strokeWidth={1.5} />
                  <span className={`text-xs ${statusConfig[service.status as keyof typeof statusConfig].color}`}>
                    {statusConfig[service.status as keyof typeof statusConfig].label}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 mb-3 pb-3 border-b border-gray-100">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Data</div>
                  <div className="text-sm text-[#1A2B45]">{service.date}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Valor</div>
                  <div className="text-sm text-[#1A2B45]">
                    R$ {service.value.toFixed(2).replace('.', ',')}
                  </div>
                </div>
              </div>

              {/* Payment Status */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-600">Pagamento:</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${paymentConfig[service.paymentStatus as keyof typeof paymentConfig].bg} ${paymentConfig[service.paymentStatus as keyof typeof paymentConfig].color}`}>
                    {paymentConfig[service.paymentStatus as keyof typeof paymentConfig].label}
                  </span>
                </div>

                {service.status === "completed" && service.paymentStatus === "retained" && (
                  <button className="h-9 min-h-[44px] px-4 bg-[#1A2B45] text-white rounded-lg text-sm hover:bg-[#2A3B55] transition-colors">
                    Liberar Pagamento
                  </button>
                )}

                {service.status !== "completed" && (
                  <button 
                    onClick={() => onNavigate("chat")}
                    className="h-9 min-h-[44px] px-4 border border-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                    Chat
                  </button>
                )}
              </div>

              {/* Additional Info for Completed Services */}
              {service.status === "completed" && service.paymentStatus === "retained" && (
                <div className="mt-3 p-3 bg-orange-50 rounded-lg flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-xs text-orange-900 leading-relaxed">
                    O serviço foi marcado como concluído. Revise o trabalho e libere o 
                    pagamento para o profissional.
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Navigation - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden">
        <div className="grid grid-cols-4 h-16">
          <button
            onClick={() => {
              setActiveTab("home");
              onNavigate("home");
            }}
            className={`flex flex-col items-center justify-center gap-1 ${
              activeTab === "home" ? "text-[#1A2B45]" : "text-gray-400"
            }`}
          >
            <Home className="w-6 h-6" strokeWidth={1.5} />
            <span className="text-xs">Início</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("proposals");
              onNavigate("proposals");
            }}
            className={`flex flex-col items-center justify-center gap-1 relative ${
              activeTab === "proposals" ? "text-[#1A2B45]" : "text-gray-400"
            }`}
          >
            <FileText className="w-6 h-6" strokeWidth={1.5} />
            <span className="text-xs">Propostas</span>
            <div className="absolute top-2 right-6 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </div>
          </button>

          <button
            onClick={() => {
              setActiveTab("services");
              onNavigate("dashboard");
            }}
            className={`flex flex-col items-center justify-center gap-1 ${
              activeTab === "services" ? "text-[#1A2B45]" : "text-gray-400"
            }`}
          >
            <Calendar className="w-6 h-6" strokeWidth={1.5} />
            <span className="text-xs">Serviços</span>
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center justify-center gap-1 ${
              activeTab === "profile" ? "text-[#1A2B45]" : "text-gray-400"
            }`}
          >
            <User className="w-6 h-6" strokeWidth={1.5} />
            <span className="text-xs">Perfil</span>
          </button>
        </div>
      </div>
    </div>
  );
}