import { Home, MessageCircle, Calendar, User, FileText, Building2 } from "lucide-react";

interface DesktopSidebarProps {
  activeTab: string;
  onNavigate: (screen: string, tab?: string) => void;
}

export function DesktopSidebar({ activeTab, onNavigate }: DesktopSidebarProps) {
  const menuItems = [
    { id: "home", label: "Início", icon: Home, screen: "home" },
    { id: "proposals", label: "Propostas", icon: FileText, screen: "proposals" },
    { id: "chat", label: "Mensagens", icon: MessageCircle, screen: "chat" },
    { id: "services", label: "Serviços", icon: Calendar, screen: "dashboard" },
    { id: "profile", label: "Perfil", icon: User, screen: "dashboard" },
  ];

  return (
    <aside className="hidden lg:flex lg:flex-col w-64 bg-white border-r border-gray-200 h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1A2B45] rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-xl text-[#1A2B45]">ObraSegura</h1>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.screen, item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-[#1A2B45] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={1.5} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
          <div className="w-10 h-10 bg-gradient-to-br from-[#1A2B45] to-[#2A3B55] rounded-full flex items-center justify-center text-white text-sm">
            MC
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm text-[#1A2B45] truncate">Maria Cliente</div>
            <div className="text-xs text-gray-500 truncate">maria@email.com</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
