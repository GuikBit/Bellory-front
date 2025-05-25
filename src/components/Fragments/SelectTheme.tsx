// src/components/ThemeSwitcherDropdown.tsx
import React, { useState, useEffect } from 'react'; // Adicionado React para FC e useEffect
import { useTheme } from '../../contexts/Theme-context'; // Seu hook de tema
import { themes } from '../../theme/theme'; // Seu objeto de temas
// Supondo que 'themes' tenha uma tipagem como:
// interface Theme { name: string; /* ...outras propriedades de cor */ }
// interface ThemesObject { [key: string]: Theme; }

// Definindo Props para o componente para clareza e tipagem
interface ThemeSwitcherDropdownProps {
  label?: string;
  containerClassName?: string; // Renomeado para evitar conflito com a variável 'className' dentro do componente se não for prop
  selectClassName?: string;
}

const ThemeSwitcherDropdown: React.FC<ThemeSwitcherDropdownProps> = ({
  label = "Escolha um tema:",
  containerClassName = "mb-10",
  selectClassName = "block w-full md:w-auto p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white",
}) => {
  const { currentTheme, setTheme } = useTheme();

  // Estado para controlar o valor selecionado no dropdown.
  // Idealmente, inicializar com o ID do tema atual do contexto, se disponível e correspondente a uma chave em `themes`.
  // Isso requer que `currentTheme` tenha uma propriedade `id` ou você encontre a chave correspondente.
  // Por simplicidade, vamos supor que você pode obter o ID inicial.
  // Se `currentTheme` não tiver um `id` diretamente, você precisará de uma lógica para encontrá-lo.
  const findThemeKeyByThemeObject = (themeToFind: typeof currentTheme): string | undefined => {
    return Object.keys(themes).find(key => themes[key as keyof typeof themes].name === themeToFind.name); // Ou outra propriedade única
  }

  const initialThemeKey = findThemeKeyByThemeObject(currentTheme) || "masculine_default";
  const [selectedUITheme, setSelectedUITheme] = useState<string>(initialThemeKey);

  // Sincroniza o dropdown se o tema global mudar externamente
  useEffect(() => {
    const currentKey = findThemeKeyByThemeObject(currentTheme);
    if (currentKey && currentKey !== selectedUITheme) {
      setSelectedUITheme(currentKey);
    }
  }, [currentTheme, selectedUITheme]); // Adicionado selectedUITheme para evitar loops se a lógica de find não for perfeita

  const handleThemeSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newThemeId = event.target.value;
    setSelectedUITheme(newThemeId); // Atualiza o estado local do dropdown
    setTheme(newThemeId);         // Atualiza o tema global através do contexto
  };

  return (
    <div className={containerClassName}>
      <label htmlFor="theme-select" className="sr-only">
        {label}
      </label>
      <select
        id="theme-select"
        value={selectedUITheme} // Controlado pelo estado local
        onChange={handleThemeSelectionChange} // Corrigido para usar o valor do evento
        className={selectClassName}
      >
        {Object.keys(themes).map((themeId) => (
          <option key={themeId} value={themeId}>
            {/* A asserção 'as keyof typeof themes' é importante se 'themes' for bem tipado */}
            {themes[themeId as keyof typeof themes].name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSwitcherDropdown;