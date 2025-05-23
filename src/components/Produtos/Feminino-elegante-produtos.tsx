"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "primereact/button"
import { PlusIcon, ShoppingCart, Flower } from "lucide-react"
import { Product } from "../../utils/interfaces"
import { useGlobalState } from "../../global/ContextGlobalState"
import { themes } from "../../theme/theme"
import Carousel from "../Fragments/Carousel"


const list = [
  {
    id: "1000",
    code: "p001",
    name: "Pomada Modeladora",
    description: "Pomada modeladora com fixação forte e acabamento matte para um visual moderno.",
    image: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=2787&auto=format&fit=crop",
    price: 45,
    category: "Styling",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
    discount: 10,
  },
  {
    id: "1001",
    code: "p002",
    name: "Óleo para Barba",
    description: "Óleo hidratante para barba que amacia os fios e proporciona brilho natural.",
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=2787&auto=format&fit=crop",
    price: 38,
    category: "Barba",
    quantity: 18,
    inventoryStatus: "INSTOCK",
    rating: 5,
    discount: 0,
  },
  {
    id: "1002",
    code: "p003",
    name: "Shampoo para Barba",
    description: "Shampoo especial para limpeza da barba, removendo impurezas sem ressecar.",
    image: "https://images.unsplash.com/photo-1589782431746-4a05f7d8c0f0?q=80&w=2787&auto=format&fit=crop",
    price: 32,
    category: "Barba",
    quantity: 15,
    inventoryStatus: "INSTOCK",
    rating: 4,
    discount: 5,
  },
  {
    id: "1003",
    code: "p004",
    name: "Balm Pós-Barba",
    description: "Balm calmante pós-barba que hidrata a pele e previne irritações.",
    image: "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?q=80&w=2787&auto=format&fit=crop",
    price: 29,
    category: "Barba",
    quantity: 20,
    inventoryStatus: "INSTOCK",
    rating: 4,
    discount: 0,
  },
  {
    id: "1004",
    code: "p005",
    name: "Cera para Cabelo",
    description: "Cera modeladora com fixação média e acabamento natural para todos os tipos de cabelo.",
    image: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=2787&auto=format&fit=crop",
    price: 42,
    category: "Styling",
    quantity: 12,
    inventoryStatus: "INSTOCK",
    rating: 5,
    discount: 15,
  },
  {
    id: "1005",
    code: "p006",
    name: "Kit Barba Completo",
    description: "Kit completo para cuidados com a barba, incluindo óleo, shampoo e pente.",
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=2787&auto=format&fit=crop",
    price: 89,
    category: "Kits",
    quantity: 8,
    inventoryStatus: "INSTOCK",
    rating: 5,
    discount: 20,
  },
]

export default function FemininoEleganteProdutos() {
  const [products, setProducts] = useState<Product[]>([])
  const { adicionarProdutoCarrinho } = useGlobalState()
  const theme = themes.femininoElegante

  const customItemsToShow = {
    default: 1,
    sm: 1,
    md: 2,
    lg: 3,
  }

  useEffect(() => {
    setProducts(list)
  }, [])

  const productTemplate = (product: Product) => {
    const hasDiscount = product.discount && product.discount > 0 ? true : false

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
            {product.discount}% OFF
          </div>
        )}

        {/* Imagem */}
        <div className="mb-4 rounded-lg overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-52 object-cover transition duration-300 ease-in-out hover:scale-105"
            style={{ borderRadius: theme.borderRadius.medium }}
          />
        </div>

        <div className="h-24">
          {/* Informações */}
          <h4
            className="text-lg font-semibold mb-1"
            style={{
              color: theme.colors.text,
              fontFamily: theme.fonts.heading,
            }}
          >
            {product.name}
          </h4>
          <p
            className="text-sm mb-2 line-clamp-2 italic"
            style={{
              color: theme.colors.textSecondary,
              fontFamily: theme.fonts.body,
            }}
          >
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            {hasDiscount && (
              <h6 className="text-sm line-through" style={{ color: theme.colors.textSecondary }}>
                R${product.price},00
              </h6>
            )}
            <h3
              className="text-xl font-semibold"
              style={{
                color: theme.colors.primary,
                fontFamily: theme.fonts.heading,
              }}
            >
              R$
              {hasDiscount ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price.toFixed(2)}
            </h3>
          </div>
        </div>

        {/* Botões */}
        <div className="mt-14 flex justify-between items-center">
          <Button
            icon={() => <PlusIcon size={18} className="mr-2" style={{ color: theme.colors.primary }} />}
            label="Ver mais"
            size="small"
            text
            className="border py-1 px-2 rounded-lg transition"
            style={{
              backgroundColor: `${theme.colors.primary}10`,
              color: theme.colors.primary,
              borderColor: theme.colors.primary,
              borderRadius: theme.borderRadius.medium,
            }}
          />
          <Button
            icon={() => <ShoppingCart size={18} className="text-white mr-2" />}
            label="Adicionar"
            size="small"
            className="border-none py-1 px-2 rounded-lg transition"
            style={{
              backgroundColor: theme.colors.primary,
              color: "white",
              borderRadius: theme.borderRadius.medium,
            }}
            onClick={() => adicionarProdutoCarrinho(product)}
          />
        </div>
      </motion.div>
    )
  }

  return (
    <div className="relative" style={{ backgroundColor: theme.colors.accent }}>
      {/* Elegant decorative elements */}
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

      <div className="flex flex-col items-center mb-8 py-8">
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
      </div>

      <Carousel
        items={products}
        renderItem={productTemplate}
        autoplay={true}
        interval={4000}
        itemsToShow={customItemsToShow}
        className="max-w-full md:max-w-2xl lg:max-w-3xl 2xl:max-w-7xl mx-auto"
        theme={theme}
      />

      <div className="flex flex-col items-center justify-center p-4 mt-8 pb-8">
        <motion.button
          className="px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 border"
          style={{
            backgroundColor: theme.colors.primary,
            color: "white",
            borderColor: theme.colors.primary,
            borderRadius: theme.borderRadius.medium,
            fontFamily: theme.fonts.heading,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Flower size={18} />
          VER TODOS OS PRODUTOS
        </motion.button>
      </div>
    </div>
  )
}
