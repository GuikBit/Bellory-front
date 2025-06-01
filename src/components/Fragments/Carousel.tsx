"use client"

import type React from "react"
import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"
import { BarbeariaButton } from "../ui"
import { ChevronLeft, Settings } from "lucide-react"

// --- Helper: Debounce Function ---
function debounce(func: any, wait: any) {
  let timeout: any
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// --- Breakpoints ---
const breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280 }

// --- Default props ---
const defaultProps = {
  autoplay: false,
  interval: 3000,
  items: [],
  itemsToShow: { default: 1, sm: 2, md: 3, lg: 4 },
  verticalScrollNav: true,
  swipeThreshold: 50,
}

// --- Tipagem para Props ---
interface CarouselProps {
  items?: any[]
  renderItem: (item: any, index: number) => React.ReactNode
  autoplay?: boolean
  interval?: number
  itemsToShow?: {
    default: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  verticalScrollNav?: boolean
  swipeThreshold?: number
  className?: string
  theme?: any
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const {
    items = defaultProps.items,
    renderItem,
    autoplay = defaultProps.autoplay,
    interval = defaultProps.interval,
    itemsToShow: itemsToShowProp = defaultProps.itemsToShow,
    verticalScrollNav = defaultProps.verticalScrollNav,
    swipeThreshold = defaultProps.swipeThreshold,
    className = "",
    theme,
  } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [itemsPerPage, setItemsPerPage] = useState(itemsToShowProp.default)
  const [itemWidthPercentage, setItemWidthPercentage] = useState(100 / itemsToShowProp.default)
  const [isMounted, setIsMounted] = useState(false)
  const [maxIndex, setMaxIndex] = useState(0)

  // --- Refs para controle de toque ---
  const touchStartX = useRef<number>(0)
  const touchStartY = useRef<number>(0)
  const swipeHandledRef = useRef<boolean>(false)

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // --- Hook para Responsividade ---
  useEffect(() => {
    setIsMounted(true)
    const getItemsPerPage = () => {
      const width = window.innerWidth
      if (width >= breakpoints.lg && itemsToShowProp.lg) return itemsToShowProp.lg
      if (width >= breakpoints.md && itemsToShowProp.md) return itemsToShowProp.md
      if (width >= breakpoints.sm && itemsToShowProp.sm) return itemsToShowProp.sm
      return itemsToShowProp.default
    }

    const updateLayout = () => {
      if (!isMounted) return
      const newItemsPerPage = getItemsPerPage()
      setItemsPerPage(newItemsPerPage)
      setItemWidthPercentage(100 / newItemsPerPage)

      // Atualiza o índice máximo para garantir que sempre tenhamos itemsPerPage itens visíveis
      if (items && items.length > 0) {
        setMaxIndex(Math.max(0, items.length - newItemsPerPage))

        // Ajusta o índice atual se necessário
        if (currentIndex > items.length - newItemsPerPage) {
          setCurrentIndex(Math.max(0, items.length - newItemsPerPage))
        }
      }
    }

    const debouncedUpdateLayout = debounce(updateLayout, 150)
    updateLayout()
    window.addEventListener("resize", debouncedUpdateLayout)
    return () => {
      window.removeEventListener("resize", debouncedUpdateLayout)
    }
  }, [isMounted, itemsToShowProp, items, currentIndex])

  // --- Atualiza o maxIndex quando os itens mudam ---
  useEffect(() => {
    if (items && items.length > 0) {
      setMaxIndex(Math.max(0, items.length - itemsPerPage))
    }
  }, [items, itemsPerPage])

  // --- Funções de Navegação Modificadas para Circular ---
  const next = useCallback(() => {
    if (!items || items.length === 0 || items.length <= itemsPerPage) return

    setCurrentIndex((prevIndex) => {
      // Se estamos no último item ou além, voltamos para o início
      if (prevIndex >= maxIndex) {
        return 0
      }
      // Caso contrário, avançamos normalmente
      return prevIndex + 1
    })
  }, [items, itemsPerPage, maxIndex])

  const prev = useCallback(() => {
    if (!items || items.length === 0 || items.length <= itemsPerPage) return

    setCurrentIndex((prevIndex) => {
      // Se estamos no início, vamos para o último conjunto de itens
      if (prevIndex <= 0) {
        return maxIndex
      }
      // Caso contrário, retrocedemos normalmente
      return prevIndex - 1
    })
  }, [items, itemsPerPage, maxIndex])

  // --- Lógica do Autoplay ---
  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }, [])

  useEffect(() => {
    resetTimeout()
    if (autoplay && !isHovering && items && items.length > itemsPerPage) {
      timeoutRef.current = setTimeout(next, interval)
    }
    return resetTimeout
  }, [currentIndex, autoplay, interval, items, isHovering, next, resetTimeout, itemsPerPage])

  // --- Resetar Índice se Itens Mudarem ---
  useEffect(() => {
    if (items && items.length > 0 && currentIndex >= items.length) {
      setCurrentIndex(0)
    }
  }, [items, currentIndex])

  // --- Handlers de Toque para Navegação ---
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!verticalScrollNav || items.length <= itemsPerPage) return

      touchStartX.current = e.touches[0].clientX
      touchStartY.current = e.touches[0].clientY
      swipeHandledRef.current = false
      setIsHovering(true)
    },
    [verticalScrollNav, itemsPerPage, items?.length],
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!verticalScrollNav || !touchStartY.current || swipeHandledRef.current || items.length <= itemsPerPage) {
        return
      }

      const currentX = e.touches[0].clientX
      const currentY = e.touches[0].clientY
      const deltaX = touchStartX.current - currentX
      const deltaY = touchStartY.current - currentY

      if (Math.abs(deltaY) > swipeThreshold && Math.abs(deltaY) > Math.abs(deltaX)) {
        swipeHandledRef.current = true
        e.preventDefault()

        if (deltaY > 0) {
          next()
        } else {
          prev()
        }
      }
    },
    [verticalScrollNav, swipeThreshold, next, prev, itemsPerPage, items?.length],
  )

  const handleTouchEnd = useCallback(() => {
    if (!verticalScrollNav) return

    touchStartX.current = 0
    touchStartY.current = 0
    setIsHovering(false)
  }, [verticalScrollNav])

  // --- Validações e Renderização ---
  if (!isMounted) {
    return <div className={`relative w-full overflow-hidden ${className}`} style={{ minHeight: "100px" }}></div>
  }

  if (!items || items.length === 0) {
    return (
      <div className={`flex items-center justify-center h-32 text-gray-500 ${className}`}>Nenhum item para exibir.</div>
    )
  }

  if (!renderItem || typeof renderItem !== "function") {
    console.error("Carousel: A prop 'renderItem' é obrigatória e deve ser uma função.")
    return (
      <div className={`flex items-center justify-center h-32 text-red-500 ${className}`}>
        Erro: Função renderItem ausente ou inválida.
      </div>
    )
  }

  // Não exibir controles se não houver itens suficientes para rolar
  const shouldShowControls = items.length > itemsPerPage

  const xTranslate = `-${currentIndex * itemWidthPercentage}%`

  // Theme-aware button styles
  const buttonStyle = theme
    ? {
        backgroundColor: `${theme.colors.cardBackground}CC`,
        color: theme.colors.primary,
        borderRadius: theme.borderRadius.medium,
      }
    : {
        backgroundColor: "rgba(38, 38, 38, 0.8)",
        color: "#f59e0b",
      }

  const indicatorStyle = theme
    ? {
        active: theme.colors.primary,
        inactive: theme.colors.secondary,
      }
    : {
        active: "#f59e0b",
        inactive: "#525252",
      }

  return (
    <div
      className={`relative w-full ${className}`}
      onMouseEnter={() => !verticalScrollNav && setIsHovering(true)}
      onMouseLeave={() => !verticalScrollNav && setIsHovering(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: verticalScrollNav ? "none" : "auto" }}
    >
      {/* Container principal com posicionamento relativo para os botões */}
      <div className="relative">
        {/* Botões de navegação posicionados absolutamente */}
        {shouldShowControls && (
          <>
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 cursor-pointer -translate-y-1/2 z-20 p-2 rounded-full shadow-md focus:outline-none focus:ring-2 hover:border hover:scale-105 transition-all duration-200"
              style={{
                ...buttonStyle,
                
              }}
              aria-label="Slide anterior"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={next}
              className="absolute right-0 top-1/2 cursor-pointer -translate-y-1/2 z-20 p-2 rounded-full shadow-md focus:outline-none focus:ring-2 hover:border hover:scale-105 transition-all duration-200"
              style={{
                ...buttonStyle,
               
              }}
              aria-label="Próximo slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Container com overflow hidden para o carousel */}
        <div className="overflow-hidden px-8">
          <motion.div
            className="flex"
            animate={{ x: xTranslate }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
            }}
          >
            {items.map((item: any, index: number) => (
              <div
                key={index}
                className="flex-shrink-0 pb-5"
                style={{
                  flexBasis: `${itemWidthPercentage}%`,
                  minWidth: `${itemWidthPercentage}%`,
                }}
                aria-hidden={index < currentIndex || index >= currentIndex + itemsPerPage}
              >
                <div className="h-full w-full px-1 md:px-2">{renderItem(item, index)}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Indicadores */}
      {shouldShowControls && (
        <div className="flex justify-center mt-2 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors duration-200 focus:outline-none focus:ring-1`}
              style={{
                backgroundColor: currentIndex === index ? indicatorStyle.active : indicatorStyle.inactive,
                transform: currentIndex === index ? "scale(1.1)" : "scale(1)",
                
              }}
              aria-label={`Ir para o slide ${index + 1}`}
              aria-current={currentIndex === index ? "step" : undefined}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
