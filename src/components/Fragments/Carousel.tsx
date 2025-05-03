import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

// --- Helper: Debounce Function ---
function debounce(func: any, wait: any) {
  let timeout: any;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// --- Breakpoints ---
const breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280 };

// --- Default props ---
const defaultProps = {
  autoplay: false,
  interval: 3000,
  items: [],
  itemsToShow: { default: 1, sm: 2, md: 3, lg: 4 },
  verticalScrollNav: true, // Nova prop para habilitar/desabilitar
  swipeThreshold: 50, // Distância vertical mínima para ativar a navegação
};

// --- Tipagem básica para Props (opcional, mas recomendado com TS) ---
interface CarouselProps {
  items?: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  autoplay?: boolean;
  interval?: number;
  itemsToShow?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  verticalScrollNav?: boolean; // Habilita navegação por scroll vertical
  swipeThreshold?: number; // Threshold para o swipe vertical
  className?: string;
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const {
    items = defaultProps.items,
    renderItem,
    autoplay = defaultProps.autoplay,
    interval = defaultProps.interval,
    itemsToShow: itemsToShowProp = defaultProps.itemsToShow,
    verticalScrollNav = defaultProps.verticalScrollNav, // Usa a nova prop
    swipeThreshold = defaultProps.swipeThreshold, // Usa a nova prop
    className = '',
  } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false); // Usado para pausar autoplay
  const [itemsPerPage, setItemsPerPage] = useState(itemsToShowProp.default);
  const [itemWidthPercentage, setItemWidthPercentage] = useState(100 / itemsToShowProp.default);
  const [isMounted, setIsMounted] = useState(false);

  // --- Refs para controle de toque ---
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const swipeHandledRef = useRef<boolean>(false); // Garante trigger único por swipe

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // --- Hook para Responsividade (sem alterações) ---
  useEffect(() => {
    setIsMounted(true);
    const getItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= breakpoints.lg && itemsToShowProp.lg) return itemsToShowProp.lg;
      if (width >= breakpoints.md && itemsToShowProp.md) return itemsToShowProp.md;
      if (width >= breakpoints.sm && itemsToShowProp.sm) return itemsToShowProp.sm;
      return itemsToShowProp.default;
    };
    const updateLayout = () => {
      if (!isMounted) return;
      const newItemsPerPage = getItemsPerPage();
      setItemsPerPage(newItemsPerPage);
      setItemWidthPercentage(100 / newItemsPerPage);
    };
    const debouncedUpdateLayout = debounce(updateLayout, 150);
    updateLayout();
    window.addEventListener('resize', debouncedUpdateLayout);
    return () => {
      window.removeEventListener('resize', debouncedUpdateLayout);
    };
  }, [isMounted, itemsToShowProp]);

  // --- Funções de Navegação (sem alterações) ---
  const next = useCallback(() => {
    if (!items || items.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items?.length]);

  const prev = useCallback(() => {
    if (!items || items.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }, [items?.length]);

  // --- Lógica do Autoplay (sem alterações) ---
  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    resetTimeout();
    // Pausa se estiver hover OU se swipe vertical estiver habilitado E swipe em progresso (controlado pelo isHovering)
    if (autoplay && !isHovering && items && items.length > 0) {
      timeoutRef.current = setTimeout(next, interval);
    }
    return resetTimeout;
  }, [currentIndex, autoplay, interval, items?.length, isHovering, next, resetTimeout]);


  // --- Resetar Índice se Itens Mudarem (sem alterações) ---
  useEffect(() => {
    if (items && items.length > 0 && currentIndex >= items.length) {
      setCurrentIndex(0);
    }
  }, [items, currentIndex]);

  // --- Handlers de Toque para Navegação Vertical ---
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!verticalScrollNav || items.length <= itemsPerPage) return; // Só ativa se habilitado e houver mais itens que o visível

    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    swipeHandledRef.current = false; // Reseta o controle de trigger
    setIsHovering(true); // Pausa o autoplay durante o toque
  }, [verticalScrollNav, itemsPerPage, items?.length]); // Adiciona dependências

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!verticalScrollNav || !touchStartY.current || swipeHandledRef.current || items.length <= itemsPerPage) {
        return; // Sai se não aplicável, swipe já tratado ou não há para onde rolar
    }

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = touchStartX.current - currentX;
    const deltaY = touchStartY.current - currentY; // Negativo para swipe up, Positivo para swipe down

    // Prioriza o eixo vertical e verifica o threshold
    if (Math.abs(deltaY) > swipeThreshold && Math.abs(deltaY) > Math.abs(deltaX)) {
      // É um swipe vertical significativo!
      swipeHandledRef.current = true; // Marca como tratado para este toque

      // --- Ponto Crítico: Prevenir scroll da página ---
      // Isso pode impedir o scroll normal se o usuário errar o gesto
      e.preventDefault();

      // Navega baseado na direção
      if (deltaY > 0) { // Swipe para Cima (Y diminui) -> Próximo item
        next();
      } else { // Swipe para Baixo (Y aumenta) -> Item anterior
        prev();
      }
       // Resetar startY pode permitir múltiplos swipes, vamos deixar resetar só no touchEnd
       // touchStartY.current = currentY;
    } else if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Se o swipe for mais horizontal, podemos considerar resetar o swipeHandled
        // para permitir que um swipe vertical subsequente funcione, mas isso adiciona complexidade.
        // Por ora, deixamos quieto - um swipe horizontal não interfere.
    }

  }, [verticalScrollNav, swipeThreshold, next, prev, itemsPerPage, items?.length]); // Adiciona dependências

  const handleTouchEnd = useCallback(() => {
    if (!verticalScrollNav) return;

    // Reseta as posições iniciais (opcional, mas limpa)
    touchStartX.current = 0;
    touchStartY.current = 0;
    // swipeHandledRef é resetado no próximo touchStart

    setIsHovering(false); // Permite que o autoplay retome (se ativo)
  }, [verticalScrollNav]); // Adiciona dependência


  // --- Validações e Renderização ---
  if (!isMounted) {
    return <div className={`relative w-full overflow-hidden ${className}`} style={{ minHeight: '100px' }}></div>;
  }

  if (!items || items.length === 0) {
    return <div className={`flex items-center justify-center h-32 text-gray-500 ${className}`}>Nenhum item para exibir.</div>;
  }

  if (!renderItem || typeof renderItem !== 'function') {
    console.error("Carousel: A prop 'renderItem' é obrigatória e deve ser uma função.");
    return <div className={`flex items-center justify-center h-32 text-red-500 ${className}`}>Erro: Função renderItem ausente ou inválida.</div>;
  }

  const xTranslate = `-${currentIndex * itemWidthPercentage}%`;

  return (
    // Adiciona os listeners de toque ao container principal (grid)
    <div
      className={`relative w-full ${className}`} // Removido overflow-visible, verificar se necessário
      onMouseEnter={() => !verticalScrollNav && setIsHovering(true)} // Hover só pausa se nav vertical estiver desligado
      onMouseLeave={() => !verticalScrollNav && setIsHovering(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      // Adiciona CSS para indicar ao navegador como tratar toques (opcional, pode ajudar)
      // 'touch-action: pan-y;' - Permitiria scroll vertical normal E nossos eventos JS (pode não prevenir default bem)
      // 'touch-action: pan-x;' - Priorizaria scroll horizontal (não queremos)
      // 'touch-action: none;' - Desabilitaria TODO scroll nativo (perigoso)
      // Vamos confiar no e.preventDefault() por enquanto.
      style={{ touchAction: verticalScrollNav ? 'none' : 'auto' }} // Tenta desabilitar scroll nativo SÓ SE nav vertical ativa
    >
      <div className="grid grid-cols-12 overflow-hidden"> {/* Adicionado overflow-hidden aqui para conter o motion.div */}

        {/* Botão Anterior */}
        {items.length > itemsPerPage && (
          <div className='col-span-1 bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center z-10'> {/* Ajustado col-span */}
            <button
              onClick={prev}
              className="bg-neutral-300 dark:bg-neutral-700/40 hover:dark:bg-neutral-700/80 hover:cursor-pointer bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-opacity duration-200 z-10"
              aria-label="Slide anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
          </div>
        )}

        {/* Container Animado */}
        {/* O motion.div ocupa o espaço central. Se houver botões, ele pega 10 colunas, senão 12. */}
        <motion.div
            className={`flex ${items.length > itemsPerPage ? 'col-span-10' : 'col-span-12'}`} // Ajusta col-span dinamicamente
            animate={{ x: xTranslate }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 30
            }}
        >
            {items.map((item: any, index: any) => (
                <div
                    key={index}
                    className="flex-shrink-0 pb-5"
                    style={{
                        flexBasis: `${itemWidthPercentage}%`,
                        minWidth: `${itemWidthPercentage}%`,
                    }}
                    aria-hidden={currentIndex !== index} // Manter para acessibilidade básica
                >
                    <div className="h-full w-full px-1 md:px-2 ">
                        {renderItem(item, index)}
                    </div>
                </div>
            ))}
        </motion.div>

        {/* Botão Próximo */}
        {items.length > itemsPerPage && (
           <div className='col-span-1 bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center z-10'> {/* Ajustado col-span */}
            <button
              onClick={next}
              className="bg-neutral-300 dark:bg-neutral-700/40 hover:dark:bg-neutral-700/80 hover:cursor-pointer bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-opacity duration-200 z-10"
              aria-label="Próximo slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        )}
      </div>

      {/* Indicadores */}
      {items.length > itemsPerPage && (
          <div className="flex justify-center mt-2 space-x-2">
              {items.map((_: any, index: any) => (
                  <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors duration-200 ${
                      currentIndex === index ? 'bg-blue-500 scale-110' : 'bg-gray-400 bg-opacity-70 hover:bg-gray-200'
                  } focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-black/20`}
                  aria-label={`Ir para o slide ${index + 1}`}
                  aria-current={currentIndex === index ? 'step' : undefined}
                  />
              ))}
          </div>
      )}
    </div>
  );
};

export default Carousel;