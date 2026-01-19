import { ArrowLeft, Upload, Image, Video, X } from "lucide-react";
import { useState } from "react";

interface RequestFormProps {
  onNavigate: (screen: string) => void;
}

export function RequestForm({ onNavigate }: RequestFormProps) {
  const [description, setDescription] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleFileUpload = () => {
    // Simulating file upload with placeholder images
    const newFile = `https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=200&h=200&fit=crop&t=${Date.now()}`;
    setUploadedFiles([...uploadedFiles, newFile]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-[#1A2B45] text-white px-4 sm:px-6 lg:px-8 py-6">
          <button onClick={() => onNavigate("profile")} className="mb-4 p-2 -ml-2 lg:hidden">
            <ArrowLeft className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <h2 className="text-2xl lg:text-3xl text-white">Solicitar Orçamento</h2>
          <p className="text-white/80 text-sm mt-1">Para João Silva - Pedreiro</p>
        </div>

        {/* Form Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          {/* Description Field */}
          <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
            <label className="block text-[#1A2B45] mb-3">
              Descreva o serviço necessário
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ex: Preciso fazer o reboco de uma parede externa de aproximadamente 20m². A parede já está levantada, mas precisa de acabamento..."
              className="w-full h-32 p-3 border border-gray-200 rounded-xl resize-none outline-none focus:border-[#1A2B45] transition-colors text-gray-900 text-sm"
            />
            <div className="text-xs text-gray-500 mt-2">
              Quanto mais detalhes, melhor será o orçamento
            </div>
          </div>

          {/* Upload Section - Highlighted */}
          <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 border-2 border-[#1A2B45]/10">
            <div className="flex items-center justify-between mb-3">
              <label className="text-[#1A2B45]">
                Fotos ou vídeos do local
              </label>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Image className="w-4 h-4" strokeWidth={1.5} />
                <Video className="w-4 h-4" strokeWidth={1.5} />
              </div>
            </div>

            {/* Upload Button */}
            <button
              onClick={handleFileUpload}
              className="w-full h-32 min-h-[44px] border-2 border-dashed border-[#1A2B45]/30 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-[#1A2B45] hover:bg-[#1A2B45]/5 transition-colors"
            >
              <Upload className="w-8 h-8 text-[#1A2B45]" strokeWidth={1.5} />
              <span className="text-sm text-[#1A2B45]">Clique para adicionar</span>
              <span className="text-xs text-gray-500">Fotos ou vídeos (até 10MB)</span>
            </button>

            {/* Uploaded Files Preview */}
            {uploadedFiles.length > 0 && (
              <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <img src={file} alt={`Upload ${index + 1}`} className="w-full h-full object-cover" />
                    <button
                      onClick={() => removeFile(index)}
                      className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      <X className="w-4 h-4" strokeWidth={2} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-3 p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-900 leading-relaxed">
                💡 <strong>Dica:</strong> Fotos e vídeos ajudam o profissional a entender melhor 
                o serviço e fornecer um orçamento mais preciso!
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
            <label className="block text-[#1A2B45] mb-3">
              Prazo desejado
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <button className="h-12 min-h-[44px] border border-gray-200 rounded-xl hover:border-[#1A2B45] hover:bg-[#1A2B45]/5 transition-colors text-sm">
                Urgente (esta semana)
              </button>
              <button className="h-12 min-h-[44px] border border-gray-200 rounded-xl hover:border-[#1A2B45] hover:bg-[#1A2B45]/5 transition-colors text-sm">
                Normal (até 15 dias)
              </button>
              <button className="h-12 min-h-[44px] border border-gray-200 rounded-xl hover:border-[#1A2B45] hover:bg-[#1A2B45]/5 transition-colors text-sm sm:col-span-2 lg:col-span-1">
                Flexível (combinar depois)
              </button>
            </div>
          </div>

          {/* Budget Preference */}
          <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
            <label className="block text-[#1A2B45] mb-3">
              Orçamento estimado (opcional)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
              <input
                type="number"
                placeholder="0,00"
                className="w-full h-12 min-h-[44px] pl-12 pr-4 border border-gray-200 rounded-xl outline-none focus:border-[#1A2B45] transition-colors text-gray-900"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Informar seu orçamento ajuda a receber propostas mais adequadas
            </p>
          </div>
        </div>

        {/* Fixed Bottom Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden">
          <button
            onClick={() => onNavigate("chat")}
            className="w-full h-14 min-h-[44px] bg-[#1A2B45] text-white rounded-xl hover:bg-[#2A3B55] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!description.trim()}
          >
            Enviar Solicitação
          </button>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block px-4 sm:px-6 lg:px-8 pb-8">
          <button
            onClick={() => onNavigate("chat")}
            className="w-full h-14 min-h-[44px] bg-[#1A2B45] text-white rounded-xl hover:bg-[#2A3B55] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!description.trim()}
          >
            Enviar Solicitação
          </button>
        </div>
      </div>
    </div>
  );
}