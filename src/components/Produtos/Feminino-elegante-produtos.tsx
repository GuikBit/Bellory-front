"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "primereact/button"
import { PlusIcon, ShoppingCart, Flower, ArrowRight, Heart, Star } from "lucide-react"
import { Product, Produto } from "../../utils/interfaces"
import { useGlobalState } from "../../global/ContextGlobalState"
import { themes } from "../../theme/theme"
import Carousel from "../Fragments/Carousel"
import EleganteSubTitle from "../Fragments/Feminino/EleganteSubTitleIcon"
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

export default function FemininoEleganteProdutos() {
  const [products, setProducts] = useState<Produto[]>([])
  const { adicionarProdutoCarrinho } = useGlobalState()
  const theme = themes.femininoElegante
  const navigate = useNavigate();
  const customItemsToShow = {
    default: 1,
    sm: 1,
    md: 2,
    lg: 3,
  }

  useEffect(() => {
    setProducts(list)
  }, [])

  const productTemplate = (product: Produto) => {
    const hasDiscount = product.desconto && product.desconto > 0 ? true : false
    
    return (
      <motion.div
        className="rounded-lg shadow-lg p-4 m-2 relative overflow-hidden border"
        style={{
          backgroundColor: theme.colors.cardBackground,
          borderColor: theme.colors.primary,
          borderRadius: theme.borderRadius.large,
          boxShadow: hasDiscount
            ? `0 15px 30px -10px ${theme.colors.primary}30`
            : `0 15px 30px -10px rgba(176, 141, 154, 0.15)`,
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
              backgroundColor: theme.colors.primary,
              fontFamily: theme.fonts.heading,
            }}
          >
            {product.desconto}% OFF
          </div>
        )}

        {/* Imagem */}
        <div className="mb-4 rounded-lg overflow-hidden">
          <img
            src={product.imagem || "/placeholder.svg"}
            alt={product.nome}
            className="w-full h-52 object-cover transition border duration-300 ease-in-out hover:scale-105"
            style={{ borderRadius: theme.borderRadius.medium,borderColor: theme.colors.secondary }}
          />
        </div>



        <div className="h-55 flex flex-col justify-between">
          {/* Informações */}

          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium" style={{color: theme.colors.textSecondary}}>{product.marca}</span>
            <Heart size={10} className=""style={{color: theme.colors.info}} />
            <span className="text-xs " style={{color: theme.colors.inputFocus}}>{product.categoria}</span>
          </div>

          <h4
            className="text-lg font-semibold mb-1"
            style={{
              color: theme.colors.text,
              fontFamily: theme.fonts.heading,
            }}
          >
            {product.nome}
          </h4>

          <p
            className="text-sm mb-2 line-clamp-2 italic"
            style={{
              color: theme.colors.textSecondary,
              fontFamily: theme.fonts.body,
            }}
          >
            {product.descricao}
          </p>

          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.avaliacao) ? "fill-current" : ""}
                style={{
                  color: i < Math.floor(product.avaliacao) ? theme.colors.primary : theme.colors.textSecondary,
                }}
              />
            ))}
            <span className="text-sm ml-2 font-medium" style={{color: theme.colors.primary}}>({product.avaliacao})</span>
          </div>

          <div className="flex items-center justify-between mb-5">
            <div>
              {product.precoOriginal && (
                <span className="text-sm line-through mr-2" style={{ color: theme.colors.error, fontFamily: theme.fonts.heading }} >R$ { product.precoOriginal.toFixed(2) }</span>
              )}
              <span className="text-xl font-semibold" style={{ color: theme.colors.text,  fontFamily: theme.fonts.heading }}>R$ {product.preco.toFixed(2)}</span>
            </div>
          </div>          
        </div>

        {/* Botões */}
        <div className=" flex justify-between items-center">

          <BarbeariaButton variant="outline" onClick={()=>{navigate('/produtos/1')}} leftIcon={<PlusIcon size={16}/>} rounded="full" size="sm">Detalhes</BarbeariaButton>

          <BarbeariaButton variant="primary" onClick={() => adicionarProdutoCarrinho(product)} leftIcon={<ShoppingCart size={16}/>} rounded="full" size="sm">Adicionar</BarbeariaButton>

        </div>
      </motion.div>
    )
  }

  return (
    <div className="relative py-20 "  style={{ backgroundColor: theme.colors.accent }}>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0ZM50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10Z"
              fill={theme.colors.primary}
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L100 0L50 100L0 0Z" fill={theme.colors.primary} />
          </svg>
        </div>
      </div>

      {/* <div className="flex flex-col items-center mb-8 py-8">
        <h2
          className="text-3xl font-normal mb-3"
          style={{
            color: theme.colors.text,
            fontFamily: theme.fonts.heading,
          }}
        >
          Produtos
        </h2>
        <div className="flex items-center gap-3">
          <div className="h-px w-12" style={{ backgroundColor: theme.colors.primary }}></div>
          <Flower size={18} style={{ color: theme.colors.primary }} />
          <div className="h-px w-12" style={{ backgroundColor: theme.colors.primary }}></div>
        </div>
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <EleganteSubTitle title="Nossos produtos" />
        

          <motion.p
            className="text-lg mb-6 leading-relaxed italic"
            style={{
              color: theme.colors.textSecondary,
              fontFamily: theme.fonts.body,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Assine um de nossos planos e tenha acesso a benefícios exclusivos, economize em serviços e eleve sua
            experiência de beleza e bem-estar.
          </motion.p>

        </motion.div>

        <Carousel
          items={products}
          renderItem={productTemplate}
          autoplay={true}
          interval={4000}
          itemsToShow={customItemsToShow}
          className="max-w-full md:max-w-2xl lg:max-w-3xl 2xl:max-w-7xl mx-auto"
          theme={theme}
        />

        <div className="mt-16 text-center">
          <BarbeariaButton variant="primary" size="xl" rounded="full" rightIcon={<ArrowRight />}>
            Ver todos os produtos
          </BarbeariaButton>
        </div>
        
      </div>
    </div>
  )
}
