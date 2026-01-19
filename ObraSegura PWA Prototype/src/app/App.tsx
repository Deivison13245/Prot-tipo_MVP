import { useState } from "react";
import { SplashLogin } from "@/app/components/SplashLogin";
import { SignupClient } from "@/app/components/SignupClient";
import { SignupProvider } from "@/app/components/SignupProvider";
import { HomeSearch } from "@/app/components/HomeSearch";
import { ProfileProvider } from "@/app/components/ProfileProvider";
import { RequestForm } from "@/app/components/RequestForm";
import { ChatProposals } from "@/app/components/ChatProposals";
import { Dashboard } from "@/app/components/Dashboard";
import { ProposalsList } from "@/app/components/ProposalsList";
import { DesktopSidebar } from "@/app/components/DesktopSidebar";

type Screen = 
  | "splash" 
  | "signup-client" 
  | "signup-provider" 
  | "home" 
  | "profile" 
  | "request" 
  | "chat" 
  | "dashboard" 
  | "proposals";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("splash");
  const [activeTab, setActiveTab] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavigate = (screen: string, tab?: string) => {
    setCurrentScreen(screen as Screen);
    if (tab) {
      setActiveTab(tab);
    }
    
    // Mark as logged in after splash
    if (screen !== "splash" && screen !== "signup-client" && screen !== "signup-provider") {
      setIsLoggedIn(true);
    }
  };

  // Render layout with sidebar for desktop logged in views
  const renderWithLayout = (content: React.ReactNode) => {
    if (!isLoggedIn || currentScreen === "splash" || currentScreen === "signup-client" || currentScreen === "signup-provider") {
      return <div className="max-w-md lg:max-w-full mx-auto bg-white min-h-screen">{content}</div>;
    }

    return (
      <div className="flex min-h-screen bg-gray-50">
        <DesktopSidebar activeTab={activeTab} onNavigate={handleNavigate} />
        <main className="flex-1 max-w-md lg:max-w-full mx-auto bg-white lg:bg-gray-50 min-h-screen overflow-x-hidden">
          {content}
        </main>
      </div>
    );
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "splash":
        return <SplashLogin onNavigate={handleNavigate} />;
      case "signup-client":
        return <SignupClient onNavigate={handleNavigate} />;
      case "signup-provider":
        return <SignupProvider onNavigate={handleNavigate} />;
      case "home":
        return <HomeSearch onNavigate={handleNavigate} />;
      case "profile":
        return <ProfileProvider onNavigate={handleNavigate} />;
      case "request":
        return <RequestForm onNavigate={handleNavigate} />;
      case "chat":
        return <ChatProposals onNavigate={handleNavigate} />;
      case "dashboard":
        return (
          <Dashboard 
            onNavigate={handleNavigate} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
          />
        );
      case "proposals":
        return <ProposalsList onNavigate={handleNavigate} />;
      default:
        return <SplashLogin onNavigate={handleNavigate} />;
    }
  };

  return renderWithLayout(renderScreen());
}
