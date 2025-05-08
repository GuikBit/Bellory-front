"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "primereact/button"
import Carousel from "./Fragments/Carousel"
import { PlusIcon, ShoppingCart, Scissors } from "lucide-react"
import type { Product } from "../utils/interfaces"
import { useGlobalState } from "../global/ContextGlobalState"

// Produtos atualizados com imagens e descrições mais adequadas para barbearia
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

export default function Produtos() {
  const [products, setProducts] = useState<Product[]>([])
  const { adicionarProdutoCarrinho } = useGlobalState()

  const customItemsToShow = {
    default: 1, // 1 item em telas extra pequenas (mobile)
    sm: 1, // 1 item em telas pequenas (>= 640px)
    md: 2, // 2 itens em telas médias (>= 768px)
    lg: 3, // 3 itens em telas grandes (>= 1024px)
  }

  useEffect(() => {
    setProducts(list)
  }, [])

  const productTemplate = (product: Product) => {
    const hasDiscount = product.discount && product.discount > 0 ? true : false

    return (
      <motion.div
        className="bg-neutral-800 dark:bg-neutral-800 text-white rounded-lg shadow-lg p-4 m-2 relative overflow-hidden"
        whileHover={{ y: -5, transition: { duration: 0.3 } }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Tag de Promoção */}
        {hasDiscount && (
          <div className="absolute top-4 right-0 bg-amber-600 text-white text-xs font-semibold px-3 py-1 shadow-md z-10">
            {product.discount}% OFF
          </div>
        )}

        {/* Imagem */}
        <div className="mb-4 rounded-lg overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-52 object-cover transition duration-300 ease-in-out hover:scale-105"
          />
        </div>

        <div className="h-24">
          {/* Informações */}
          <h4 className="text-lg text-white font-semibold mb-1">{product.name}</h4>
          <p className="text-sm text-gray-300 mb-2 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between">
            {hasDiscount && <h6 className="text-sm line-through text-red-400">R${product.price},00</h6>}
            <h3 className="text-xl font-bold text-amber-500">
              R$
              {hasDiscount ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price.toFixed(2)}
            </h3>
          </div>
        </div>

        {/* Botões */}
        <div className="mt-4 flex justify-between items-center">
          <Button
            icon={() => <PlusIcon size={18} className="text-white mr-2" />}
            label="Ver mais"
            size="small"
            text
            className="bg-neutral-700 hover:bg-neutral-600 border-none text-white py-1 px-2 rounded-lg transition"
          />
          <Button
            icon={() => <ShoppingCart size={18} className="text-white mr-2" />}
            label="Adicionar"
            size="small"
            className="bg-amber-600 hover:bg-amber-700 border-none text-white py-1 px-2 rounded-lg transition"
            onClick={() => adicionarProdutoCarrinho(product)}
          />
        </div>
      </motion.div>
    )
  }

  return (
    <div className="relative">
      <Carousel
        items={products}
        renderItem={productTemplate}
        autoplay={true}
        interval={4000}
        itemsToShow={customItemsToShow}
        className="max-w-full md:max-w-2xl lg:max-w-3xl 2xl:max-w-7xl mx-auto"
      />
      <div className="flex flex-col items-center justify-center p-4 mt-8">
        <motion.button
          className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium transition-all duration-300 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Scissors size={18} />
          VER TODOS OS PRODUTOS
        </motion.button>
      </div>
    </div>
  )
}
