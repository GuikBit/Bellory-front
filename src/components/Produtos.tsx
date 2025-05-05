
import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import Carousel from './Fragments/Carousel';
import { PlusIcon, ShoppingCart } from 'lucide-react';
import { Product } from '../utils/interfaces';
import { useGlobalState } from '../global/ContextGlobalState';


const list = [
    {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        discount: 10
    },
    {
        id: '1001',
        code: 'f230fh0g4',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        discount: 20
    },
    {
        id: '1002',
        code: 'f230fh0g5',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        discount: 5
    },
    {
        id: '1006',
        code: 'f230fh0g6',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        discount: 2
    },
    {
        id: '1007',
        code: 'f230fh0g7',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        discount: 15
    },
    {
        id: '1008',
        code: 'f230fh0g8',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        discount: 0
    },
    {
        id: '1009',
        code: 'f230fh0g9',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        discount: 0
    },
    {
        id: '1010',
        code: 'f230fh010',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        discount: 0
    },
    {
        id: '1011',
        code: 'f230fh011',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        discount: 0
    },
]



export default function Produtos() {
    const [products, setProducts] = useState<Product[]>([]);
    const { adicionarProdutoCarrinho } = useGlobalState();

    const customItemsToShow = {
        default: 1, // 1 item em telas extra pequenas (mobile)
        sm: 1,      // 2 itens em telas pequenas (>= 640px)
        md: 2,      // 3 itens em telas médias (>= 768px)
        lg: 3,      // 4 itens em telas grandes (>= 1024px)
      };

    useEffect(() => {
        setProducts(list.slice(0, 9));
    }, []);

    const productTemplate = (product: Product) => {

        const hasDiscount = (product.discount && product.discount > 0) ? true : false;
    
        return (
            <div className="bg-white dark:bg-neutral-900 dark:hover:bg-neutral-800/70 text-white rounded-2xl shadow-lg p-4 m-2 relative overflow-hidden hover:scale-[1.02] transition-transform">
                {/* Tag de Promoção */}
                {hasDiscount && (
                    <div className="absolute top-4 -left-1 -rotate-45 bg-gradient-to-r from-green-700 to-emerald-800 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-1">
                        {product.discount}% OFF
                    </div>
                )}
    
                {/* Imagem */}
                <div className="mb-4 rounded-xl overflow-hidden">
                    <img
                        src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
                        alt={product.name}
                        className="w-full h-52 object-cover transition duration-300 ease-in-out hover:scale-105"
                    />
                </div>
    
                <div className="h-20">
                    {/* Informações */}
                    <h4 className="text-lg text-black dark:text-white font-semibold mb-1">{product.name}</h4>
                    {hasDiscount && (
                        <h6 className="text-sm line-through text-red-400">R${product.price},99</h6>
                    )}
                    <h3 className="text-xl font-bold text-green-400">
                        R$
                        {hasDiscount
                            ? (product.price * (1 - product.discount / 100)).toFixed(2)
                            : product.price.toFixed(2)}
                    </h3>
                </div>
    
                {/* Botão */}
                <div className="mt-4 flex justify-between items-center">
                    <Button
                        icon={()=> <PlusIcon size={18} className="text-blue-400 mr-2" />}
                        label="Ver mais"
                        size='small'
                        text
                        className="bg-blue-500 hover:bg-blue-200 border-none text-black py-1 px-2 rounded-lg transition"
                    />
                    <Button
                        icon={()=> <ShoppingCart size={18} className="text-white dark:text-black mr-2" />}
                        label="Adicionar"
                        size='small'
                        className="bg-blue-500 hover:bg-blue-600 border-none text-black py-1 px-2 rounded-lg transition"
                        onClick={()=>adicionarProdutoCarrinho(product)}
                    />
                </div>
            </div>
        );
    };
    
    
    return (
        <div className="">
            <Carousel
                items={products}
                renderItem={productTemplate}
                autoplay={true}
                interval={4000}
                itemsToShow={customItemsToShow} // Passa a configuração customizada
                className="max-w-full md:max-w-2xl lg:max-w-3xl 2xl:max-w-7xl mx-auto " // Aumenta um pouco a largura máxima para acomodar mais itens
            />            
            <div className="flex flex-col items-center justify-center p-4">
                <Button label="Ver mais produtos" text icon="pi pi-calendar" className="p-button-outlined p-button-sm mt-3" />
            </div>
        </div>
    )
}
        