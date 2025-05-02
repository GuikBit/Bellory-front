
import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';

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

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
    discount: number;
}

export default function Produtos() {
    const [products, setProducts] = useState<Product[]>([]);
    // const responsiveOptions: CarouselResponsiveOption[] = [
    //     {
    //         breakpoint: '1400px',
    //         numVisible: 2,
    //         numScroll: 1
    //     },
    //     {
    //         breakpoint: '1199px',
    //         numVisible: 3,
    //         numScroll: 1
    //     },
    //     {
    //         breakpoint: '767px',
    //         numVisible: 2,
    //         numScroll: 1
    //     },
    //     {
    //         breakpoint: '575px',
    //         numVisible: 1,
    //         numScroll: 1
    //     }
    // ];

    // const getSeverity = (product: Product) => {
    //     switch (product.inventoryStatus) {
    //         case 'INSTOCK':
    //             return 'success';

    //         case 'LOWSTOCK':
    //             return 'warning';

    //         case 'OUTOFSTOCK':
    //             return 'danger';

    //         default:
    //             return null;
    //     }
    // };

    useEffect(() => {
        setProducts(list.slice(0, 9));
    }, []);

    const productTemplate = (product: Product) => {
        const hasDiscount = (product.discount && product.discount > 0) ? true : false;
    
        return (
            <div className="bg-neutral-900 text-white rounded-2xl shadow-lg p-4 m-2 relative overflow-hidden hover:scale-[1.02] transition-transform">
                {/* Tag de Promoção */}
                {hasDiscount && (
                    <div className="absolute top-4 -left-1 -rotate-45 bg-gradient-to-r from-green-700 to-emerald-800 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
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
                    <h4 className="text-lg font-semibold mb-1">{product.name}</h4>
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
                <div className="mt-4">
                    <Button
                        label="Adicionar no carrinho"
                        className="bg-yellow-500 hover:bg-yellow-600 border-none text-black font-medium py-2 px-4 rounded-lg transition"
                    />
                </div>
            </div>
        );
    };
    
    
    return (
        <div className="p-4">
            <Carousel value={products} numScroll={1} numVisible={3} itemTemplate={productTemplate} circular autoplayInterval={3000} />
            {/* <Carousel value={products} numVisible={3} numScroll={1} itemTemplate={productTemplate} circular autoplayInterval={3000} /> */}
        </div>
    )
}
        