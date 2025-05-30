"use client"

import { useTheme } from "../global/Theme-context"
import { useThemeHelpers } from "./useThemeHelpers"


/**
 * Hook para gerar configurações de tema PrimeReact baseadas no tema atual da Barberia
 */
export function usePrimeTheme() {
  const { currentTheme } = useTheme()
  const { getColor, getBorderRadius, getShadow, getTransition } = useThemeHelpers()

  // Transições personalizadas baseadas no tema atual
  const TRANSITIONS = {
    overlay: {
      enterFromClass: "opacity-0 scale-75",
      enterActiveClass: `transition-transform transition-opacity ${getTransition("normal", "150ms ease-in")}`,
      leaveActiveClass: `transition-opacity ${getTransition("normal", "150ms ease-linear")}`,
      leaveToClass: "opacity-0",
    },
    toggleable: {
      enterFromClass: "max-h-0",
      enterActiveClass: `overflow-hidden transition-all ${getTransition("slow", "500ms ease-in-out")}`,
      enterToClass: "max-h-40",
      leaveFromClass: "max-h-40",
      leaveActiveClass: `overflow-hidden transition-all ${getTransition("slow", "500ms ease-in")}`,
      leaveToClass: "max-h-0",
    },
    overlay2: {
      timeout: 150,
      classNames: {
        enter: "opacity-0 scale-75",
        enterActive: `opacity-100 !scale-100 transition-transform transition-opacity ${getTransition(
          "normal",
          "150ms ease-in",
        )}`,
        exit: "opacity-100",
        exitActive: `!opacity-0 transition-opacity ${getTransition("normal", "150ms ease-linear")}`,
      },
    },
  }

  // Extensões de tema para componentes específicos
  const themeExtensions = {
    // Botões
    button: {
      root: ({ props, context }: { props: any; context: any }) => {
        // Cores personalizadas baseadas no tema atual
        const primaryColor = getColor("primary", "#3B82F6")
        const secondaryColor = getColor("secondary", "#6B7280")
        const textColor = getColor("text", "#374151")
        const buttonTextColor = getColor("buttonText", "#FFFFFF")

        // Classes base
        let baseClasses =
          "items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom transition duration-200 ease-in-out focus:outline-none focus:outline-offset-0"

        // Adicionar classes baseadas na variante
        if (props.severity === "contrast") {
          baseClasses += ` text-${buttonTextColor} bg-${primaryColor} border border-${primaryColor} hover:bg-${primaryColor} hover:opacity-90`
        }

        return {
          className: baseClasses,
        }
      },
    },

    // Dropdown
    dropdown: {
      root: ({ props }: { props: any }) => ({
        className: `cursor-pointer inline-flex relative select-none bg-${
          currentTheme.isDark ? "neutral-800" : "white"
        } border transition-colors duration-200 ease-in-out rounded-md dark:bg-gray-900 w-full md:w-56 hover:border-${getColor(
          "primary",
          "blue-500",
        )} focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)] ${
          props.disabled ? "opacity-60 select-none pointer-events-none cursor-default" : ""
        }`,
      }),
    },

    // Calendar
    calendar: {
      dayLabel: ({ context }: { context: any }) => ({
        className: `w-10 h-10 rounded-full transition-shadow duration-200 border-transparent border flex items-center justify-center mx-auto overflow-hidden relative focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)] ${
          context.disabled ? "opacity-60 cursor-default" : "cursor-pointer"
        } ${
          !context.selected && !context.disabled
            ? `text-gray-600 dark:text-white dark:hover:text-white font-bold bg-transparent hover:bg-${getColor(
                "primary",
                "blue-500",
              )} hover:bg-opacity-20`
            : ""
        } ${
          context.selected && !context.disabled
            ? `text-${getColor("buttonText", "white")} font-bold bg-${getColor("primary", "blue-500")}`
            : ""
        }`,
      }),
    },

    // Transições
    transitions: TRANSITIONS,
  }

  // Função para mesclar com configurações existentes
  const mergeWithExisting = (existingPt: any) => {
    // Implementação de mesclagem profunda
    const deepMerge = (target: any, source: any) => {
      const output = { ...target }

      if (typeof target === "object" && typeof source === "object") {
        Object.keys(source).forEach((key) => {
          if (typeof source[key] === "object" && source[key] !== null) {
            if (!(key in target)) {
              output[key] = source[key]
            } else {
              output[key] = deepMerge(target[key], source[key])
            }
          } else {
            output[key] = source[key]
          }
        })
      }

      return output
    }

    return deepMerge(existingPt, themeExtensions)
  }

  return {
    themeExtensions,
    mergeWithExisting,
    TRANSITIONS,
  }
}
