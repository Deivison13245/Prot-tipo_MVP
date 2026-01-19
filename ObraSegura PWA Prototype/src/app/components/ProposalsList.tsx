import { ArrowLeft, CheckCircle2, Clock, XCircle, Eye } from "lucide-react";

interface ProposalsListProps {
  onNavigate: (screen: string) => void;
}

const mockProposals = [
  {
    id: 1,
    provider: "João Silva",
    specialty: "Pedreiro",
    service: "Reboco de parede externa",
    value: 1550.00,
    status: "pending",
    date: "18/01/2026",
    validUntil: "25/01/2026",
    rating: 4.9,
  },
  {
    id: 2,
    provider: "Pedro Santos",
    specialty: "Pedreiro",
    service: "Reboco de parede externa",
    value: 1800.00,
    status: "pending",
    date: "18/01/2026",
    validUntil: "25/01/2026",
    rating: 4.7,
  },
  {
    id: 3,
    provider: "Carlos Oliveira",
    specialty: "Pedreiro",
    service: "Reboco de parede externa",
    value: 1350.00,
    status: "pending",
    date: "18/01/2026",
    validUntil: "25/01/2026",
    rating: 4.8,
  },
  {
    id: 4,
    provider: "Ana Costa",
    specialty: "Pintor",
    service: "Pintura de sala",
    value: 890.00,
    status: "accepted",
    date: "15/01/2026",
    validUntil: "-",
    rating: 5.0,
  },
  {
    id: 5,
    provider: "Marcos Lima",
    specialty: "Pedreiro",
    service: "Reboco de parede externa",
    value: 2100.00,
    status: "rejected",
    date: "18/01/2026",
    validUntil: "-",
    rating: 4.6,
  },
];

const statusConfig = {
  pending: {
    label: "Aguardando",
    icon: Clock,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  accepted: {
    label: "Aceita",
    icon: CheckCircle2,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  rejected: {
    label: "Recusada",
    icon: XCircle,
    color: "text-gray-600",
    bg: "bg-gray-50",
    border: "border-gray-200",
  },
};

export function ProposalsList({ onNavigate }: ProposalsListProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-[#1A2B45] text-white px-4 sm:px-6 lg:px-8 py-6">
          <button onClick={() => onNavigate("dashboard")} className="mb-4 p-2 -ml-2 lg:hidden">
            <ArrowLeft className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <h2 className="text-2xl lg:text-3xl text-white">Propostas Recebidas</h2>
          <p className="text-white/80 text-sm mt-1">Visualize e compare todas as propostas</p>
        </div>

        {/* Summary */}
        <div className="px-4 sm:px-6 lg:px-8 -mt-6 mb-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <div className="text-xs text-gray-600 mb-1">Total</div>
              <div className="text-2xl text-[#1A2B45]">{mockProposals.length}</div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <div className="text-xs text-gray-600 mb-1">Aguardando</div>
              <div className="text-2xl text-orange-600">
                {mockProposals.filter(p => p.status === "pending").length}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <div className="text-xs text-gray-600 mb-1">Aceitas</div>
              <div className="text-2xl text-green-600">
                {mockProposals.filter(p => p.status === "accepted").length}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <div className="text-xs text-gray-600 mb-1">Média</div>
              <div className="text-2xl text-[#1A2B45]">R$ 1.538</div>
            </div>
          </div>
        </div>

        {/* Proposals Grid */}
        <div className="px-4 sm:px-6 lg:px-8 pb-24 lg:pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {mockProposals.map((proposal) => {
              const StatusIcon = statusConfig[proposal.status as keyof typeof statusConfig].icon;
              
              return (
                <div
                  key={proposal.id}
                  className={`bg-white rounded-2xl shadow-sm p-4 border-2 ${statusConfig[proposal.status as keyof typeof statusConfig].border} ${proposal.status === "pending" ? "hover:shadow-lg transition-shadow" : "opacity-75"}`}
                >
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${statusConfig[proposal.status as keyof typeof statusConfig].bg}`}>
                      <StatusIcon className={`w-4 h-4 ${statusConfig[proposal.status as keyof typeof statusConfig].color}`} strokeWidth={1.5} />
                      <span className={`text-xs ${statusConfig[proposal.status as keyof typeof statusConfig].color}`}>
                        {statusConfig[proposal.status as keyof typeof statusConfig].label}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">{proposal.date}</span>
                  </div>

                  {/* Provider Info */}
                  <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1A2B45] to-[#2A3B55] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                      {proposal.provider.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#1A2B45]">{proposal.provider}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{proposal.specialty}</span>
                        <span>⭐ {proposal.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Service */}
                  <div className="mb-3">
                    <div className="text-sm text-gray-700 mb-2">{proposal.service}</div>
                    <div className="text-2xl text-[#1A2B45]">
                      R$ {proposal.value.toFixed(2).replace('.', ',')}
                    </div>
                  </div>

                  {/* Valid Until */}
                  {proposal.status === "pending" && (
                    <div className="text-xs text-gray-500 mb-3">
                      Válida até: {proposal.validUntil}
                    </div>
                  )}

                  {/* Actions */}
                  {proposal.status === "pending" && (
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onNavigate("chat")}
                        className="h-10 min-h-[44px] border border-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-1"
                      >
                        <Eye className="w-4 h-4" strokeWidth={1.5} />
                        Ver
                      </button>
                      <button
                        onClick={() => onNavigate("chat")}
                        className="h-10 min-h-[44px] bg-[#1A2B45] text-white rounded-lg text-sm hover:bg-[#2A3B55] transition-colors"
                      >
                        Aceitar
                      </button>
                    </div>
                  )}

                  {proposal.status === "accepted" && (
                    <button
                      onClick={() => onNavigate("chat")}
                      className="w-full h-10 min-h-[44px] border border-[#1A2B45] text-[#1A2B45] rounded-lg text-sm hover:bg-[#1A2B45]/5 transition-colors"
                    >
                      Ver Detalhes
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
