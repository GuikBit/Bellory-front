import { ArrowRight, Bell, Calendar, Check, Clock, CreditCard, DollarSign, Download, Globe, Heart, Lock, Mail, MapPin, Phone, Plus, Scissors, Search, Settings, Shield, ShoppingCart, Star, User } from "lucide-react";
import { BarbeariaButton, BarbeariaCard, BarbeariaInput } from "../components/ui";
import { useState } from "react";
import BarbeariaStepper, { BarbeariaStep } from "../components/ui/BarbeariaStepperNovo";
import BarbeariaDropdown from "../components/ui/BarbeariaDropdown";
import BarbeariaInputSwitch from "../components/ui/BarbeariaInputSwitch";
import { useTheme } from "../global/Theme-context";


const Componentes = () => {
    const { currentTheme: theme } = useTheme()
  const [values, setValues] = useState({
    basic: "",
    email: "",
    password: "",
    search: "",
    phone: "",
    date: "",
    price: "",
    address: "",
  })
  const [formData, setFormData] = useState({
      nome: "",
    email: "",
    categoria: "",
    genero: "",
    notificacoes: true,
    modoEscuro: false,
    autoSave: true,
    publicoPerfil: false,
  })

  // Opções para dropdowns
  const categorias = [
    {
      value: "corte",
      label: "Corte de Cabelo",
      icon: <User size={16} />,
      description: "Cortes tradicionais e modernos",
    },
    { value: "barba", label: "Barba", icon: <Settings size={16} />, description: "Aparar e modelar barba" },
    { value: "combo", label: "Combo", icon: <Globe size={16} />, description: "Cabelo + Barba" },
  ]

  const generos = [
    { value: "masculino", label: "Masculino" },
    { value: "feminino", label: "Feminino" },
    { value: "unissex", label: "Unissex" },
  ]

  const [activeDemo, setActiveDemo] = useState<string>("default")

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues((prev) => ({ ...prev, [field]: e.target.value }))
    }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Componentes UI</h1>
      <p className="mb-4">Aqui você pode explorar os componentes de interface do usuário.</p>
        <div className="flex flex-col">
            {/* Exemplo de componente button*/} 
            <div className="p-8 space-y-8  min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-8">Barberia Button - Showcase</h1>

                    {/* Variantes */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Variantes</h2>
                    <div className="flex flex-wrap gap-4">
                        <BarbeariaButton variant="primary">Primary</BarbeariaButton>
                        <BarbeariaButton variant="secondary">Secondary</BarbeariaButton>
                        <BarbeariaButton variant="outline">Outline</BarbeariaButton>
                        <BarbeariaButton variant="ghost">Ghost</BarbeariaButton>
                        <BarbeariaButton variant="text">Text</BarbeariaButton>
                    </div>
                    </section>

                    {/* Tamanhos */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Tamanhos</h2>
                    <div className="flex flex-wrap items-center gap-4">
                        <BarbeariaButton size="xs">Extra Small</BarbeariaButton>
                        <BarbeariaButton size="sm">Small</BarbeariaButton>
                        <BarbeariaButton size="md">Medium</BarbeariaButton>
                        <BarbeariaButton size="lg">Large</BarbeariaButton>
                        <BarbeariaButton size="xl">Extra Large</BarbeariaButton>
                    </div>
                    </section>

                    {/* Border Radius */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Border Radius</h2>
                    <div className="flex flex-wrap gap-4">
                        <BarbeariaButton rounded="none">None</BarbeariaButton>
                        <BarbeariaButton rounded="sm">Small</BarbeariaButton>
                        <BarbeariaButton rounded="md">Medium</BarbeariaButton>
                        <BarbeariaButton rounded="lg">Large</BarbeariaButton>
                        <BarbeariaButton rounded="xl">Extra Large</BarbeariaButton>
                        <BarbeariaButton rounded="full">Full</BarbeariaButton>
                    </div>
                    </section>

                    {/* Com Ícones */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Com Ícones</h2>
                    <div className="flex flex-wrap gap-4">
                        <BarbeariaButton leftIcon={<Heart />}>Favoritar</BarbeariaButton>
                        <BarbeariaButton rightIcon={<Download />} variant="outline">
                        Download
                        </BarbeariaButton>
                        <BarbeariaButton leftIcon={<Plus />} rightIcon={<ArrowRight />} variant="secondary">
                        Adicionar
                        </BarbeariaButton>
                    </div>
                    </section>

                    {/* Apenas Ícones */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Apenas Ícones</h2>
                    <div className="flex flex-wrap gap-4">
                        <BarbeariaButton iconOnly leftIcon={<Heart />} />
                        <BarbeariaButton iconOnly leftIcon={<Settings />} variant="outline" />
                        <BarbeariaButton iconOnly leftIcon={<Download />} variant="ghost" size="lg" />
                        <BarbeariaButton iconOnly leftIcon={<Plus />} rounded="full" />
                    </div>
                    </section>

                    {/* Estados */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Estados</h2>
                    <div className="flex flex-wrap gap-4">
                        <BarbeariaButton>Normal</BarbeariaButton>
                        <BarbeariaButton isLoading>Carregando</BarbeariaButton>
                        <BarbeariaButton disabled>Desabilitado</BarbeariaButton>
                        <BarbeariaButton isLoading leftIcon={<Download />}>
                        Baixando...
                        </BarbeariaButton>
                    </div>
                    </section>

                    {/* Largura Total */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Largura Total</h2>
                    <div className="space-y-2">
                        <BarbeariaButton fullWidth>Botão de Largura Total</BarbeariaButton>
                        <BarbeariaButton fullWidth variant="outline" leftIcon={<Settings />}>
                        Configurações
                        </BarbeariaButton>
                    </div>
                    </section>

                    {/* Combinações Avançadas */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Combinações Avançadas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <BarbeariaButton variant="primary" size="lg" rounded="full" leftIcon={<Heart />}>
                        Curtir
                        </BarbeariaButton>
                        <BarbeariaButton variant="outline" size="sm" rounded="lg" rightIcon={<ArrowRight />}>
                        Próximo
                        </BarbeariaButton>
                        <BarbeariaButton variant="ghost" size="xl" rounded="md" leftIcon={<Settings />} rightIcon={<ArrowRight />}>
                        Configurar
                        </BarbeariaButton>
                    </div>
                    </section>
                </div>
            </div>
            {/* Input */}
            <div className="p-8 space-y-8  min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-8">Barberia Input - Showcase</h1>

                    {/* Variantes */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Variantes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <BarbeariaInput label="Outline (Padrão)" placeholder="Digite algo..." variant="outline" />
                        <BarbeariaInput label="Filled" placeholder="Digite algo..." variant="filled" />
                        <BarbeariaInput label="Underline" placeholder="Digite algo..." variant="underline" />
                        <BarbeariaInput label="Ghost" placeholder="Digite algo..." variant="ghost" />
                    </div>
                    </section>

                    {/* Tamanhos */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Tamanhos</h2>
                    <div className="space-y-3">
                        <BarbeariaInput label="Small" placeholder="Tamanho pequeno" size="sm" />
                        <BarbeariaInput label="Medium (Padrão)" placeholder="Tamanho médio" size="md" />
                        <BarbeariaInput label="Large" placeholder="Tamanho grande" size="lg" />
                        <BarbeariaInput label="Extra Large" placeholder="Tamanho extra grande" size="xl" />
                    </div>
                    </section>

                    {/* Border Radius */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Border Radius</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <BarbeariaInput label="None" placeholder="Sem bordas" rounded="none" />
                        <BarbeariaInput label="Small" placeholder="Bordas pequenas" rounded="sm" />
                        <BarbeariaInput label="Medium" placeholder="Bordas médias" rounded="md" />
                        <BarbeariaInput label="Large" placeholder="Bordas grandes" rounded="lg" />
                        <BarbeariaInput label="Extra Large" placeholder="Bordas extra grandes" rounded="xl" />
                        <BarbeariaInput label="Full" placeholder="Bordas completas" rounded="full" />
                    </div>
                    </section>

                    {/* Com Ícones */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Com Ícones</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <BarbeariaInput
                        label="Nome de Usuário"
                        placeholder="Digite seu nome"
                        leftIcon={<User />}
                        value={values.basic}
                        onChange={handleChange("basic")}
                        />
                        <BarbeariaInput
                        label="Email"
                        type="email"
                        placeholder="seu@email.com"
                        leftIcon={<Mail />}
                        value={values.email}
                        onChange={handleChange("email")}
                        />
                        <BarbeariaInput
                        label="Buscar"
                        placeholder="Pesquisar..."
                        leftIcon={<Search />}
                        rightIcon={<Search />}
                        value={values.search}
                        onChange={handleChange("search")}
                        />
                        <BarbeariaInput
                        label="Telefone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        leftIcon={<Phone />}
                        value={values.phone}
                        onChange={handleChange("phone")}
                        />
                    </div>
                    </section>

                    {/* Tipos Especiais */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Tipos Especiais</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <BarbeariaInput
                        label="Senha"
                        type="password"
                        placeholder="Digite sua senha"
                        leftIcon={<Lock />}
                        value={values.password}
                        onChange={handleChange("password")}
                        />
                        <BarbeariaInput
                        label="Data"
                        type="date"
                        leftIcon={<Calendar />}
                        value={values.date}
                        onChange={handleChange("date")}
                        />
                        <BarbeariaInput
                        label="Preço"
                        type="number"
                        placeholder="0,00"
                        leftIcon={<DollarSign />}
                        value={values.price}
                        onChange={handleChange("price")}
                        />
                        <BarbeariaInput
                        label="Endereço"
                        placeholder="Rua, número, bairro"
                        leftIcon={<MapPin />}
                        value={values.address}
                        onChange={handleChange("address")}
                        clearable
                        onClear={() => setValues((prev) => ({ ...prev, address: "" }))}
                        />
                    </div>
                    </section>

                    {/* Estados */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Estados</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <BarbeariaInput label="Normal" placeholder="Estado normal" helperText="Este é um texto de ajuda" />
                        <BarbeariaInput
                        label="Com Erro"
                        placeholder="Digite algo"
                        error="Este campo é obrigatório"
                        leftIcon={<User />}
                        />
                        <BarbeariaInput
                        label="Sucesso"
                        placeholder="Digite algo"
                        success="Dados válidos!"
                        leftIcon={<Mail />}
                        value="usuario@email.com"
                        />
                        <BarbeariaInput label="Carregando" placeholder="Carregando..." isLoading />
                        <BarbeariaInput label="Desabilitado" placeholder="Campo desabilitado" disabled leftIcon={<User />} />
                        <BarbeariaInput label="Somente Leitura" value="Valor somente leitura" readOnly leftIcon={<Lock />} />
                    </div>
                    </section>

                    {/* Funcionalidades Avançadas */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Funcionalidades Avançadas</h2>
                    <div className="space-y-4">
                        <BarbeariaInput
                        label="Com Contador"
                        placeholder="Digite uma mensagem..."
                        showCounter
                        maxLength={100}
                        helperText="Máximo de 100 caracteres"
                        />
                        <BarbeariaInput
                        label="Campo Obrigatório"
                        placeholder="Este campo é obrigatório"
                        required
                        leftIcon={<User />}
                        clearable
                        />
                        <BarbeariaInput
                        label="Busca Avançada"
                        placeholder="Pesquisar produtos..."
                        leftIcon={<Search />}
                        clearable
                        variant="filled"
                        size="lg"
                        rounded="full"
                        />
                    </div>
                    </section>

                    {/* Combinações Avançadas */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Combinações Avançadas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <BarbeariaInput
                        label="Email Profissional"
                        type="email"
                        placeholder="seu.email@empresa.com"
                        leftIcon={<Mail />}
                        variant="filled"
                        size="lg"
                        rounded="lg"
                        clearable
                        helperText="Use seu email corporativo"
                        />
                        <BarbeariaInput
                        label="Senha Segura"
                        type="password"
                        placeholder="Mínimo 8 caracteres"
                        leftIcon={<Lock />}
                        variant="outline"
                        size="lg"
                        rounded="md"
                        showCounter
                        maxLength={50}
                        helperText="Use letras, números e símbolos"
                        />
                    </div>
                    </section>
                </div>
            </div>
            {/* Card */}
            <div className="p-8 space-y-8  min-h-screen">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-8">Barberia Card - Showcase</h1>

                    {/* Variantes */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Variantes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <BarbeariaCard variant="default">
                        <h3 className="text-lg font-semibold mb-2">Default Card</h3>
                        <p className="text-sm opacity-80">Este é um card padrão com estilo básico.</p>
                        </BarbeariaCard>

                        <BarbeariaCard variant="outline">
                        <h3 className="text-lg font-semibold mb-2">Outline Card</h3>
                        <p className="text-sm opacity-80">Card com borda destacada e fundo limpo.</p>
                        </BarbeariaCard>

                        <BarbeariaCard variant="filled">
                        <h3 className="text-lg font-semibold mb-2">Filled Card</h3>
                        <p className="text-sm opacity-80">Card com fundo preenchido e sutil.</p>
                        </BarbeariaCard>

                        <BarbeariaCard variant="glass">
                        <h3 className="text-lg font-semibold mb-2">Glass Card</h3>
                        <p className="text-sm opacity-80">Card com efeito de vidro e blur.</p>
                        </BarbeariaCard>

                        <BarbeariaCard variant="gradient">
                        <h3 className="text-lg font-semibold mb-2">Gradient Card</h3>
                        <p className="text-sm opacity-80">Card com gradiente do tema.</p>
                        </BarbeariaCard>

                        <BarbeariaCard variant="elevated">
                        <h3 className="text-lg font-semibold mb-2">Elevated Card</h3>
                        <p className="text-sm opacity-80">Card com elevação especial.</p>
                        </BarbeariaCard>
                    </div>
                    </section>

                    {/* Tamanhos */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Tamanhos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
                        <BarbeariaCard size="sm">
                        <h4 className="font-semibold mb-1">Small</h4>
                        <p className="text-xs opacity-80">Card pequeno</p>
                        </BarbeariaCard>

                        <BarbeariaCard size="md">
                        <h4 className="font-semibold mb-2">Medium</h4>
                        <p className="text-sm opacity-80">Card médio (padrão)</p>
                        </BarbeariaCard>

                        <BarbeariaCard size="lg">
                        <h4 className="font-semibold mb-2">Large</h4>
                        <p className="text-sm opacity-80">Card grande com mais espaço</p>
                        </BarbeariaCard>

                        <BarbeariaCard size="xl">
                        <h4 className="font-semibold mb-3">Extra Large</h4>
                        <p className="text-sm opacity-80">Card extra grande para conteúdo extenso</p>
                        </BarbeariaCard>
                    </div>
                    </section>

                    {/* Tipos de Hover */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Efeitos de Hover</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <BarbeariaCard hover="lift">
                        <h4 className="font-semibold mb-2">Lift</h4>
                        <p className="text-sm opacity-80">Eleva o card ao passar o mouse</p>
                        </BarbeariaCard>

                        <BarbeariaCard hover="scale">
                        <h4 className="font-semibold mb-2">Scale</h4>
                        <p className="text-sm opacity-80">Aumenta o tamanho sutilmente</p>
                        </BarbeariaCard>

                        <BarbeariaCard hover="glow">
                        <h4 className="font-semibold mb-2">Glow</h4>
                        <p className="text-sm opacity-80">Adiciona brilho ao redor</p>
                        </BarbeariaCard>

                        <BarbeariaCard hover="tilt">
                        <h4 className="font-semibold mb-2">Tilt</h4>
                        <p className="text-sm opacity-80">Inclina em perspectiva 3D</p>
                        </BarbeariaCard>
                    </div>
                    </section>

                    {/* Elevações */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Níveis de Elevação</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        <BarbeariaCard elevation="none">
                        <h4 className="font-semibold mb-2">None</h4>
                        <p className="text-sm opacity-80">Sem sombra</p>
                        </BarbeariaCard>

                        <BarbeariaCard elevation="sm">
                        <h4 className="font-semibold mb-2">Small</h4>
                        <p className="text-sm opacity-80">Sombra sutil</p>
                        </BarbeariaCard>

                        <BarbeariaCard elevation="md">
                        <h4 className="font-semibold mb-2">Medium</h4>
                        <p className="text-sm opacity-80">Sombra média</p>
                        </BarbeariaCard>

                        <BarbeariaCard elevation="lg">
                        <h4 className="font-semibold mb-2">Large</h4>
                        <p className="text-sm opacity-80">Sombra grande</p>
                        </BarbeariaCard>

                        <BarbeariaCard elevation="xl">
                        <h4 className="font-semibold mb-2">Extra Large</h4>
                        <p className="text-sm opacity-80">Sombra máxima</p>
                        </BarbeariaCard>
                    </div>
                    </section>

                    {/* Estados */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Estados</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <BarbeariaCard isHoverInteractive>
                        <h4 className="font-semibold mb-2">Normal</h4>
                        <p className="text-sm opacity-80">Estado padrão do card</p>
                        </BarbeariaCard>

                        <BarbeariaCard interactive onClick={() => alert("Card clicado!")}>
                        <h4 className="font-semibold mb-2">Interactive</h4>
                        <p className="text-sm opacity-80">Card clicável (clique aqui)</p>
                        </BarbeariaCard>

                        <BarbeariaCard isLoading showLoadingOverlay>
                        <h4 className="font-semibold mb-2">Loading</h4>
                        <p className="text-sm opacity-80">Card em carregamento</p>
                        </BarbeariaCard>

                        <BarbeariaCard disabled>
                        <h4 className="font-semibold mb-2">Disabled</h4>
                        <p className="text-sm opacity-80">Card desabilitado</p>
                        </BarbeariaCard>
                    </div>
                    </section>

                    {/* Cards de Produto */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Cards de Produto</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <BarbeariaCard variant="elevated" hover="lift" interactive>
                        <div className="space-y-4">
                            <div className="w-full h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                            <span className="text-white text-2xl">📱</span>
                            </div>
                            <div>
                            <h3 className="text-lg font-semibold">Smartphone Pro</h3>
                            <p className="text-sm opacity-70 mt-1">Último modelo com tecnologia avançada</p>
                            <div className="flex items-center justify-between mt-3">
                                <span className="text-xl font-bold">R$ 2.999</span>
                                <div className="flex items-center gap-1">
                                <Star size={16} className="text-yellow-500 fill-current" />
                                <span className="text-sm">4.8</span>
                                </div>
                            </div>
                            <BarbeariaButton fullWidth className="mt-3" leftIcon={<ShoppingCart size={16} />}>
                                Adicionar ao Carrinho
                            </BarbeariaButton>
                            </div>
                        </div>
                        </BarbeariaCard>

                        <BarbeariaCard variant="glass" hover="scale" interactive>
                        <div className="space-y-4">
                            <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                            <span className="text-white text-2xl">💻</span>
                            </div>
                            <div>
                            <h3 className="text-lg font-semibold">Laptop Ultra</h3>
                            <p className="text-sm opacity-70 mt-1">Performance excepcional para trabalho</p>
                            <div className="flex items-center justify-between mt-3">
                                <span className="text-xl font-bold">R$ 4.599</span>
                                <div className="flex items-center gap-1">
                                <Star size={16} className="text-yellow-500 fill-current" />
                                <span className="text-sm">4.9</span>
                                </div>
                            </div>
                            <BarbeariaButton fullWidth variant="outline" className="mt-3" leftIcon={<Heart size={16} />}>
                                Favoritar
                            </BarbeariaButton>
                            </div>
                        </div>
                        </BarbeariaCard>

                        <BarbeariaCard variant="gradient" hover="glow" interactive>
                        <div className="space-y-4">
                            <div className="w-full h-32 bg-white/20 rounded-lg flex items-center justify-center">
                            <span className="text-white text-2xl">🎧</span>
                            </div>
                            <div>
                            <h3 className="text-lg font-semibold text-white">Fones Premium</h3>
                            <p className="text-sm text-white/80 mt-1">Som de alta qualidade e conforto</p>
                            <div className="flex items-center justify-between mt-3">
                                <span className="text-xl font-bold text-white">R$ 899</span>
                                <div className="flex items-center gap-1">
                                <Star size={16} className="text-yellow-300 fill-current" />
                                <span className="text-sm text-white">4.7</span>
                                </div>
                            </div>
                            <BarbeariaButton
                                fullWidth
                                variant="outline"
                                className="mt-3 border-white text-white hover:bg-white hover:text-gray-900"
                            >
                                Ver Detalhes
                            </BarbeariaButton>
                            </div>
                        </div>
                        </BarbeariaCard>
                    </div>
                    </section>

                    {/* Card de Perfil */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Card de Perfil</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <BarbeariaCard variant="elevated" size="lg" hover="lift" orientation="horizontal">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="text-white" size={24} />
                            </div>
                            <div className="flex-1">
                            <h3 className="text-lg font-semibold">João Silva</h3>
                            <p className="text-sm opacity-70">Desenvolvedor Frontend</p>
                            <div className="flex items-center gap-4 mt-2 text-xs opacity-60">
                                <span className="flex items-center gap-1">
                                <MapPin size={12} />
                                São Paulo, SP
                                </span>
                                <span className="flex items-center gap-1">
                                <Calendar size={12} />
                                Desde 2020
                                </span>
                            </div>
                            </div>
                        </div>
                        </BarbeariaCard>

                        <BarbeariaCard variant="outline" size="lg" hover="scale">
                        <div className="text-center space-y-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto">
                            <User className="text-white" size={28} />
                            </div>
                            <div>
                            <h3 className="text-lg font-semibold">Maria Santos</h3>
                            <p className="text-sm opacity-70">Designer UX/UI</p>
                            </div>
                            <div className="flex justify-center gap-2">
                            <BarbeariaButton size="sm" variant="outline" iconOnly leftIcon={<Phone size={14} />} />
                            <BarbeariaButton size="sm" variant="outline" iconOnly leftIcon={<Mail size={14} />} />
                            <BarbeariaButton size="sm" iconOnly leftIcon={<Heart size={14} />} />
                            </div>
                        </div>
                        </BarbeariaCard>
                    </div>
                    </section>

                    {/* Layouts Especiais */}
                    <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Layouts Especiais</h2>
                    <div className="space-y-4">
                        <BarbeariaCard variant="glass" fullWidth hover="glow" size="lg">
                        <div className="text-center space-y-4">
                            <h2 className="text-2xl font-bold">Card de Largura Total</h2>
                            <p className="text-lg opacity-80">
                            Este card ocupa toda a largura disponível e tem um design especial.
                            </p>
                            <div className="flex justify-center gap-4">
                            <BarbeariaButton variant="primary">Ação Principal</BarbeariaButton>
                            <BarbeariaButton variant="outline">Ação Secundária</BarbeariaButton>
                            </div>
                        </div>
                        </BarbeariaCard>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <BarbeariaCard variant="filled" fullHeight hover="lift">
                            <div className="h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Card de Altura Total</h3>
                                <p className="text-sm opacity-80">Este card se adapta à altura do container.</p>
                            </div>
                            <BarbeariaButton fullWidth className="mt-4">
                                Ação
                            </BarbeariaButton>
                            </div>
                        </BarbeariaCard>

                        <BarbeariaCard variant="elevated" fullHeight hover="scale">
                            <div className="h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Outro Card</h3>
                                <p className="text-sm opacity-80">Com conteúdo diferente mas mesma altura.</p>
                                <p className="text-sm opacity-80 mt-2">Conteúdo adicional para demonstrar o alinhamento.</p>
                            </div>
                            <BarbeariaButton fullWidth variant="outline" className="mt-4">
                                Ação
                            </BarbeariaButton>
                            </div>
                        </BarbeariaCard>
                        </div>
                    </div>
                    </section>
                </div>
            </div>
            {/* Stepper */}
            <div className="p-8 space-y-12 bg-gray-50 min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-8">Barberia Stepper - Showcase</h1>

                    {/* Seletor de demo */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <button
                        onClick={() => setActiveDemo("default")}
                        className={`px-4 py-2 rounded-lg ${
                        activeDemo === "default" ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                        }`}
                    >
                        Padrão
                    </button>
                    <button
                        onClick={() => setActiveDemo("variants")}
                        className={`px-4 py-2 rounded-lg ${
                        activeDemo === "variants" ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                        }`}
                    >
                        Variantes
                    </button>
                    <button
                        onClick={() => setActiveDemo("sizes")}
                        className={`px-4 py-2 rounded-lg ${
                        activeDemo === "sizes" ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                        }`}
                    >
                        Tamanhos
                    </button>
                    <button
                        onClick={() => setActiveDemo("labels")}
                        className={`px-4 py-2 rounded-lg ${
                        activeDemo === "labels" ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                        }`}
                    >
                        Posição de Labels
                    </button>
                    <button
                        onClick={() => setActiveDemo("vertical")}
                        className={`px-4 py-2 rounded-lg ${
                        activeDemo === "vertical" ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                        }`}
                    >
                        Vertical
                    </button>
                    </div>

                    {/* Demo padrão */}
                    {activeDemo === "default" && (
                    <BarbeariaStepper title="AGENDAMENTO" subtitle={<Scissors size={16} />} showProgress showStepTitles>
                        <BarbeariaStep title="Serviço" icon={<Scissors />}>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Escolha o serviço</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {["Corte de Cabelo", "Barba", "Corte + Barba", "Tratamento Capilar"].map((service) => (
                                    <div
                                    key={service}
                                    className="border rounded-lg p-4 cursor-pointer hover:border-blue-500 hover:bg-blue-50"
                                    >
                                    {service}
                                    </div>
                                ))}
                                </div>
                            </div>
                        </BarbeariaStep>

                        <BarbeariaStep title="Data e Hora" icon={<Calendar />}>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Escolha a data e horário</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border rounded-lg p-4">
                                <p className="font-medium mb-2">Data</p>
                                <input type="date" className="w-full border rounded p-2" />
                            </div>
                            <div className="border rounded-lg p-4">
                                <p className="font-medium mb-2">Horário</p>
                                <div className="grid grid-cols-3 gap-2">
                                {["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"].map((time) => (
                                    <div
                                    key={time}
                                    className="border rounded p-2 text-center cursor-pointer hover:bg-blue-50 hover:border-blue-500"
                                    >
                                    {time}
                                    </div>
                                ))}
                                </div>
                            </div>
                            </div>
                        </div>
                        </BarbeariaStep>

                        <BarbeariaStep title="Dados Pessoais" icon={<User />}>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Informe seus dados</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Nome completo</label>
                                <input type="text" className="w-full border rounded p-2" placeholder="Seu nome" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Telefone</label>
                                <input type="tel" className="w-full border rounded p-2" placeholder="(00) 00000-0000" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input type="email" className="w-full border rounded p-2" placeholder="seu@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Observações</label>
                                <textarea className="w-full border rounded p-2" rows={2} placeholder="Alguma observação?" />
                            </div>
                            </div>
                        </div>
                        </BarbeariaStep>

                        <BarbeariaStep title="Confirmação" icon={<Check />}>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Confirme seu agendamento</h3>
                            <div className="border rounded-lg p-4 space-y-3">
                            <div className="flex items-start gap-3">
                                <Scissors className="mt-1 flex-shrink-0 text-blue-600" size={18} />
                                <div>
                                <p className="font-medium">Serviço</p>
                                <p className="text-gray-600">Corte + Barba</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Calendar className="mt-1 flex-shrink-0 text-blue-600" size={18} />
                                <div>
                                <p className="font-medium">Data e Hora</p>
                                <p className="text-gray-600">15/06/2023 às 10:00</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <User className="mt-1 flex-shrink-0 text-blue-600" size={18} />
                                <div>
                                <p className="font-medium">Cliente</p>
                                <p className="text-gray-600">João Silva</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="mt-1 flex-shrink-0 text-blue-600" size={18} />
                                <div>
                                <p className="font-medium">Local</p>
                                <p className="text-gray-600">Barbearia Central - Rua Principal, 123</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </BarbeariaStep>
                    </BarbeariaStepper>
                    )}

                    {/* Demo de variantes */}
                    {activeDemo === "variants" && (
                    <div className="space-y-8">
                        <div>
                        <h2 className="text-xl font-semibold mb-4">Variante: Default</h2>
                        <BarbeariaStepper variant="default" showStepTitles>
                            <BarbeariaStep title="Serviço">Conteúdo do passo 1</BarbeariaStep>
                            <BarbeariaStep title="Data">Conteúdo do passo 2</BarbeariaStep>
                            <BarbeariaStep title="Dados">Conteúdo do passo 3</BarbeariaStep>
                        </BarbeariaStepper>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-4">Variante: Numbered</h2>
                        <BarbeariaStepper variant="numbered" showStepTitles>
                            <BarbeariaStep title="Serviço">Conteúdo do passo 1</BarbeariaStep>
                            <BarbeariaStep title="Data">Conteúdo do passo 2</BarbeariaStep>
                            <BarbeariaStep title="Dados">Conteúdo do passo 3</BarbeariaStep>
                        </BarbeariaStepper>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-4">Variante: Icon</h2>
                        <BarbeariaStepper variant="icon" showStepTitles>
                            <BarbeariaStep title="Serviço" icon={<Scissors />}>
                            Conteúdo do passo 1
                            </BarbeariaStep>
                            <BarbeariaStep title="Data" icon={<Calendar />}>
                            Conteúdo do passo 2
                            </BarbeariaStep>
                            <BarbeariaStep title="Dados" icon={<User />}>
                            Conteúdo do passo 3
                            </BarbeariaStep>
                        </BarbeariaStepper>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-4">Variante: Minimal</h2>
                        <BarbeariaStepper variant="minimal" showStepTitles>
                            <BarbeariaStep title="Serviço">Conteúdo do passo 1</BarbeariaStep>
                            <BarbeariaStep title="Data">Conteúdo do passo 2</BarbeariaStep>
                            <BarbeariaStep title="Dados">Conteúdo do passo 3</BarbeariaStep>
                        </BarbeariaStepper>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-4">Variante: Dots</h2>
                        <BarbeariaStepper variant="dots" showStepTitles>
                            <BarbeariaStep title="Serviço">Conteúdo do passo 1</BarbeariaStep>
                            <BarbeariaStep title="Data">Conteúdo do passo 2</BarbeariaStep>
                            <BarbeariaStep title="Dados">Conteúdo do passo 3</BarbeariaStep>
                        </BarbeariaStepper>
                        </div>
                    </div>
                    )}

                    {/* Demo de tamanhos */}
                    {activeDemo === "sizes" && (
                    <div className="space-y-8">
                        <div>
                        <h2 className="text-xl font-semibold mb-4">Tamanho: Small</h2>
                        <BarbeariaStepper size="sm" showStepTitles>
                            <BarbeariaStep title="Passo 1">Conteúdo do passo 1</BarbeariaStep>
                            <BarbeariaStep title="Passo 2">Conteúdo do passo 2</BarbeariaStep>
                            <BarbeariaStep title="Passo 3">Conteúdo do passo 3</BarbeariaStep>
                        </BarbeariaStepper>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-4">Tamanho: Medium (Padrão)</h2>
                        <BarbeariaStepper size="md" showStepTitles>
                            <BarbeariaStep title="Passo 1">Conteúdo do passo 1</BarbeariaStep>
                            <BarbeariaStep title="Passo 2">Conteúdo do passo 2</BarbeariaStep>
                            <BarbeariaStep title="Passo 3">Conteúdo do passo 3</BarbeariaStep>
                        </BarbeariaStepper>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-4">Tamanho: Large</h2>
                        <BarbeariaStepper size="lg" showStepTitles>
                            <BarbeariaStep title="Passo 1">Conteúdo do passo 1</BarbeariaStep>
                            <BarbeariaStep title="Passo 2">Conteúdo do passo 2</BarbeariaStep>
                            <BarbeariaStep title="Passo 3">Conteúdo do passo 3</BarbeariaStep>
                        </BarbeariaStepper>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-4">Tamanho: Extra Large</h2>
                        <BarbeariaStepper size="xl" showStepTitles>
                            <BarbeariaStep title="Passo 1">Conteúdo do passo 1</BarbeariaStep>
                            <BarbeariaStep title="Passo 2">Conteúdo do passo 2</BarbeariaStep>
                            <BarbeariaStep title="Passo 3">Conteúdo do passo 3</BarbeariaStep>
                        </BarbeariaStepper>
                        </div>
                    </div>
                    )}

                    {/* Demo de posição de labels */}
                    {activeDemo === "labels" && (
                    <div className="space-y-8">
                        <div>
                        <h2 className="text-xl font-semibold mb-4">Labels: Top (Padrão)</h2>
                        <BarbeariaStepper labelPosition="top" showStepTitles>
                            <BarbeariaStep title="Serviço">Conteúdo do passo 1</BarbeariaStep>
                            <BarbeariaStep title="Data">Conteúdo do passo 2</BarbeariaStep>
                            <BarbeariaStep title="Dados">Conteúdo do passo 3</BarbeariaStep>
                        </BarbeariaStepper>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-4">Labels: Bottom</h2>
                        <BarbeariaStepper labelPosition="bottom" showStepTitles>
                            <BarbeariaStep title="Serviço">Conteúdo do passo 1</BarbeariaStep>
                            <BarbeariaStep title="Data">Conteúdo do passo 2</BarbeariaStep>
                            <BarbeariaStep title="Dados">Conteúdo do passo 3</BarbeariaStep>
                        </BarbeariaStepper>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-4">Labels: Left</h2>
                        <BarbeariaStepper labelPosition="left" showStepTitles>
                            <BarbeariaStep title="Serviço">Conteúdo do passo 1</BarbeariaStep>
                            <BarbeariaStep title="Data">Conteúdo do passo 2</BarbeariaStep>
                            <BarbeariaStep title="Dados">Conteúdo do passo 3</BarbeariaStep>
                        </BarbeariaStepper>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-4">Labels: Right</h2>
                        <BarbeariaStepper labelPosition="right" showStepTitles>
                            <BarbeariaStep title="Serviço">Conteúdo do passo 1</BarbeariaStep>
                            <BarbeariaStep title="Data">Conteúdo do passo 2</BarbeariaStep>
                            <BarbeariaStep title="Dados">Conteúdo do passo 3</BarbeariaStep>
                        </BarbeariaStepper>
                        </div>
                    </div>
                    )}

                    {/* Demo vertical */}
                    {activeDemo === "vertical" && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Orientação: Vertical</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <BarbeariaStepper
                            orientation="vertical"
                            showStepTitles
                            labelPosition="right"
                            variant="icon"
                            title="Processo de Agendamento"
                            showProgress
                        >
                            <BarbeariaStep title="Escolha o Serviço" icon={<Scissors />}>
                            <div className="p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">Selecione o serviço desejado</h3>
                                <p className="text-sm text-gray-600">Escolha entre corte de cabelo, barba ou ambos.</p>
                            </div>
                            </BarbeariaStep>
                            <BarbeariaStep title="Selecione a Data" icon={<Calendar />}>
                            <div className="p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">Escolha a data e horário</h3>
                                <p className="text-sm text-gray-600">Selecione um dia e horário disponível.</p>
                            </div>
                            </BarbeariaStep>
                            <BarbeariaStep title="Seus Dados" icon={<User />}>
                            <div className="p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">Informe seus dados</h3>
                                <p className="text-sm text-gray-600">Preencha com suas informações de contato.</p>
                            </div>
                            </BarbeariaStep>
                            <BarbeariaStep title="Pagamento" icon={<CreditCard />}>
                            <div className="p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">Escolha o método de pagamento</h3>
                                <p className="text-sm text-gray-600">Selecione como deseja pagar pelo serviço.</p>
                            </div>
                            </BarbeariaStep>
                            <BarbeariaStep title="Confirmação" icon={<Check />}>
                            <div className="p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">Confirme seu agendamento</h3>
                                <p className="text-sm text-gray-600">Revise e confirme todas as informações.</p>
                            </div>
                            </BarbeariaStep>
                        </BarbeariaStepper>

                        <BarbeariaStepper
                            orientation="vertical"
                            showStepTitles
                            labelPosition="right"
                            variant="minimal"
                            title="Timeline de Atendimento"
                        >
                            <BarbeariaStep title="Chegada">
                            <div className="p-4 border rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                <Clock size={16} className="text-blue-600" />
                                <span className="text-sm text-gray-500">10:00</span>
                                </div>
                                <h3 className="font-medium mb-1">Recepção e Café</h3>
                                <p className="text-sm text-gray-600">Seja recebido com uma bebida de sua escolha.</p>
                            </div>
                            </BarbeariaStep>
                            <BarbeariaStep title="Preparação">
                            <div className="p-4 border rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                <Clock size={16} className="text-blue-600" />
                                <span className="text-sm text-gray-500">10:10</span>
                                </div>
                                <h3 className="font-medium mb-1">Consulta de Estilo</h3>
                                <p className="text-sm text-gray-600">Conversa sobre o estilo desejado.</p>
                            </div>
                            </BarbeariaStep>
                            <BarbeariaStep title="Serviço">
                            <div className="p-4 border rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                <Clock size={16} className="text-blue-600" />
                                <span className="text-sm text-gray-500">10:20</span>
                                </div>
                                <h3 className="font-medium mb-1">Corte e Barba</h3>
                                <p className="text-sm text-gray-600">Realização do serviço principal.</p>
                            </div>
                            </BarbeariaStep>
                            <BarbeariaStep title="Finalização">
                            <div className="p-4 border rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                <Clock size={16} className="text-blue-600" />
                                <span className="text-sm text-gray-500">10:50</span>
                                </div>
                                <h3 className="font-medium mb-1">Produtos e Acabamento</h3>
                                <p className="text-sm text-gray-600">Aplicação de produtos finalizadores.</p>
                            </div>
                            </BarbeariaStep>
                        </BarbeariaStepper>
                        </div>
                    </div>
                    )}
                </div>
            </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário de Dados */}
          <BarbeariaCard variant="outline" size="lg" rounded="lg" bordered>
            <div className="p-6 space-y-6">
              <h2 className="text-xl font-semibold mb-4" style={{ color: theme.colors.text }}>
                Informações Pessoais
              </h2>

              <BarbeariaInput
                label="Nome Completo"
                placeholder="Digite seu nome completo"
                value={formData.nome}
                leftIcon={<User size={18} />}
                variant="filled"
                size="lg"
                rounded="lg"
                fullWidth
                required
                clearable
                maxLength={100}
                showCounter
                onChange={() => handleChange("nome")}
                onClear={() => handleChange("nome")}
                helperText="Nome que aparecerá no seu perfil"
              />

              <BarbeariaInput
                label="E-mail"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                leftIcon={<Mail size={18} />}
                variant="filled"
                size="lg"
                rounded="lg"
                fullWidth
                required
                clearable
                onChange={() => handleChange("email")}
                onClear={() => handleChange("email")}
                helperText="Usado para login e notificações"
              />

              <BarbeariaDropdown
                label="Categoria de Serviço"
                placeholder="Selecione uma categoria"
                value={formData.categoria}
                options={categorias}
                leftIcon={<Settings size={18} />}
                variant="filled"
                size="lg"
                rounded="lg"
                fullWidth
                required
                searchable
                clearable
                onChange={() => handleChange("categoria")}
                onClear={() => handleChange("categoria")}
                helperText="Categoria principal do seu serviço"
              />

              <BarbeariaDropdown
                label="Gênero Atendido"
                placeholder="Selecione o gênero"
                value={formData.genero}
                options={generos}
                variant="filled"
                size="lg"
                rounded="lg"
                fullWidth
                required
                onChange={() => handleChange("genero")}
                helperText="Público que você atende"
              />
            </div>
          </BarbeariaCard>

          {/* Configurações */}
          <BarbeariaCard variant="outline" size="lg" rounded="lg" bordered>
            <div className="p-6 space-y-6">
              <h2 className="text-xl font-semibold mb-4" style={{ color: theme.colors.text }}>
                Configurações
              </h2>

              <BarbeariaInputSwitch
                label="Notificações Push"
                checked={formData.notificacoes}
                onChange={() => handleChange("notificacoes")}
                size="lg"
                rounded="full"
                activeText="Ativado"
                inactiveText="Desativado"
                showLabels
                labelPosition="left"
                activeIcon={<Bell size={14} />}
                helperText="Receber notificações de novos agendamentos"
              />

              <BarbeariaInputSwitch
                label="Modo Escuro"
                checked={formData.modoEscuro}
                onChange={() => handleChange("modoEscuro")}
                size="lg"
                rounded="full"
                activeText="Escuro"
                inactiveText="Claro"
                showLabels
                labelPosition="left"
                activeColor="#1f2937"
                inactiveColor="#f3f4f6"
                helperText="Alternar entre tema claro e escuro"
              />

              <BarbeariaInputSwitch
                label="Salvamento Automático"
                checked={formData.autoSave}
                onChange={() => handleChange("autoSave")}
                size="md"
                rounded="lg"
                activeText="Auto"
                inactiveText="Manual"
                showLabels
                labelPosition="right"
                success={formData.autoSave ? "Salvamento automático ativado" : undefined}
                helperText="Salvar alterações automaticamente"
              />

              <BarbeariaInputSwitch
                label="Perfil Público"
                checked={formData.publicoPerfil}
                onChange={() => handleChange("publicoPerfil")}
                size="md"
                rounded="full"
                activeIcon={<Globe size={12} />}
                inactiveIcon={<Shield size={12} />}
                activeColor="#10b981"
                inactiveColor="#ef4444"
                error={formData.publicoPerfil ? undefined : "Perfil privado - não aparecerá nas buscas"}
                helperText="Permitir que outros usuários encontrem seu perfil"
              />
            </div>
          </BarbeariaCard>
        </div>

        {/* Preview dos Dados */}
        <BarbeariaCard variant="filled" size="lg" rounded="lg" hover="lift">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4" style={{ color: theme.colors.text }}>
              Preview dos Dados
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong style={{ color: theme.colors.text }}>Nome:</strong>
                <span style={{ color: theme.colors.textSecondary }}> {formData.nome || "Não informado"}</span>
              </div>
              <div>
                <strong style={{ color: theme.colors.text }}>E-mail:</strong>
                <span style={{ color: theme.colors.textSecondary }}> {formData.email || "Não informado"}</span>
              </div>
              <div>
                <strong style={{ color: theme.colors.text }}>Categoria:</strong>
                <span style={{ color: theme.colors.textSecondary }}>
                  {" "}
                  {categorias.find((c) => c.value === formData.categoria)?.label || "Não selecionada"}
                </span>
              </div>
              <div>
                <strong style={{ color: theme.colors.text }}>Gênero:</strong>
                <span style={{ color: theme.colors.textSecondary }}>
                  {" "}
                  {generos.find((g) => g.value === formData.genero)?.label || "Não selecionado"}
                </span>
              </div>
              <div>
                <strong style={{ color: theme.colors.text }}>Notificações:</strong>
                <span style={{ color: theme.colors.textSecondary }}>
                  {" "}
                  {formData.notificacoes ? "Ativadas" : "Desativadas"}
                </span>
              </div>
              <div>
                <strong style={{ color: theme.colors.text }}>Modo Escuro:</strong>
                <span style={{ color: theme.colors.textSecondary }}>
                  {" "}
                  {formData.modoEscuro ? "Ativado" : "Desativado"}
                </span>
              </div>
              <div>
                <strong style={{ color: theme.colors.text }}>Auto Save:</strong>
                <span style={{ color: theme.colors.textSecondary }}>
                  {" "}
                  {formData.autoSave ? "Ativado" : "Desativado"}
                </span>
              </div>
              <div>
                <strong style={{ color: theme.colors.text }}>Perfil Público:</strong>
                <span style={{ color: theme.colors.textSecondary }}> {formData.publicoPerfil ? "Sim" : "Não"}</span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <BarbeariaButton
                variant="primary"
                size="lg"
                rounded="lg"
                leftIcon={<Settings size={18} />}
                onClick={() => console.log("Salvando dados:", formData)}
              >
                Salvar Configurações
              </BarbeariaButton>

              <BarbeariaButton
                variant="outline"
                size="lg"
                rounded="lg"
                onClick={() =>
                  setFormData({
                    nome: "",
                    email: "",
                    categoria: "",
                    genero: "",
                    notificacoes: true,
                    modoEscuro: false,
                    autoSave: true,
                    publicoPerfil: false,
                  })
                }
              >
                Limpar Tudo
              </BarbeariaButton>
            </div>
          </div>
        </BarbeariaCard>
        </div>
    </div>
  );
}

export default Componentes;