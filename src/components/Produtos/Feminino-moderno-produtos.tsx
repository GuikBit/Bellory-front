"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Eye, ShoppingCart, Sparkles, Star } from "lucide-react"
import { Produto } from "../../utils/interfaces"
import { useGlobalState } from "../../global/ContextGlobalState"
import { themes } from "../../theme/theme"
import Carousel from "../Fragments/Carousel"
import { BarbeariaButton } from "../ui"
import { useNavigate } from "react-router"
const list = [
  {
    id: "1",
    nome: "Máscara Neon Glow",
    preco: 75.9,
    precoOriginal: 89.9,
    descricao: "Máscara com efeito neon que revitaliza e ilumina os cabelos instantaneamente.",
    imagem: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400",
    categoria: "Tratamentos",
    genero: "Feminino",
    marca: "Neon Beauty",
    avaliacao: 4.9,
    desconto: 16,
    emEstoque: true,
    destaque: true,
    trending: true,
    produtosUtilizados: ["Proteínas Fluorescentes", "Ácidos Frutais", "Vitamina B12", "Colágeno Vegetal"],
  },
  {
    id: "2",
    nome: "Esmalte Holográfico",
    preco: 35.5,
    descricao: "Esmalte com efeito holográfico que muda de cor conforme a luz.",
    imagem: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400",
    categoria: "Unhas",
    genero: "Feminino",
    marca: "Holo Nails",
    avaliacao: 4.8,
    emEstoque: true,
    novo: true,
    produtosUtilizados: ["Pigmentos Holográficos", "Base Magnética", "Top Coat 3D"],
  },
  {
    id: "3",
    nome: "Shampoo Color Blast",
    preco: 52.9,
    descricao: "Shampoo que deposita cor temporária enquanto limpa os cabelos.",
    imagem: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400",
    categoria: "Cabelo",
    genero: "Feminino",
    marca: "Color Revolution",
    avaliacao: 4.7,
    emEstoque: true,
    trending: true,
    produtosUtilizados: ["Pigmentos Temporários", "Extratos Naturais", "Proteínas Vegetais"],
  },
  {
    id: "4",
    nome: "Sérum Anti-Gravity",
    preco: 95.0,
    descricao: "Sérum facial com tecnologia anti-gravidade para lifting instantâneo.",
    imagem: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=400",
    categoria: "Skincare",
    genero: "Feminino",
    marca: "Future Skin",
    avaliacao: 5.0,
    emEstoque: false,
    produtosUtilizados: ["Peptídeos Tensores", "Ácido Hialurônico", "Nanopartículas", "Vitamina C"],
  },
  {
    id: "5",
    nome: "Kit Nail Art Futurista",
    preco: 129.9,
    precoOriginal: 180.0,
    descricao: "Kit completo para nail art com produtos inovadores e ferramentas tech.",
    imagem: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400",
    categoria: "Kits",
    genero: "Feminino",
    marca: "Tech Nails",
    avaliacao: 4.9,
    desconto: 28,
    emEstoque: true,
    destaque: true,
    trending: true,
    produtosUtilizados: ["Gel UV", "Glitters Holográficos", "Adesivos 3D", "LED Pen", "Base Magnética"],
  },
  {
    id: "6",
    nome: "Spray Texturizador Neon",
    preco: 48.9,
    descricao: "Spray que cria texturas incríveis e brilho neon nos cabelos.",
    imagem: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400",
    categoria: "Styling",
    genero: "Feminino",
    marca: "Texture Lab",
    avaliacao: 4.6,
    emEstoque: true,
    produtosUtilizados: ["Polímeros Texturizantes", "Pigmentos Neon", "Óleos Essenciais"],
  },
]

export default function FemininoModernoProdutos() {
  const [products, setProducts] = useState<Produto[]>([])
  const { adicionarProdutoCarrinho } = useGlobalState()
  const theme = themes.femininoModerno
  const navigate = useNavigate();

  const customItemsToShow = {
    default: 1,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
  }

  useEffect(() => {
    setProducts(list)
  }, [])

  const productTemplate = (produto: Produto) => {
    const hasDiscount = produto.desconto && produto.desconto > 0 ? true : false

    return (
      <motion.div
        className="rounded-lg shadow-lg m-2 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${theme.colors.cardBackground}, ${theme.colors.accent}20)`,
          borderRadius: theme.borderRadius.large,
          boxShadow: theme.colors.background,
        }}
        whileHover={{ y: -5, transition: { duration: 0.3 } }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Tag de Promoção */}
        {hasDiscount && (
          <div
            className="absolute top-4 right-0 text-white text-xs font-semibold px-3 py-1 shadow-md z-10"
            style={{
              backgroundColor: "white",
              color: theme.colors.primary,
              fontFamily: theme.fonts.heading,
            }}
          >
            {produto.desconto}% OFF
          </div>
        )}

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {produto.novo && (
            <span
              className="text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg animate-pulse"
              style={{
                backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`,
              }}
            >
              Novo
            </span>
          )}
        </div>

        {/* Imagem */}
        <div className="relative">
          <img
            src={produto.imagem || "/placeholder.svg"}
            alt={produto.nome}
            className="w-full h-52 object-cover transition duration-300 ease-in-out hover:scale-105"
            // style={{ borderRadius: theme.borderRadius.large }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to top, ${theme.colors.primary}30, transparent)`, // 66 = ~40% de opacidade
            }}
          ></div>
        </div>

        <div className="h-34 p-4">
          {/* Informações */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs text-purple-400 font-bold">{produto.marca}</span>
            <Sparkles size={10} className="text-pink-400" />
            <span className="text-xs text-pink-400">{produto.categoria}</span>
          </div>
          <h3
            className="text-lg font-bold mb-1"
            style={{
              color: theme.colors.text,
              fontFamily: theme.fonts.heading,
            }}
          >
            {produto.nome}
          </h3>
          <p
            className="text-sm mb-2 line-clamp-2"
            style={{
              color: theme.colors.textSecondary,
              fontFamily: theme.fonts.body,
            }}
          >
            {produto.descricao}
          </p>
          <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.floor(produto.avaliacao) ? ` fill-current` : ""}
              style={{ color: theme.colors.primary, transition: "color 0.3s" }}
            />
          ))}
          <span className="text-sm ml-2 font-bold" style={{color: theme.colors.primary}}>({produto.avaliacao})</span>
        </div>
          <div className="flex items-center justify-between">
            {hasDiscount && (
              <h6
                className="text-sm line-through"
                style={{ color: theme.colors.textSecondary }}
              >
                R${produto.preco},00
              </h6>
            )}
            <h3
              className="text-xl font-bold"
              style={{
                color: theme.colors.primary,
                fontFamily: theme.fonts.heading,
              }}
            >
              R$
              {hasDiscount ? (produto.preco * (1 - (produto.desconto ?? 0) / 100)).toFixed(2) : produto.preco.toFixed(2)}
            </h3>
          </div>
        </div>

        {/* Botões */}
        <div className="mt-14 p-4 flex justify-between items-center">
          {/* <Button
            icon={() => (
              <PlusIcon size={18} className="mr-2" style={{ color: hasDiscount ? "white" : theme.colors.primary }} />
            )}
            label="Ver mais"
            size="small"
            text
            className="border-none py-1 px-2 rounded-lg transition"
            style={{
              background: hasDiscount
                ? "rgba(255,255,255,0.2)"
                : `linear-gradient(135deg, ${theme.colors.primary}10, ${theme.colors.secondary}10)`,
              color: hasDiscount ? "white" : theme.colors.primary,
              borderRadius: theme.borderRadius.large,
            }}
          /> */}
          <BarbeariaButton 
            leftIcon={ <Eye size={18} className="mr-2" style={{ color: theme.colors.primary }} />}
            value="Detalhes"
            variant="text"
            className="border-none py-1 px-2 rounded-lg transition cursor-pointer"
            style={{
              color: theme.colors.primary,
              // border: `1px solid ${theme.colors.primary}`,
              borderRadius: theme.borderRadius.large
            }}
            onClick={() => adicionarProdutoCarrinho(produto)}
          />
          {/* <Button
            icon={() => <ShoppingCart size={18} className="text-white mr-2" />}
            label="Adicionar"
            size="small"
            className="border-none py-1 px-2 rounded-lg transition"
            style={{
              backgroundColor: hasDiscount ? "white" : theme.colors.primary,
              color: hasDiscount ? theme.colors.primary : "white",
              borderRadius: theme.borderRadius.large,
            }}
            onClick={() => adicionarProdutoCarrinho(produto)}
          /> */}
          <BarbeariaButton 
            leftIcon={ <ShoppingCart size={18} color='white' />}
            value="Adicionar"
            className="border-none py-1 px-2 rounded-lg transition cursor-pointer"
            style={{
              background: theme.colors.backgroundLinear,
              color: 'white',
              borderRadius: theme.borderRadius.large
            }}
            onClick={() => adicionarProdutoCarrinho(produto)}
          />
        </div>
      </motion.div>
    )
  }

  return (
    <div className="relative">
      {/* Modern decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="75" cy="25" r="25" fill={theme.colors.primary} />
            <circle cx="25" cy="75" r="25" fill={theme.colors.secondary} />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100C0 44.7715 44.7715 0 100 0V100H0Z" fill={theme.colors.accent} />
          </svg>
        </div>
      </div>

      <div className="flex flex-col items-center mb-8">
        <h3
          className="text-3xl font-bold mb-3"
          style={{
            color: theme.colors.text,
            fontFamily: theme.fonts.heading,
          }}
        >
          Produtos
        </h3>
        <div className="flex items-center gap-3">
          <div className="h-0.5 w-12" style={{ backgroundColor: theme.colors.primary }}></div>
          <Sparkles size={18} style={{ color: theme.colors.primary }} />
          <div className="h-0.5 w-12" style={{ backgroundColor: theme.colors.primary }}></div>
        </div>
      </div>

      <Carousel
        items={products}
        renderItem={productTemplate}
        autoplay={true}
        interval={4000}
        itemsToShow={customItemsToShow}
        className="max-w-full md:max-w-4xl lg:max-w-6xl 2xl:max-w-7xl mx-auto"
        theme={theme}
      />

      <div className="flex flex-col items-center justify-center p-4 mt-8">
        <motion.button
          className="px-6 py-3 rounded-lg cursor-pointer font-medium transition-all duration-300 flex items-center gap-2"
          style={{
            background: theme.colors.backgroundLinear,
            color: "white",
            borderRadius: theme.borderRadius.large,
            fontFamily: theme.fonts.heading,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {navigate('/produtos')}}
        >
          <Sparkles size={18} />
          VER TODOS OS PRODUTOS
        </motion.button>
      </div>
    </div>
  )
}
