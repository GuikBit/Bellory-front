"use client"

import { useState } from "react"
import { Outlet } from "react-router"
import { useTheme } from "../global/Theme-context"
import InternalSidebar from "../components/Interno/Sidebar"
import InternalHeader from "../components/Interno/Header"
// import { useIsMobile } from "../hooks/useIsMobile"


const AuthTemplate = () => {
  const { currentTheme } = useTheme()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const handleLogout = () => {
    console.log("Logout clicked")
    // Implementar lógica de logout
  }

  const handleProfileClick = () => {
    console.log("Profile clicked")
    // Navegar para perfil
  }

  const handleSettingsClick = () => {
    console.log("Settings clicked")
    // Navegar para configurações
  }

  const handleSidebarToggle = (isOpen: boolean) => {
    setIsSidebarOpen(isOpen)
  }

  // const isMobile = useIsMobile();

  return (
    <div
      className="flex h-screen w-full overflow-hidden"
      style={{
        backgroundColor: currentTheme.colors.background,
        color: currentTheme.colors.text,
      }}
    >
      {/* Sidebar */}
      {/* <div className={!isSidebarOpen && isMobile?"hidden":"md:flex"}> */}
        <InternalSidebar isOpen={isSidebarOpen} onToggle={handleSidebarToggle} /> 
      {/* </div> */}
      

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <InternalHeader
          userName="João Silva"
          notifications={5}
          onMenuToggle={setIsSidebarOpen}
          onLogout={handleLogout}
          onProfileClick={handleProfileClick}
          onSettingsClick={handleSettingsClick}
          breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }, { label: "Visão Geral" }]}
        />

        {/* Main Content */}
        <main
          className="flex-1 overflow-y-auto p-6"
          style={{
            backgroundColor: currentTheme.colors.background,
            color: currentTheme.colors.text,
            fontFamily: currentTheme.fonts.body,
          }}
        >
          <div className="mx-auto">
            <Outlet />
          </div>
        </main>

        {/* Footer */}
        {/* <footer
          className="border-t px-6 py-4"
          style={{
            backgroundColor: currentTheme.colors.cardBackground,
            borderColor: `${currentTheme.colors.secondary}30`,
            color: currentTheme.colors.textSecondary,
          }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <p className="text-sm">© 2024 Beauty Salon Admin. Todos os direitos reservados.</p>
            <p className="text-sm">Versão 1.0.0</p>
          </div>
        </footer> */}
      </div>
    </div>
  )
}

export default AuthTemplate
