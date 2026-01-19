import { ArrowLeft, Send, CheckCircle2, Clock, Home } from "lucide-react";
import { useState } from "react";

interface ChatProposalsProps {
  onNavigate: (screen: string) => void;
}

export function ChatProposals({ onNavigate }: ChatProposalsProps) {
  const [message, setMessage] = useState("");
  const [showProposal, setShowProposal] = useState(true);

  const messages = [
    {
      id: 1,
      sender: "provider",
      text: "Olá Maria! Vi sua solicitação e posso te ajudar. Vou preparar um orçamento detalhado.",
      time: "14:23",
    },
    {
      id: 2,
      sender: "user",
      text: "Ótimo! Quando você consegue vir fazer uma visita?",
      time: "14:25",
    },
    {
      id: 3,
      sender: "provider",
      text: "Posso ir amanhã pela manhã. Enquanto isso, já preparei uma proposta inicial baseada nas fotos que você enviou.",
      time: "14:27",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-[#1A2B45] text-white px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-3">
        <button onClick={() => onNavigate("home")} className="p-2 -ml-2 lg:hidden">
          <ArrowLeft className="w-6 h-6" strokeWidth={1.5} />
        </button>
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-sm flex-shrink-0">
          JS
        </div>
        <div className="flex-1">
          <h3 className="text-white">João Silva</h3>
          <div className="flex items-center gap-1 text-xs text-white/70">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Online</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] sm:max-w-[70%] lg:max-w-[60%] rounded-2xl px-4 py-3 ${
                msg.sender === "user"
                  ? "bg-[#1A2B45] text-white rounded-br-sm"
                  : "bg-white text-gray-900 rounded-bl-sm shadow-sm"
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.text}</p>
              <span
                className={`text-xs mt-1 block ${
                  msg.sender === "user" ? "text-white/70" : "text-gray-500"
                }`}
              >
                {msg.time}
              </span>
            </div>
          </div>
        ))}

        {/* Proposal Card */}
        {showProposal && (
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border-2 border-[#1A2B45]/10 max-w-2xl mx-auto">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" strokeWidth={1.5} />
                <h4 className="text-[#1A2B45]">Proposta de Orçamento</h4>
              </div>
              <span className="text-xs text-gray-500">Válida por 7 dias</span>
            </div>

            {/* Service Details */}
            <div className="space-y-3 mb-4 pb-4 border-b border-gray-100">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Reboco de parede externa</span>
                <span className="text-[#1A2B45]">R$ 1.200,00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Materiais necessários</span>
                <span className="text-[#1A2B45]">R$ 350,00</span>
              </div>
              <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                <strong>Materiais inclusos:</strong>
                <ul className="mt-1 ml-4 list-disc space-y-1">
                  <li>Cimento (4 sacos de 50kg)</li>
                  <li>Areia média (1m³)</li>
                  <li>Cal hidratada (2 sacos)</li>
                </ul>
              </div>
            </div>

            {/* Timeline */}
            <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
              <Clock className="w-4 h-4" strokeWidth={1.5} />
              <span>Prazo de execução: 2-3 dias úteis</span>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
              <span className="text-lg text-[#1A2B45]">Valor Total</span>
              <span className="text-2xl text-[#1A2B45]">R$ 1.550,00</span>
            </div>

            {/* Payment Info */}
            <div className="bg-blue-50 p-3 rounded-lg mb-4">
              <p className="text-xs text-blue-900 leading-relaxed">
                💳 <strong>Pagamento Seguro:</strong> O valor fica retido no app até a 
                conclusão do serviço. Você só libera após aprovar o resultado!
              </p>
            </div>

            {/* Action Button */}
            <button
              onClick={() => onNavigate("dashboard")}
              className="w-full h-12 min-h-[44px] bg-[#1A2B45] text-white rounded-xl hover:bg-[#2A3B55] transition-colors flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5" strokeWidth={1.5} />
              <span>Aceitar e Pagar via App</span>
            </button>

            {/* Alternative Actions */}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <button className="h-10 min-h-[44px] border border-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                Solicitar Ajuste
              </button>
              <button className="h-10 min-h-[44px] border border-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                Recusar
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 p-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 max-w-4xl mx-auto">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 h-12 min-h-[44px] px-4 bg-gray-50 rounded-xl outline-none focus:bg-gray-100 transition-colors text-gray-900"
          />
          <button
            className="w-12 h-12 min-h-[44px] bg-[#1A2B45] text-white rounded-xl flex items-center justify-center hover:bg-[#2A3B55] transition-colors flex-shrink-0 disabled:opacity-50"
            disabled={!message.trim()}
          >
            <Send className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}