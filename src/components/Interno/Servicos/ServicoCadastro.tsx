"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Scissors,
  Pencil,
  Save,
  X,
  Clock,
  DollarSign,
  Tag,
  FileText,
  ImageIcon,
  Plus,
  Trash2,
  CheckCircle,
  AlertCircle,
  User,
  Settings,
  Globe,
  Mars,
  Venus,
  VenusAndMars,
} from "lucide-react"
import { useTheme } from "../../../global/Theme-context"
import type { Servicos } from "../../../utils/interfaces"
import { BarbeariaInput, BarbeariaButton, BarbeariaCard } from "../../ui"
import { useCreateServico, useUpdateServico } from "../../../service/Query/servico/ServicoQuerys"
import BarbeariaDropdown from "../../ui/BarbeariaDropdown"

interface ServicoCadastroProps {
  detalhes?: Servicos | null
  onSave?: (servico: Servicos) => void
  onCancel?: () => void
  isOpen?: boolean
  onClose?: () => void
}

const ServicoCadastro = ({ detalhes = null, onSave, onCancel, isOpen = true, onClose }: ServicoCadastroProps) => {
  const { currentTheme: theme } = useTheme()
  const { mutateAsync: createServico, isPending: isCreating } = useCreateServico()
  const { mutateAsync: updateServico, isPending: isUpdating } = useUpdateServico()

  const [servico, setServico] = useState<Servicos>({
    organizacao_id: 1,
    nome: "",
    categoria: "",
    genero: "",
    descricao: "",
    duracaoEstimadaMinutos: 0,
    preco: 0,
    produtos: [],
    urlsImagens: [],
    ativo: true,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [newProduto, setNewProduto] = useState("")
  const [newImagem, setNewImagem] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

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
//   const categorias = ["CORTE", "COLORAÇÃO", "TRATAMENTO", "MANICURE", "PEDICURE", "BARBA", "SOBRANCELHA"]
    const generos = [
    { value: "masculino", label: "Masculino", icon: <Mars size={16}/> },
    { value: "feminino", label: "Feminino", icon: <Venus size={16}/>},
    { value: "unissex", label: "Unissex", icon: <VenusAndMars size={16}/>},
  ]

  const isLoading = isCreating || isUpdating
  const isEditMode = detalhes?.id

  useEffect(()=>{


    return(()=>{
        onCancel
        
    })
  }, [])

  useEffect(() => {
    if (detalhes) {
      setServico({
        ...detalhes,
        produtos: detalhes.produtos || [],
        urlsImagens: detalhes.urlsImagens || [],
      })
    }

    return(()=>{
        setServico({
            organizacao_id: 1,
            nome: "",
            categoria: "",
            genero: "",
            descricao: "",
            duracaoEstimadaMinutos: 0,
            preco: 0,
            produtos: [],
            urlsImagens: [],
            ativo: true,
        })
    })

  }, [detalhes])

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!servico.nome?.trim()) {
      newErrors.nome = "Nome é obrigatório"
    } else if (servico.nome.length < 2) {
      newErrors.nome = "Nome deve ter pelo menos 2 caracteres"
    }

    if (!servico.categoria?.trim()) {
      newErrors.categoria = "Categoria é obrigatória"
    }

    if (!servico.genero?.trim()) {
      newErrors.genero = "Gênero é obrigatório"
    }

    if (!servico.preco || servico.preco <= 0) {
      newErrors.preco = "Preço deve ser maior que zero"
    }

    if (!servico.duracaoEstimadaMinutos || servico.duracaoEstimadaMinutos <= 0) {
      newErrors.duracaoEstimadaMinutos = "Duração deve ser maior que zero"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSave = async () => {
    if (!validateForm()) return

    try {
    //   let savedServico: Servicos

      if (isEditMode) {
        await updateServico(servico)
        onClose
      } else {
        await createServico(servico)
        onClose
      }

      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
        onSave
      }, 1500)
    } catch (error) {
      console.error("Erro ao salvar serviço:", error)
    }
  }

  const handleAddProduto = () => {
    if (newProduto.trim() && !servico.produtos?.includes(newProduto.trim())) {
      setServico({
        ...servico,
        produtos: [...(servico.produtos || []), newProduto.trim()],
      })
      setNewProduto("")
    }
  }

  const handleRemoveProduto = (produto: string) => {
    setServico({
      ...servico,
      produtos: servico.produtos?.filter((p) => p !== produto) || [],
    })
  }

  const handleAddImagem = () => {
    if (newImagem.trim() && !servico.urlsImagens?.includes(newImagem.trim())) {
      setServico({
        ...servico,
        urlsImagens: [...(servico.urlsImagens || []), newImagem.trim()],
      })
      setNewImagem("")
    }
  }

  const handleRemoveImagem = (url: string) => {
    setServico({
      ...servico,
      urlsImagens: servico.urlsImagens?.filter((img) => img !== url) || [],
    })
  }

  const formatDuration = (minutes: number): string => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hours > 0 ? `${hours}h ${mins}min` : `${mins}min`
  }

  const clearErrors = (field: string) => {
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <motion.div
        // initial={{ scale: 0.95, y: 20 }}
        // animate={{ scale: 1, y: 0 }}
        // exit={{ scale: 0.95, y: 20 }}
        className="w-full max-w-4xl "
      >
        <BarbeariaCard
          variant="default"
          size="full"
          rounded="lg"
          elevation="none"
          fullWidth
          showLoadingOverlay={isLoading}
          className=""
          isHoverInteractive
        >
          {/* Header */}
          <div
            className="flex items-center justify-between p-2 border-b"
            style={{ borderColor: `${theme.colors.secondary}20` }}
          >
            <div className="flex items-center gap-4">
              <motion.div
                className="p-3 rounded-lg"
                style={{ backgroundColor: `${theme.colors.primary}15` }}
                whileHover={{ scale: 1.05 }}
              >
                <Scissors size={28} style={{ color: theme.colors.primary }} />
              </motion.div>
              <div>
                <h2
                  className="text-2xl font-bold"
                  style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
                >
                  {isEditMode ? "Editar Serviço" : "Novo Serviço"}
                </h2>
                <p className="text-sm mt-1" style={{ color: theme.colors.textSecondary }}>
                  {isEditMode ? "Atualize as informações do serviço" : "Cadastre um novo serviço para sua barbearia"}
                </p>
              </div>
            </div>
            <BarbeariaButton
              variant="ghost"
              size="sm"
              iconOnly
              leftIcon={<X size={20} />}
              onClick={onClose}
              rounded="full"
            />
          </div>

          {/* Success Message */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mx-6 mt-6"
              >
                <BarbeariaCard
                  variant="filled"
                  size="sm"
                  rounded="lg"
                  className="p-4"
                  style={{ backgroundColor: `${theme.colors.primary}10`, borderColor: theme.colors.primary }}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle size={20} style={{ color: theme.colors.primary }} />
                    <span style={{ color: theme.colors.text }}>
                      Serviço {isEditMode ? "atualizado" : "cadastrado"} com sucesso!
                    </span>
                  </div>
                </BarbeariaCard>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="md:p-4 py-4 space-y-8 overflow-y-auto max-h-[60vh] ">
            {/* Informações Básicas */}
            <BarbeariaCard isHoverInteractive variant="filled" size="lg" rounded="lg" bordered fullWidth>
              <div className="md:p-4 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Pencil size={20} style={{ color: theme.colors.primary }} />
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
                  >
                    Informações Básicas
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <BarbeariaInput
                    label="Nome do Serviço"
                    placeholder="Ex: Corte Masculino Tradicional"
                    value={servico.nome || ""}
                    leftIcon={<Scissors size={18} />}
                    variant="filled"
                    size="lg"
                    rounded="lg"
                    fullWidth
                    required
                    error={errors.nome}
                    helperText={errors.nome || "Nome que aparecerá para os clientes"}
                    maxLength={100}
                    showCounter
                    clearable
                    onChange={(e) => {
                      setServico({ ...servico, nome: e.target.value })
                      clearErrors("nome")
                    }}
                    onClear={() => setServico({ ...servico, nome: "" })}
                  />

                  <div className="space-y-2">
                    {/* <label className="block text-sm font-medium" style={{ color: theme.colors.text }}>
                      Categoria *
                    </label> */}

                    <BarbeariaDropdown
                        label="Categoria de Serviço"
                        placeholder="Selecione uma categoria"
                        value={servico.categoria}
                        options={categorias}
                        leftIcon={<Settings size={18} />}
                        variant="filled"
                        size="lg"
                        rounded="lg"
                        fullWidth
                        // multiple
                        searchable
                        searchPlaceholder="Filtrar"
                        required
                        clearable
                        error={errors.categoria}
                        onChange={(e) => {
                            console.log(e)
                            setServico({ ...servico, categoria: e })
                            clearErrors("categoria")
                        }}
                        onClear={() => {
                            setServico({ ...servico, categoria: null })
                            clearErrors("categoria")
                        }}
                        helperText="Categoria principal do seu serviço"
                    />


                    {/* <select
                      value={servico.categoria || ""}
                      onChange={(e) => {
                        setServico({ ...servico, categoria: e.target.value })
                        clearErrors("categoria")
                      }}
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: theme.colors.cardBackground,
                        borderColor: errors.categoria ? "#ef4444" : `${theme.colors.secondary}40`,
                        color: theme.colors.text,
                        fontFamily: theme.fonts.body,
                      }}
                    >
                      <option value="">Selecione uma categoria</option>
                      {categorias.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select> */}
                    {/* {errors.categoria && (
                      <p className="text-sm flex items-center gap-1" style={{ color: "#ef4444" }}>
                        <AlertCircle size={14} />
                        {errors.categoria}
                      </p>
                    )} */}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    {/* <label className="block text-sm font-medium" style={{ color: theme.colors.text }}>
                      Gênero *
                    </label> */}

                    <BarbeariaDropdown
                        label="Gênero"
                        placeholder="Selecione o gênero"
                        value={servico.genero}
                        options={generos}
                        variant="filled"
                        error={errors.genero}
                        size="lg"
                        rounded="lg"
                        fullWidth
                        required
                        onChange={(e) => { 
                            setServico({ ...servico, genero: e })
                            clearErrors("categoria")
                        }}
                        helperText="Público alvo do servico"
                    />
                    {/* <select
                      value={servico.genero || ""}
                      onChange={(e) => {
                        setServico({ ...servico, genero: e.target.value })
                        clearErrors("genero")
                      }}
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: theme.colors.cardBackground,
                        borderColor: errors.genero ? "#ef4444" : `${theme.colors.secondary}40`,
                        color: theme.colors.text,
                        fontFamily: theme.fonts.body,
                      }}
                    >
                      <option value="">Selecione o gênero</option>
                      {generos.map((gen) => (
                        <option key={gen} value={gen}>
                          {gen}
                        </option>
                      ))}
                    </select> */}
                    {/* {errors.genero && (
                      <p className="text-sm flex items-center gap-1" style={{ color: "#ef4444" }}>
                        <AlertCircle size={14} />
                        {errors.genero}
                      </p>
                    )} */}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium" style={{ color: theme.colors.text }}>
                      Status
                    </label>
                    <div className="flex items-center gap-2">
                      <BarbeariaButton
                        variant={servico.ativo ? "primary" : "outline"}
                        size="md"
                        rounded="lg"
                        leftIcon={<CheckCircle size={16} />}
                        onClick={() => setServico({ ...servico, ativo: true })}
                        fullWidth
                        
                      >
                        Ativo
                      </BarbeariaButton>
                      <BarbeariaButton
                        variant={!servico.ativo ? "secondary" : "outline"}
                        size="md"
                        rounded="lg"
                        leftIcon={<X size={16} />}
                        onClick={() => setServico({ ...servico, ativo: false })}
                        fullWidth
                      >
                        Inativo
                      </BarbeariaButton>
                    </div>
                  </div>
                </div>

                <BarbeariaInput
                  label="Descrição"
                  placeholder="Descreva detalhadamente o serviço oferecido..."
                  value={servico.descricao || ""}
                  leftIcon={<FileText size={18} />}
                  variant="filled"
                  size="lg"
                  rounded="lg"
                  fullWidth
                  maxLength={500}
                  showCounter
                  clearable
                  onChange={(e) => setServico({ ...servico, descricao: e.target.value })}
                  onClear={() => setServico({ ...servico, descricao: "" })}
                  helperText="Descrição que ajudará os clientes a entender o serviço"
                />
              </div>
            </BarbeariaCard>

            {/* Preço e Duração */}
            <BarbeariaCard isHoverInteractive variant="filled" size="lg" rounded="lg" bordered fullWidth>
              <div className="md:p-4 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign size={20} style={{ color: theme.colors.primary }} />
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
                  >
                    Preço e Duração
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <BarbeariaInput
                    label="Preço (R$)"
                    type="number"
                    placeholder="0,00"
                    value={servico.preco?.toString() || ""}
                    leftIcon={<DollarSign size={18} />}
                    variant="filled"
                    size="lg"
                    rounded="lg"
                    fullWidth
                    required
                    error={errors.preco}
                    helperText={errors.preco || "Valor cobrado pelo serviço"}
                    step="0.01"
                    min="0"
                    onChange={(e) => {
                      setServico({ ...servico, preco: Number.parseFloat(e.target.value) || 0 })
                      clearErrors("preco")
                    }}
                  />

                  <BarbeariaInput
                    label="Duração (minutos)"
                    type="number"
                    placeholder="60"
                    value={servico.duracaoEstimadaMinutos?.toString() || ""}
                    leftIcon={<Clock size={18} />}
                    variant="filled"
                    size="lg"
                    rounded="lg"
                    fullWidth
                    required
                    error={errors.duracaoEstimadaMinutos}
                    helperText={
                      errors.duracaoEstimadaMinutos ||
                      (servico.duracaoEstimadaMinutos
                        ? `Equivale a ${formatDuration(servico.duracaoEstimadaMinutos)}`
                        : "Tempo estimado do serviço")
                    }
                    min="1"
                    max="480"
                    onChange={(e) => {
                      setServico({ ...servico, duracaoEstimadaMinutos: Number.parseInt(e.target.value) || 0 })
                      clearErrors("duracaoEstimadaMinutos")
                    }}
                  />
                </div>
              </div>
            </BarbeariaCard>

            {/* Produtos */}
            <BarbeariaCard isHoverInteractive variant="filled" size="lg" rounded="lg" bordered fullWidth>
              <div className="md:p-4 space-y-6     ">
                <div className="flex items-center gap-3 mb-4">
                  <Tag size={20} style={{ color: theme.colors.primary }} />
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
                  >
                    Produtos Utilizados
                  </h3>
                </div>

                <div className="flex flex-wrap space-y-6 justify-center">
                  <BarbeariaInput
                    placeholder="Nome do produto..."
                    value={newProduto}
                    leftIcon={<Tag size={18} />}
                    variant="filled"
                    size="lg"
                    rounded="lg"
                    fullWidth
                    clearable
                    onChange={(e) => setNewProduto(e.target.value)}
                    onClear={() => setNewProduto("")}
                    onKeyPress={(e) => e.key === "Enter" && handleAddProduto()}
                    helperText="Pressione Enter para adicionar"
                  />
                  <BarbeariaButton
                    variant="primary"
                    size="sm"
                    rounded="lg"
                    // fullWidth
                    leftIcon={<Plus size={18} />}
                    onClick={handleAddProduto}
                    disabled={!newProduto.trim()}
                  >
                    Adicionar
                  </BarbeariaButton>
                </div>

                {servico.produtos && servico.produtos.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {servico.produtos.map((produto, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      >
                        <BarbeariaCard
                          variant="filled"
                          size="sm"
                          rounded="lg"
                          interactive
                        //   isHoverInteractive
                          className="pl-4 pr-2 py-2"
                          style={{ backgroundColor: `${theme.colors.primary}13` }}
                        >
                          <div className="flex items-center gap-2">
                            <span style={{ color: theme.colors.text }}>{produto}</span>
                            <BarbeariaButton
                              variant="ghost"
                              size="xs"
                              iconOnly
                              leftIcon={<X size={12} />}
                              rounded="full"
                              onClick={() => handleRemoveProduto(produto)}
                            />
                          </div>
                        </BarbeariaCard>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </BarbeariaCard>

            {/* Imagens */}
            <BarbeariaCard isHoverInteractive variant="filled" size="lg" rounded="lg" bordered fullWidth>
              <div className="md:p-4  space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <ImageIcon size={20} style={{ color: theme.colors.primary }} />
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: theme.colors.text, fontFamily: theme.fonts.heading }}
                  >
                    Imagens do Serviço
                  </h3>
                </div>

                <div className="flex flex-wrap justify-center space-y-6">
                  <BarbeariaInput
                    placeholder="URL da imagem..."
                    value={newImagem}
                    leftIcon={<ImageIcon size={18} />}
                    variant="filled"
                    size="lg"
                    rounded="lg"
                    fullWidth
                    // clearable
                    onChange={(e) => setNewImagem(e.target.value)}
                    onClear={() => setNewImagem("")}
                    onKeyPress={(e) => e.key === "Enter" && handleAddImagem()}
                    helperText="Cole a URL da imagem do serviço"
                  />
                  <BarbeariaButton
                    variant="primary"
                    size="sm"
                    rounded="lg"
                    leftIcon={<Plus size={18} />}
                    onClick={handleAddImagem}
                    disabled={!newImagem.trim()}
                    // fullWidth
                  >
                    Adicionar
                  </BarbeariaButton>
                </div>

                {servico.urlsImagens && servico.urlsImagens.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {servico.urlsImagens.map((url, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      >
                        <BarbeariaCard
                          variant="outline"
                          size="sm"
                          rounded="lg"
                          hover="lift"
                          interactive
                          className="relative group overflow-hidden"
                        >
                          <img
                            src={url || "/placeholder.svg"}
                            alt={`Imagem ${index + 1}`}
                            className="w-full h-24 object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                            <BarbeariaButton
                              variant="error"
                              size="sm"
                              iconOnly
                              leftIcon={<Trash2 size={16} />}
                              rounded="full"
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                              onClick={() => handleRemoveImagem(url)}
                            />
                          </div>
                        </BarbeariaCard>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </BarbeariaCard>
          </div>

          {/* Footer */}
          <div
            className="flex justify-between gap-3 p-4 border-t"
            style={{ borderColor: `${theme.colors.secondary}20` }}
          >
            <BarbeariaButton
              variant="outline"
              size="md"
              rounded="lg"
              leftIcon={<X size={18} />}
              onClick={onCancel}
              disabled={isLoading}
            //   fullWidth
            //   className="sm:w-auto"
            >
              Cancelar
            </BarbeariaButton>
            <BarbeariaButton
              variant="primary"
              size="md"
              rounded="lg"
              leftIcon={<Save size={18} />}
              onClick={handleSave}
              isLoading={isLoading}
              disabled={isLoading}
            //   fullWidth
            //   className="sm:flex-1"
            >
              {isEditMode ? "Atualizar Serviço" : "Cadastrar Serviço"}
            </BarbeariaButton>
          </div>
        </BarbeariaCard>
      </motion.div>
    </motion.div>
  )
}

export default ServicoCadastro
