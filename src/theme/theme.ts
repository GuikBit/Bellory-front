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
    isDark: true, // Exemplo de propriedade adicional
    colors: {
      primary: '#1A202C',       // Ex: Um cinza escuro quase preto
      secondary: '#2D3748',     // Ex: Um cinza mais claro
      accent: '#4A5568',        // Ex: Um cinza azulado
      background: '#171923',    // Ex: Fundo bem escuro
      text: '#E2E8F0',          // Ex: Texto claro
      textSecondary: '#A0AEC0',  // Ex: Texto secundário mais suave
      cardBackground: '#2D3748',
      cardBackgroundSecondary: '',
      buttonText: '#FFFFFF',
      // ... outras cores específicas
    },
    fonts: {
      heading: '"Roboto Condensed", sans-serif',
      body: '"Open Sans", sans-serif',
    },
    borderRadius: {
      small: '0.25rem', // 4px
      medium: '0.375rem', // 6px
      large: '0.5rem',    // 8px
    },
    // Outras propriedades: sombras, espaçamentos específicos, etc.
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