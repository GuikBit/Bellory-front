# Barbearia Bigode - Guia de Identidade Visual

Este repositório contém o guia de identidade visual e componentes para o projeto Barbearia Bigode.

## Visão Geral

A identidade visual da Barbearia Bigode é caracterizada por:

- **Paleta de cores**: Tons de preto e cinza escuro com destaque em âmbar/dourado
- **Tipografia**: Fonte moderna e legível (Inter)
- **Elementos visuais**: Ícones de tesoura, separadores estilizados, efeitos sutis
- **Animações**: Transições suaves e efeitos interativos

## Componentes Principais

O projeto inclui componentes reutilizáveis que seguem a identidade visual:

- **BarbeariaButton**: Botões estilizados com variantes (primário, secundário, outline, texto)
- **BarbeariaInput**: Campos de entrada com suporte para ícones e mensagens de erro
- **BarbeariaCard**: Cards com efeitos de hover e estilos consistentes
- **BarbeariaTitle**: Títulos de seção com separadores decorativos

## Uso

Para manter a consistência visual em todo o projeto, utilize os componentes e estilos definidos neste guia.

### Exemplo de uso:

\`\`\`tsx
import { BarbeariaButton, BarbeariaTitle } from '@/components/ui'
import { Scissors } from 'lucide-react'

export default function ExamplePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <BarbeariaTitle 
        title="NOSSOS SERVIÇOS" 
        subtitle="Oferecemos uma variedade de serviços premium para atender às suas necessidades."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Conteúdo */}
      </div>
      
      <BarbeariaButton 
        variant="primary" 
        rightIcon={<Scissors size={16} />}
      >
        Agendar Agora
      </BarbeariaButton>
    </div>
  )
}
\`\`\`

## Cores

As cores principais da identidade visual são:

- **Âmbar (Primária)**: #D97706
- **Preto/Cinza Escuro (Fundo)**: #171717, #262626
- **Branco/Cinza Claro (Texto)**: #FFFFFF, #D4D4D4

## Animações

Utilize as animações definidas para criar uma experiência interativa:

- Efeitos de hover nos botões e cards
- Transições suaves entre estados
- Animações de entrada para elementos da página

## Responsividade

Todos os componentes são responsivos e se adaptam a diferentes tamanhos de tela.

---

© Barbearia Bigode. Todos os direitos reservados.
