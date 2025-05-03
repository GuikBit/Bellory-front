import { Card } from "primereact/card";
import { Button } from "primereact/button";

const list = [
    {
        id: '1000',
        title: "Corte",
        image: "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Corte moderno e personalizado para o formato do seu rosto. Estilo, elegância e confiança em cada detalhe.",
        price: 50.00,
    },
    {
        id: '1000',
        title: "Barba",
        image: "https://images.unsplash.com/photo-1599351431618-317f6a5f9a6b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Barba feita com navalha, toalha quente e hidratação. Realce seu visual com cuidado profissional.",
        price: 25.00,
    },
    {   id: '1000',
        title: "Sobrancelha",
        image: "https://s1-unimed-dev.us-southeast-1.linodeobjects.com/images/products/seller_143/Modelagem-e-design-de-sobrancelha-masculina_cfac09e2_7d31_40ce_97ab_629fd41641a0.webp",
        description: "Remoção dos excessos de pelos para uma aparência limpa e natural, sem exageros.",
        price: 17.00
    },
    {
        id: '1000',
        title: "Pigmentação de Barba",
        image: "https://www.lamafiabarbearia.com.br//wp-content/uploads/2022/08/bg-box-pigmentacao-barba.jpg",
        description: "Cobertura de falhas e fios brancos com técnica artesanal. Efeito natural e visual renovado.",
        price: 13.00,
    }
];

const Servicos = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-10 p-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                {list.map((item, index) => (
                    <Card
                        key={index}
                        className="shadow-4 border-round-xl overflow-hidden transition-transform hover:scale-102 bg-white dark:bg-neutral-900"
                        title={item.title}
                        header={<img alt={item.title} src={item.image} className="w-full h-60 object-cover border-round-top-xl" />}
                        footer={
                            <div className="text-right">
                                <Button label="Agendar" icon="pi pi-calendar" className="p-button-outlined p-button-sm mt-3" />
                            </div>
                        }
                    >
                        <p className="text-900 text-sm leading-relaxed">{item.description}</p>
                    </Card>
                ))}
            </div>

            <div className="flex flex-col items-center justify-center mt-10 p-4">
                <Button label="Ver mais serviços" text icon="pi pi-calendar" className="p-button-outlined p-button-sm mt-3" />
            </div>
        </div>
    );
};

export default Servicos;
