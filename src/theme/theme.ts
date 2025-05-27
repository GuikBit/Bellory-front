export const themes = {
  masculine_default: {
    id: 'masculine_default',
    name: 'Masculino Default',
    type: 'default',
    isDark: true, // Exemplo de propriedade adicional
    colors: {
      primary: '#FE9A00',       // Ex: Um cinza escuro quase preto
      secondary: '#FFB900',     // Ex: Um cinza mais claro
      accent: '#4A5568',        // Ex: Um cinza azulado
      background: '#0A0A0A',    // Ex: Fundo bem escuro
      text: '#fff',          // Ex: Texto claro
      textSecondary: '#A0AEC0',  // Ex: Texto secundário mais suave
      cardBackground: '#262626',
      cardBackgroundSecondary: '#171717', // mais escuro
      buttonText: '#FFFFFF',
      backgroundLinear: 'linear-gradient(135deg, #FE9A00, #FFB900)'
      // ... outras cores específicas
    },
    fonts: {
      heading: 'Poppins, sans-serif',
      body: 'Poppins, sans-serif',
    },
    borderRadius: {
      small: '0.25rem', // 4px
      medium: '0.375rem', // 6px
      large: '0.5rem',    // 8px
    },
    // Outras propriedades: sombras, espaçamentos específicos, etc.
  },
  masculinoModerno: {
    id: 'masculinoModerno',
    name: 'Masculino Moderno',
    type: 'masculino',
    isDark: true,
    colors: {
      primary: '#1E1F26',         // Cinza chumbo escuro (base principal)
      secondary: '#2C2E34',       // Cinza grafite mais definido
      accent: '#556B8C',          // Azul acinzentado elegante (destaque sutil)
      background: '#15161B',      // Quase preto com toque azulado
      text: '#F5F7FA',            // Branco suave (melhor legibilidade)
      textSecondary: '#B0B8C1',   // Cinza claro azulado para textos secundários
      cardBackground: '#23252B',  // Cartões com leve contraste do fundo
      cardBackgroundSecondary: '#2E3036', // Para cards em destaque leve
      buttonText: '#FFFFFF',      // Texto de botões branco
      backgroundLinear: 'linear-gradient(135deg, #1E1F26, #2C2E34)'
    },
    fonts: {
      heading: '"Roboto Condensed", sans-serif',
      body: '"Open Sans", sans-serif',
    },
    borderRadius: {
      small: '0.25rem',
      medium: '0.375rem',
      large: '0.5rem',
    },
  },
  masculinoClassico: {
    id: 'masculinoClassico',
    name: 'Masculino Clássico',
    type: 'masculino',
    isDark: false,
    colors: {
      primary: '#6B4F4F',       // Ex: Marrom rústico
      secondary: '#A17C6B',     // Ex: Bege
      accent: '#D4A5A5',        // Ex: Rosa queimado suave
      background: '#F5EFE6',    // Ex: Creme
      text: '#423838',          // Ex: Marrom escuro para texto
      textSecondary: '#7D6E6E',
      cardBackground: '#FFFFFF',
      cardBackgroundSecondary: '',
      buttonText: '#FFFFFF',
      backgroundLinear: 'linear-gradient(135deg, #6B4F4F, #A17C6B)'
    },
    fonts: {
      heading: '"Playfair Display", serif',
      body: '"Lato", sans-serif',
    },
    borderRadius: {
      small: '2px',
      medium: '4px',
      large: '6px',
    },
  },
  femininoElegante: {
    id: 'femininoElegante',
    name: 'Feminino Elegante',
    type: 'feminino',
    isDark: false,
    colors: {
      primary: '#B08D9A',       // Ex: Rosa antigo
      secondary: '#D8BFD8',     // Ex: Lilás claro (Thistle)
      accent: '#F0E6EF',        // Ex: Lavanda muito claro
      background: '#FFFFFF',
      text: '#4B4453',          // Ex: Roxo acinzentado escuro
      textSecondary: '#7E7385',
      cardBackground: '#FAF7FA',
      cardBackgroundSecondary: '',
      buttonText: '#FFFFFF',
      backgroundLinear: 'linear-gradient(135deg, #B08D9A, #D8BFD8)'
    },
    fonts: {
      heading: '"Cormorant Garamond", serif',
      body: '"Raleway", sans-serif',
    },
    borderRadius: {
      small: '0.375rem',
      medium: '0.5rem',
      large: '0.75rem',
    },
  },
  femininoModerno: {
    id: 'femininoModerno',
    name: 'Feminino Moderno',
    type: 'feminino',
    isDark: false, // Pode ser true se for um tema escuro feminino
    colors: {
      primary: '#FF69B4',       // Ex: Pink vibrante
      secondary: '#FFC0CB',     // Ex: Rosa claro
      accent: '#ADD8E6',        // Ex: Azul claro
      background: '#FFF0F5',    // Ex: Lavanda blush
      text: '#333333',
      textSecondary: '#555555',
      cardBackground: '#FFFFFF',
      cardBackgroundSecondary: '',
      buttonText: '#000000', // Texto do botão pode variar
      backgroundLinear: 'linear-gradient(135deg, #FF69B4, #FFC0CB)',
      boxShadow: `0px 4px 15px rgba(255, 105, 180, 0.2)`,
    },
    fonts: {
      heading: '"Poppins", sans-serif',
      body: '"Montserrat", sans-serif',
    },
    borderRadius: {
      small: '0.5rem',
      medium: '0.75rem',
      large: '1rem',
    },
  },
};