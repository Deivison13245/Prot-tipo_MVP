import { ArrowLeft, User, Mail, Phone, Lock, MapPin, Briefcase, FileText, Upload, X } from "lucide-react";
import { useState } from "react";

interface SignupProviderProps {
  onNavigate: (screen: string) => void;
}

export function SignupProvider({ onNavigate }: SignupProviderProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    specialty: "",
    experience: "",
    description: "",
  });
  const [documents, setDocuments] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate("home");
  };

  const handleDocumentUpload = () => {
    const newDoc = `doc_${Date.now()}.pdf`;
    setDocuments([...documents, newDoc]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-[#1A2B45] text-white px-4 sm:px-6 lg:px-8 py-6">
          <button onClick={() => onNavigate("splash")} className="mb-4 p-2 -ml-2">
            <ArrowLeft className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <h2 className="text-2xl lg:text-3xl text-white">Cadastro de Profissional</h2>
          <p className="text-white/80 text-sm mt-1">Preencha seus dados para começar a receber solicitações</p>
        </div>

        {/* Form */}
        <div className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8">
              <h3 className="text-[#1A2B45] mb-4">Informações Pessoais</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Nome Completo *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome completo"
                      className="w-full h-12 min-h-[44px] pl-11 pr-4 border border-gray-200 rounded-xl outline-none focus:border-[#1A2B45] transition-colors text-gray-900"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="w-full h-12 min-h-[44px] pl-11 pr-4 border border-gray-200 rounded-xl outline-none focus:border-[#1A2B45] transition-colors text-gray-900"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Telefone *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className="w-full h-12 min-h-[44px] pl-11 pr-4 border border-gray-200 rounded-xl outline-none focus:border-[#1A2B45] transition-colors text-gray-900"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Cidade de Atuação *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Sua cidade"
                      className="w-full h-12 min-h-[44px] pl-11 pr-4 border border-gray-200 rounded-xl outline-none focus:border-[#1A2B45] transition-colors text-gray-900"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Info */}
            <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8">
              <h3 className="text-[#1A2B45] mb-4">Informações Profissionais</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Especialidade *</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                    <select
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      className="w-full h-12 min-h-[44px] pl-11 pr-4 border border-gray-200 rounded-xl outline-none focus:border-[#1A2B45] transition-colors text-gray-900 appearance-none"
                      required
                    >
                      <option value="">Selecione...</option>
                      <option value="pedreiro">Pedreiro</option>
                      <option value="pintor">Pintor</option>
                      <option value="eletricista">Eletricista</option>
                      <option value="encanador">Encanador</option>
                      <option value="laje">Laje</option>
                      <option value="carpinteiro">Carpinteiro</option>
                      <option value="jardineiro">Jardineiro</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Anos de Experiência *</label>
                  <input
                    type="number"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    placeholder="Ex: 5"
                    min="0"
                    className="w-full h-12 min-h-[44px] px-4 border border-gray-200 rounded-xl outline-none focus:border-[#1A2B45] transition-colors text-gray-900"
                    required
                  />
                </div>

                <div className="lg:col-span-2">
                  <label className="block text-sm text-gray-700 mb-2">Sobre você e seus serviços *</label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Descreva sua experiência, tipos de serviços que realiza, diferenciais..."
                      className="w-full h-32 pl-11 pr-4 pt-3 pb-3 border border-gray-200 rounded-xl resize-none outline-none focus:border-[#1A2B45] transition-colors text-gray-900"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8">
              <h3 className="text-[#1A2B45] mb-2">Documentação</h3>
              <p className="text-sm text-gray-600 mb-4">
                Para verificação do seu perfil (RG, CPF, comprovante de residência)
              </p>
              
              <button
                type="button"
                onClick={handleDocumentUpload}
                className="w-full h-24 min-h-[44px] border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-[#1A2B45] hover:bg-[#1A2B45]/5 transition-colors"
              >
                <Upload className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
                <span className="text-sm text-gray-600">Clique para enviar documentos</span>
              </button>

              {documents.length > 0 && (
                <div className="mt-4 space-y-2">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">{doc}</span>
                      <button
                        type="button"
                        onClick={() => setDocuments(documents.filter((_, i) => i !== index))}
                        className="text-red-500 hover:text-red-600"
                      >
                        <X className="w-4 h-4" strokeWidth={1.5} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Password */}
            <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8">
              <h3 className="text-[#1A2B45] mb-4">Segurança</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Senha *</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="Mínimo 6 caracteres"
                      className="w-full h-12 min-h-[44px] pl-11 pr-4 border border-gray-200 rounded-xl outline-none focus:border-[#1A2B45] transition-colors text-gray-900"
                      required
                      minLength={6}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Confirmar Senha *</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      placeholder="Digite a senha novamente"
                      className="w-full h-12 min-h-[44px] pl-11 pr-4 border border-gray-200 rounded-xl outline-none focus:border-[#1A2B45] transition-colors text-gray-900"
                      required
                      minLength={6}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8">
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  Aceito os{" "}
                  <a href="#" className="text-[#1A2B45] underline">
                    Termos de Uso
                  </a>{" "}
                  e{" "}
                  <a href="#" className="text-[#1A2B45] underline">
                    Política de Privacidade
                  </a>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-14 min-h-[44px] bg-[#1A2B45] text-white rounded-xl hover:bg-[#2A3B55] transition-colors shadow-lg"
            >
              Criar Conta Profissional
            </button>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600">
              Já tem uma conta?{" "}
              <button
                type="button"
                onClick={() => onNavigate("splash")}
                className="text-[#1A2B45] underline"
              >
                Fazer login
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
