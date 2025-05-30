"use client"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { useTheme } from "../global/Theme-context"

type ThemeSelectorProps = {
  onSelect?: (themeId: string) => void
  showLabels?: boolean
  compact?: boolean
}

const ThemeSelector = ({ onSelect, showLabels = true, compact = false }: ThemeSelectorProps) => {
  const { currentTheme, setTheme, availableThemes } = useTheme()

  const handleThemeChange = (themeId: string) => {
    setTheme(themeId)
    if (onSelect) {
      onSelect(themeId)
    }
  }

  // Agrupar temas por tipo
  const groupedThemes = availableThemes.reduce(
    (acc, theme) => {
      const type = theme.type
      if (!acc[type]) {
        acc[type] = []
      }
      acc[type].push(theme)
      return acc
    },
    {} as Record<string, typeof availableThemes>,
  )

  return (
    <div className="w-full">
      {Object.entries(groupedThemes).map(([type, themes]) => (
        <div key={type} className={`mb-6 ${compact ? "mb-3" : ""}`}>
          <h3 className="text-lg font-medium mb-3 capitalize">{type === "default" ? "Padrão" : type}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {themes.map((theme) => (
              <motion.div
                key={theme.id}
                className={`
                  relative rounded-lg overflow-hidden cursor-pointer
                  border-2 transition-all duration-300
                  ${
                    currentTheme.id === theme.id
                      ? "border-primary ring-2 ring-primary ring-opacity-50"
                      : "border-transparent hover:border-gray-300"
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleThemeChange(theme.id)}
              >
                {/* Indicador de seleção */}
                {currentTheme.id === theme.id && (
                  <div className="absolute top-2 right-2 z-10 bg-primary text-white rounded-full p-1">
                    <Check size={16} />
                  </div>
                )}

                {/* Preview do tema */}
                <div
                  className="aspect-video w-full p-3"
                  style={{
                    background: theme.colors.background,
                    color: theme.colors.text,
                    fontFamily: theme.fonts.body,
                  }}
                >
                  <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="h-2 w-full mb-2 rounded-sm" style={{ background: theme.colors.primary }}></div>

                    {/* Content */}
                    <div className="flex-1 flex gap-2">
                      {/* Sidebar */}
                      <div className="w-1/4 rounded-sm" style={{ background: theme.colors.secondary }}></div>

                      {/* Main content */}
                      <div className="flex-1 flex flex-col gap-1">
                        <div className="h-2 w-3/4 rounded-sm" style={{ background: theme.colors.textSecondary }}></div>
                        <div className="h-2 w-1/2 rounded-sm" style={{ background: theme.colors.textSecondary }}></div>
                        <div className="mt-auto h-3 w-1/3 rounded-sm" style={{ background: theme.colors.accent }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nome do tema */}
                {showLabels && (
                  <div
                    className="py-2 px-3 text-sm font-medium"
                    style={{
                      background: theme.isDark ? "#1a1a1a" : "#f5f5f5",
                      color: theme.isDark ? "#fff" : "#333",
                    }}
                  >
                    {theme.name}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ThemeSelector
