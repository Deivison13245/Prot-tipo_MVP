import { Building2, User } from "lucide-react";

interface SplashLoginProps {
  onNavigate: (screen: string) => void;
}

export function SplashLogin({ onNavigate }: SplashLoginProps) {
  return (
    <div className="min-h-screen bg-[#1A2B45] flex flex-col items-center justify-between p-4 sm:p-6 lg:p-8 text-white">
      {/* Logo Section */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-md w-full">
        <div className="mb-8">
          <Building2 className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-white" strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-3 text-white">ObraSegura</h1>
        <p className="text-white/80 text-center max-w-xs sm:max-w-sm text-sm sm:text-base">
          Conectando você aos melhores profissionais de manutenção residencial
        </p>
      </div>

      {/* Login Options */}
      <div className="w-full max-w-md space-y-4">
        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button className="w-full h-12 min-h-[44px] bg-white text-[#1A2B45] rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-sm sm:text-base">Continuar com Google</span>
          </button>

          <button className="w-full h-12 min-h-[44px] bg-[#1877F2] text-white rounded-lg flex items-center justify-center gap-3 hover:bg-[#1664d8] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="text-sm sm:text-base">Continuar com Facebook</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-white/20"></div>
          <span className="text-white/60 text-xs sm:text-sm">ou cadastre-se como</span>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        {/* Sign Up Options */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onNavigate("signup-client")}
            className="h-16 min-h-[44px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex flex-col items-center justify-center gap-1 hover:bg-white/20 transition-colors"
          >
            <User className="w-6 h-6" strokeWidth={1.5} />
            <span className="text-sm">Cliente</span>
          </button>
          <button
            onClick={() => onNavigate("signup-provider")}
            className="h-16 min-h-[44px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex flex-col items-center justify-center gap-1 hover:bg-white/20 transition-colors"
          >
            <Building2 className="w-6 h-6" strokeWidth={1.5} />
            <span className="text-sm">Profissional</span>
          </button>
        </div>

        {/* Terms */}
        <p className="text-center text-xs text-white/60 mt-6 px-4">
          Ao continuar, você concorda com nossos{" "}
          <a href="#" className="underline">
            Termos de Uso
          </a>{" "}
          e{" "}
          <a href="#" className="underline">
            Política de Privacidade
          </a>
        </p>
      </div>
    </div>
  );
}