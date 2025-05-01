// src/hooks/useClipboard.ts
import { useState } from "react";

export const useClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Feedback temporário
      return true;
    } catch (err) {
      console.error("Erro ao copiar para a área de transferência", err);
      return false;
    }
  };

  return { copy, copied };
};


// const { copy, copied } = useClipboard();

// <button onClick={() => copy("Texto para copiar")}>
//   {copied ? "Copiado!" : "Copiar"}
// </button>