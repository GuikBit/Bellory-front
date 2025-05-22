import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Definindo os tipos de templates disponíveis
export type TemplateType = "masculine-1" | "masculine-2" | "feminine-1" | "feminine-2"

type TemplateContextType = {
  currentTemplate: TemplateType
  setTemplate: (template: TemplateType) => void
}

const TemplateContext = createContext<TemplateContextType | undefined>(undefined)

export function TemplateProvider({ children }: { children: ReactNode }) {
  // Inicializa com um template padrão, mas verifica o localStorage se disponível
  const [currentTemplate, setCurrentTemplate] = useState<TemplateType>("masculine-1")

  useEffect(() => {
    // Recupera a preferência do usuário do localStorage quando disponível
    if (typeof window !== "undefined") {
      const savedTemplate = localStorage.getItem("selectedTemplate") as TemplateType
      if (savedTemplate) {
        setCurrentTemplate(savedTemplate)
      }
    }
  }, [])

  const setTemplate = (template: TemplateType) => {
    setCurrentTemplate(template)
    // Salva a preferência do usuário no localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedTemplate", template)
    }
  }

  return <TemplateContext.Provider value={{ currentTemplate, setTemplate }}>{children}</TemplateContext.Provider>
}

export function useTemplate() {
  const context = useContext(TemplateContext)
  if (context === undefined) {
    throw new Error("useTemplate must be used within a TemplateProvider")
  }
  return context
}
