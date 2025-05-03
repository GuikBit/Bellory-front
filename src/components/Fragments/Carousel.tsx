import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

// --- Helper: Debounce Function ---
// Simples função debounce para evitar chamadas excessivas no resize
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

// --- Breakpoints (Exemplo - ajuste conforme seu design system/Tailwind config) ---
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

// --- Default props ---
const defaultProps = {
  autoplay: false,
  interval: 3000,
  items: [],
  // Define quantos itens mostrar por breakpoint
  itemsToShow: {
    default: 1, // Mobile first (ou fallback)
    sm: 2,
    md: 3,
    lg: 4,
    // xl: 5, // Pode adicionar mais breakpoints
  }
};

const Carousel = (props: any) => {
  const {
    items = defaultProps.items,
    renderItem,
    autoplay = defaultProps.autoplay,
    interval = defaultProps.interval,
    itemsToShow: itemsToShowProp = defaultProps.itemsToShow, // Renomeado para evitar conflito
    className = '',
  } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(itemsToShowProp.default); // Estado para itens visíveis
  const [itemWidthPercentage, setItemWidthPercentage] = useState(100 / itemsToShowProp.default); // Estado para largura %
  const [isMounted, setIsMounted] = useState(false); // Flag para evitar calculo inicial no server-side se aplicável

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // --- Hook para Responsividade ---
  useEffect(() => {
    setIsMounted(true); // Indica que o componente montou no cliente

    const getItemsPerPage = () => {
      const width = window.innerWidth;
      // Determina itemsPerPage baseado na largura e breakpoints definidos nas props
      if (width >= breakpoints.lg && itemsToShowProp.lg) return itemsToShowProp.lg;
      if (width >= breakpoints.md && itemsToShowProp.md) return itemsToShowProp.md;
      if (width >= breakpoints.sm && itemsToShowProp.sm) return itemsToShowProp.sm;
      return itemsToShowProp.default; // Fallback
    };

    const updateLayout = () => {
      if (!isMounted) return; // Não executa no SSR ou antes da montagem inicial
      const newItemsPerPage = getItemsPerPage();
      setItemsPerPage(newItemsPerPage);
      // Calcula a largura percentual de cada item
      setItemWidthPercentage(100 / newItemsPerPage);
    };

    // Debounce da função de update para performance
    const debouncedUpdateLayout = debounce(updateLayout, 150);

    // Chama na montagem inicial (depois do primeiro render no cliente)
    updateLayout();

    // Adiciona listener para resize
    window.addEventListener('resize', debouncedUpdateLayout);

    // Limpeza: remove listener ao desmontar
    return () => {
      window.removeEventListener('resize', debouncedUpdateLayout);
    };
    // Dependência `isMounted` garante execução após montagem
    // Dependências de `itemsToShowProp` garantem atualização se as props mudarem
  }, [isMounted, itemsToShowProp]);


  // --- Funções de Navegação ---
  const next = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }, [items.length]);

  // --- Lógica do Autoplay (sem alterações) ---
  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    resetTimeout();
    if (autoplay && !isHovering && items.length > 0) {
      timeoutRef.current = setTimeout(next, interval);
    }
    return resetTimeout;
  }, [currentIndex, autoplay, interval, items.length, isHovering, next, resetTimeout]);

  // --- Resetar Índice se Itens Mudarem (sem alterações) ---
   useEffect(() => {
    if (items.length > 0 && currentIndex >= items.length) {
      setCurrentIndex(0);
    }
  }, [items, currentIndex]);

  // --- Validações e Renderização ---
  if (!isMounted) {
     // Evita renderizar com calculo errado no SSR ou antes do primeiro calculo de layout
     // Pode mostrar um placeholder ou null
     return <div className={`relative w-full overflow-hidden ${className}`} style={{ minHeight: '100px' }}></div>; // Placeholder simples
  }

  if (!items || items.length === 0) {
    return <div className={`flex items-center justify-center h-32 text-gray-500 ${className}`}>Nenhum item para exibir.</div>;
  }

  if (!renderItem || typeof renderItem !== 'function') {
     console.error("Carousel: A prop 'renderItem' é obrigatória e deve ser uma função.");
     return <div className={`flex items-center justify-center h-32 text-red-500 ${className}`}>Erro: Função renderItem ausente ou inválida.</div>;
  }

  // --- Animação Adaptada ---
  // O deslocamento agora é baseado no índice e na largura percentual do item
  const xTranslate = `-${currentIndex * itemWidthPercentage}%`;

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
        
        <div className="grid grid-cols-12">
            {items.length > itemsPerPage && (
                <div className='bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center z-10'>
                    <button
                        onClick={prev}
                        className=" bg-neutral-300 dark:bg-neutral-700/40 hover:dark:bg-neutral-700/80 hover:cursor-pointer bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-opacity duration-200 z-10"
                        aria-label="Slide anterior"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button> 
                </div>
            )}
            
            <motion.div
                className="flex col-span-10"
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
                        className="flex-shrink-0  pb-5" // Impede que o item encolha
                        // Define a largura dinamicamente com base nos itens por página
                        // Usar flex-basis é robusto em flex containers
                        style={{
                            flexBasis: `${itemWidthPercentage}%`,
                            minWidth: `${itemWidthPercentage}%`, // Garante a largura mínima também
                            // Adicionar padding aqui ou dentro do renderItem para espaçamento
                            // paddingLeft: '8px', paddingRight: '8px' // Exemplo de espaçamento
                        }}
                        aria-hidden={currentIndex !== index} // Atenção: Isso pode não ser semanticamente perfeito quando múltiplos itens são "visíveis"
                    >
                        {/* Renderiza o item (adicione padding/margin aqui ou no seu template) */}
                        <div className="h-full w-full px-1 md:px-2 "> {/* Exemplo: Adiciona padding horizontal */}
                            {renderItem(item, index)}
                        </div>
                    </div>
                ))}
            </motion.div>
        
            {items.length > itemsPerPage && (
                <div className='bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center z-10 w-30'>
                    <button
                        onClick={next}
                        className=" bg-neutral-300 dark:bg-neutral-700/40 hover:dark:bg-neutral-700/80 hover:cursor-pointer bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-opacity duration-200 z-10"
                        aria-label="Próximo slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            )}
        </div>

      
        {items.length > itemsPerPage && (
            <div className="flex justify-center mt-2 space-x-2">
                {items.map((_: any, index: any) => (
                    <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors duration-200 ${
                        // Destaca o índice atual
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