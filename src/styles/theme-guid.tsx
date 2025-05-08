import type React from "react"
/**
 * Guia de Identidade Visual - Barbearia Bigode
 *
 * Este arquivo serve como referência para manter a consistência visual
 * em todo o projeto da Barbearia Bigode.
 */

import { Scissors, Crown } from "lucide-react"

/**
 * PALETA DE CORES
 *
 * Cores principais e secundárias que definem a identidade visual da Barbearia Bigode.
 */
export const COLORS = {
  // Cores principais
  primary: {
    main: "#D97706", // amber-600
    light: "#F59E0B", // amber-500
    dark: "#B45309", // amber-700
    contrast: "#FFFFFF", // texto sobre cor primária
  },

  // Cores de fundo
  background: {
    dark: "#171717", // neutral-900
    medium: "#262626", // neutral-800
    light: "#404040", // neutral-700
    card: "#1F1F1F", // entre neutral-900 e neutral-800
  },

  // Cores de texto
  text: {
    primary: "#FFFFFF", // branco
    secondary: "#D4D4D4", // neutral-300
    muted: "#737373", // neutral-500
    accent: "#D97706", // amber-600 (mesma cor primária)
  },

  // Cores de estado
  state: {
    success: "#10B981", // emerald-500
    error: "#EF4444", // red-500
    warning: "#F59E0B", // amber-500
    info: "#3B82F6", // blue-500
  },

  // Cores de borda
  border: {
    dark: "#404040", // neutral-700
    light: "#525252", // neutral-600
    highlight: "#D97706", // amber-600
  },
}

/**
 * TIPOGRAFIA
 *
 * Definições de fonte, tamanhos e pesos para manter consistência tipográfica.
 */
export const TYPOGRAPHY = {
  fontFamily: {
    primary: "Inter, sans-serif", // Fonte principal
    secondary: "Inter, sans-serif", // Fonte secundária (pode ser alterada)
  },

  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
  },

  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },

  lineHeight: {
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75",
  },
}

/**
 * ESPAÇAMENTO
 *
 * Sistema de espaçamento consistente para margens, paddings e gaps.
 */
export const SPACING = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "3rem", // 48px
  "3xl": "4rem", // 64px
}

/**
 * BORDAS E SOMBRAS
 *
 * Definições de bordas e sombras para elementos da interface.
 */
export const BORDERS = {
  radius: {
    sm: "0.25rem", // 4px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    full: "9999px", // Circular
  },

  width: {
    thin: "1px",
    normal: "2px",
    thick: "3px",
  },
}

export const SHADOWS = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
}

/**
 * ANIMAÇÕES
 *
 * Definições de animações e transições para elementos interativos.
 */
export const ANIMATIONS = {
  transition: {
    fast: "150ms ease",
    normal: "300ms ease",
    slow: "500ms ease",
  },

  // Variantes para Framer Motion
  variants: {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.3 } },
    },
    slideUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
    staggerChildren: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
    staggerItem: {
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 },
    },
  },
}

/**
 * ELEMENTOS DECORATIVOS
 *
 * Componentes e elementos visuais que definem a identidade da marca.
 */
export const DECORATIVE_ELEMENTS = {
  // Separador com tesoura (usado em títulos e seções)
  ScissorDivider: ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center ${className}`}>
      <div className="h-[1px] w-12 bg-amber-500"></div>
      <Scissors className="mx-2 text-amber-500" size={16} />
      <div className="h-[1px] w-12 bg-amber-500"></div>
    </div>
  ),

  // Ícone de coroa (usado para destacar elementos premium)
  PremiumBadge: ({ className = "" }: { className?: string }) => (
    <div
      className={`inline-flex items-center bg-amber-600 text-white text-xs font-medium px-2 py-0.5 rounded-full ${className}`}
    >
      <Crown size={12} className="mr-1" />
      <span>Premium</span>
    </div>
  ),
}

/**
 * COMPONENTES DE UI
 *
 * Estilos consistentes para componentes de UI comuns.
 */
export const UI_COMPONENTS = {
  // Estilos de botões
  button: {
    primary: "bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors duration-300",
    secondary:
      "bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-lg border border-neutral-700 transition-colors duration-300",
    outline:
      "bg-transparent border border-amber-600 text-amber-500 hover:bg-amber-600/10 font-medium rounded-lg transition-colors duration-300",
    text: "text-amber-500 hover:text-amber-400 font-medium bg-transparent transition-colors duration-300",
  },

  // Estilos de inputs
  input: {
    base: "w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-neutral-500 transition-colors duration-300",
    withIcon: "pl-10 pr-4",
  },

  // Estilos de cards
  card: {
    base: "bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden shadow-lg",
    hover: "transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl",
  },

  // Estilos de seções
  section: {
    dark: "bg-neutral-900 py-16",
    light: "bg-neutral-800 py-16",
    gradient: "bg-gradient-to-b from-neutral-900 to-neutral-800 py-16",
  },
}

/**
 * EXEMPLOS DE USO
 *
 * Exemplos de como aplicar a identidade visual em componentes comuns.
 */
export const USAGE_EXAMPLES = {
  // Exemplo de título de seção
  SectionTitle: ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <div className="flex flex-col items-center text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">{title}</h2>
      <DECORATIVE_ELEMENTS.ScissorDivider className="mb-4" />
      {subtitle && <p className="text-neutral-300 max-w-2xl">{subtitle}</p>}
    </div>
  ),

  // Exemplo de botão primário
  PrimaryButton: ({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button
      className={`${UI_COMPONENTS.button.primary} px-6 py-3 flex items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </button>
  ),

  // Exemplo de card
  Card: ({ title, content, className = "" }: { title: string; content: string; className?: string }) => (
    <div className={`${UI_COMPONENTS.card.base} ${UI_COMPONENTS.card.hover} p-6 ${className}`}>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-neutral-300">{content}</p>
    </div>
  ),
}

/**
 * UTILITÁRIOS
 *
 * Funções utilitárias para trabalhar com a identidade visual.
 */
export const UTILS = {
  // Função para combinar classes condicionalmente
  cn: (...classes: (string | boolean | undefined)[]) => {
    return classes.filter(Boolean).join(" ")
  },

  // Função para obter variação de cor
  getColorVariation: (color: string, opacity: number) => {
    return `${color}${Math.round(opacity * 100)}`
  },
}

/**
 * BREAKPOINTS
 *
 * Pontos de quebra para design responsivo.
 */
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
}

/**
 * LOGO E MARCA
 *
 * Informações sobre o uso correto do logo e da marca.
 */
export const BRAND = {
  name: "Barbearia Bigode",
  slogan: "Estilo & Tradição",
  logoUsage: {
    minSize: "32px",
    padding: "8px",
    backgrounds: ["dark", "light"],
  },
}

export default {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  BORDERS,
  SHADOWS,
  ANIMATIONS,
  DECORATIVE_ELEMENTS,
  UI_COMPONENTS,
  USAGE_EXAMPLES,
  UTILS,
  BREAKPOINTS,
  BRAND,
}
