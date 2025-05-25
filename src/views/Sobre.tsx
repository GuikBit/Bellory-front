import ThemeSobre from "../components/Sobre/theme-sobre";

const Sobre = () => {   


    return (
        <ThemeSobre/>
        // <div className="flex flex-col items-center justify-center min-h-screen">
        //     <h1 className="text-4xl font-bold mb-4">Sobre</h1>
        //         <ThemeStyles />
        //         <div className="flex flex-col items-center justify-center min-h-screen p-4">
        //             <div className="w-full max-w-4xl mx-auto">
        //             <BarbeariaTitle
        //                 title="Demonstração de Temas"
        //                 subtitle="Veja como os componentes se adaptam ao tema selecionado"
        //             />

        //             <ThemeSelector />

        //             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        //                 <div>
        //                     <h3 className="text-xl font-semibold mb-4">Botões</h3>
        //                     <div className="space-y-4">
        //                         <div className="space-y-4">
        //                             <BarbeariaButton value="Primário" variant="primary" />
        //                             <BarbeariaButton value="Secundário" variant="secondary" />
        //                             <BarbeariaButton value="Outline" variant="outline" />
        //                             <BarbeariaButton value="Texto" variant="text" />
        //                         </div>
        //                         <div className="space-y-4">
        //                             <BarbeariaButton value="Pequeno" size="sm" />
        //                             <BarbeariaButton value="Médio" size="md" />
        //                             <BarbeariaButton value="Grande" size="lg" />
        //                         </div>
        //                         <div>
        //                         <BarbeariaButton value="Com ícone" leftIcon={<User size={16} />} />
        //                         </div>
        //                     </div>
        //                 </div>

        //                 <div>
        //                     <h3 className="text-xl font-semibold mb-4">Inputs</h3>
        //                     <div className="space-y-4">
        //                         <BarbeariaInput placeholder="Input padrão" />
        //                         <BarbeariaInput placeholder="Com label" label="Nome completo" />
        //                         <BarbeariaInput placeholder="Com ícone" leftIcon={<Mail size={16} />} />
        //                         <BarbeariaInput placeholder="Com erro" error="Este campo é obrigatório" />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="mb-8">
        //                 <h3 className="text-xl font-semibold mb-4">Cards</h3>
        //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        //                 <BarbeariaCard>
        //                     <div className="p-6">
        //                     <h4 className="text-lg font-semibold mb-2">Card Padrão</h4>
        //                     <p>Este é um exemplo de card com o tema atual.</p>
        //                     </div>
        //                 </BarbeariaCard>

        //                 <BarbeariaCard elevated={false} bordered={true}>
        //                     <div className="p-6">
        //                     <h4 className="text-lg font-semibold mb-2">Sem elevação</h4>
        //                     <p>Card sem sombra, apenas com borda.</p>
        //                     </div>
        //                 </BarbeariaCard>
        //                 </div>
        //             </div>

        //             <div className="mb-8">
        //                 <h3 className="text-xl font-semibold mb-4">Stepper</h3>
        //                 <BarbeariaStepper>
        //                 <div className="p-6">
        //                     <h4 className="text-lg font-semibold mb-4">Passo 1: Informações Pessoais</h4>
        //                     <div className="space-y-4">
        //                     <BarbeariaInput placeholder="Nome completo" leftIcon={<User size={16} />} />
        //                     <BarbeariaInput placeholder="Email" leftIcon={<Mail size={16} />} />
        //                     <BarbeariaInput placeholder="Senha" type="password" leftIcon={<Lock size={16} />} />
        //                     </div>
        //                 </div>
        //                 <div className="p-6">
        //                     <h4 className="text-lg font-semibold mb-4">Passo 2: Preferências</h4>
        //                     <p>Conteúdo do segundo passo...</p>
        //                 </div>
        //                 <div className="p-6">
        //                     <h4 className="text-lg font-semibold mb-4">Passo 3: Confirmação</h4>
        //                     <p>Conteúdo do terceiro passo...</p>
        //                 </div>
        //                 </BarbeariaStepper>
        //             </div>
        //             </div>
        //         </div>
        //     {/* </ThemeProvider> */}
        // </div>
    );
}

export default Sobre;