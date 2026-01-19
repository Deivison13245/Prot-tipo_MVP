import { ArrowLeft, User, Mail, Phone, Lock, MapPin } from "lucide-react";
import { useState } from "react";

interface SignupClientProps {
  onNavigate: (screen: string) => void;
}

export function SignupClient({ onNavigate }: SignupClientProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate("home");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-[#1A2B45] text-white px-4 sm:px-6 lg:px-8 py-6">
          <button onClick={() => onNavigate("splash")} className="mb-4 p-2 -ml-2">
            <ArrowLeft className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <h2 className="text-2xl lg:text-3xl text-white">Cadastro de Cliente</h2>
          <p className="text-white/80 text-sm mt-1">Preencha seus dados para começar</p>
        </div>

        {/* Form */}
        <div className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8 space-y-6">
            {/* Personal Info */}
            <div>
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
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-[#1A2B45] mb-4">Endereço</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="lg:col-span-2">
                  <label className="block text-sm text-gray-700 mb-2">Endereço Completo *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Rua, número, complemento"
                      className="w-full h-12 min-h-[44px] pl-11 pr-4 border border-gray-200 rounded-xl outline-none focus:border-[#1A2B45] transition-colors text-gray-900"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Cidade *</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Sua cidade"
                    className="w-full h-12 min-h-[44px] px-4 border border-gray-200 rounded-xl outline-none focus:border-[#1A2B45] transition-colors text-gray-900"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Password */}
            <div>
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-14 min-h-[44px] bg-[#1A2B45] text-white rounded-xl hover:bg-[#2A3B55] transition-colors shadow-lg"
            >
              Criar Conta
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
