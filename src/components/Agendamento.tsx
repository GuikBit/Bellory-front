
import { useState } from 'react';
import Stepper, { Step } from './Fragments/Stepper';
import { Ban, Calendar, Clock, IdCard, Phone, User } from 'lucide-react';
import { NovoAgendamento } from '../utils/interfaces';
import { formatCPF, formatTelefone } from '../utils/functions';

const Agendamento = () => {
    const list = [
        {
            id: '1001',
            title: "Corte",
            image: "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Corte moderno e personalizado para o formato do seu rosto. Estilo, elegância e confiança em cada detalhe.",
            price: 50.00,
        },
        {
            id: '1002',
            title: "Barba",
            image: "https://images.unsplash.com/photo-1599351431618-317f6a5f9a6b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Barba feita com navalha, toalha quente e hidratação. Realce seu visual com cuidado profissional.",
            price: 25.00,
        },
        {   id: '1003',
            title: "Sobrancelha",
            image: "https://s1-unimed-dev.us-southeast-1.linodeobjects.com/images/products/seller_143/Modelagem-e-design-de-sobrancelha-masculina_cfac09e2_7d31_40ce_97ab_629fd41641a0.webp",
            description: "Remoção dos excessos de pelos para uma aparência limpa e natural, sem exageros.",
            price: 17.00
        },
        {
            id: '1004',
            title: "Pigmentação de Barba",
            image: "https://www.lamafiabarbearia.com.br//wp-content/uploads/2022/08/bg-box-pigmentacao-barba.jpg",
            description: "Cobertura de falhas e fios brancos com técnica artesanal. Efeito natural e visual renovado.",
            price: 13.00,
        }
    ];

    const barbeiros = [
        {
            id: '1',
            title: "Victor",
            image: "https://www.shutterstock.com/image-photo/haircut-by-hairdresser-barbershop-barber-600nw-2484467169.jpg",
        },
        {
            id: '2',
            title: "Matheus",
            image: "https://www.shutterstock.com/image-photo/barber-shop-hair-clipper-black-600nw-2302169201.jpg",
        },
    ];

    // const stepperRef = useRef(null);

    const [novo, setNovo] = useState<NovoAgendamento | null>(null);

    const handlerSetServicos = (item: any) => {
        const jaExiste = novo?.servicos?.some((s) => s.id === item.id);

        console.log(item, jaExiste);
    
        setNovo((prev) => ({
            ...prev,
            servicos: jaExiste
                ? prev?.servicos?.filter((s) => s.id !== item.id)
                : [...(prev?.servicos || []), item],
        }));
    };

    const isSelecionado = (id: string | number) => {
        return novo?.servicos?.some((s) => s.id === id);
    };

    const handlerSetBarbeiro = (item: any) => {
        setNovo((prev) => ({
            ...prev,
            barbeiro: item
        }));
    };

    const isBarbeiroSelecionado = (id: string | number) => {
        return novo?.barbeiro?.id === id;
    };
    
    const handlerCPF = (value: string) => {
        const formattedValue = formatCPF(value);
        setNovo((prev) => ({
            ...prev,
            cpf: formattedValue
        }));
    };
    
    const handlerTelefone = (value: string) => {
        const formattedValue = formatTelefone(value);
        setNovo((prev) => ({
            ...prev,
            telefone: formattedValue
        }));
    };

  return (
    
    <Stepper
        initialStep={1}
        onStepChange={(step) => {
            console.log(step);
        }}
        onFinalStepCompleted={() => console.log("All steps completed!")}
        backButtonText="Voltar"
        nextButtonText="Próximo"
        className=''
    >
        <Step title="Step 1" icon="pi pi-check" className="bg-red-400">
            <div className="">
                <h2 className="text-md font-semibold mb-4 text-center">Preencha os dados</h2>
            </div>
            <div>
                <div className="flex flex-col">
                    <label className="mb-1 flex text-sm font-medium">
                        <User size={20} className="mr-2" />
                        Nome completo
                    </label>
                    <input type="text" value={novo?.nome} placeholder="Pedro Meineres" onChange={(e)=>setNovo({...novo, nome: e.target.value})} className="border border-neutral-400 dark:border-neutral-600 px-3 py-2 rounded-lg outline-none" />
                </div>
                <div className="flex flex-col my-4">
                    <label className="mb-1 flex text-sm font-medium">
                       <Phone size={20} className="mr-2" />
                        Telefone
                    </label>
                    <input type="text" value={novo?.telefone} placeholder="(32) 99999-9999" onChange={(e)=>handlerTelefone(e.target.value)} className="border border-neutral-400 dark:border-neutral-600 px-3 py-2 rounded-lg outline-none" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1 flex text-sm font-medium">
                        <IdCard size={20} className="mr-2" />
                        CPF
                    </label>
                    <input type="text"value={novo?.cpf} placeholder="123.456.789-00" onChange={(e)=>handlerCPF(e.target.value)} className="border border-neutral-400 dark:border-neutral-600 px-3 py-2 rounded-lg outline-none" />
                </div>
            </div>
        </Step>
        <Step>
            <div className="">
                <h2 className="text-md font-semibold mb-4 text-center">Selecione os serviços</h2>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

                {list.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => handlerSetServicos(item)}
                        className={`cursor-pointer  rounded-2xl shadow-md m-2 relative overflow-hidden hover:scale-[1.02] transition-transform 
                            ${
                                isSelecionado(item.id)
                                    ? "border-3 border-green-500 shadow-teal-400/50"
                                    : "border-3 border-neutral-300 dark:border-neutral-600"
                            } 
                            bg-neutral-200/50 hover:bg-neutral-200/80 dark:bg-neutral-800/70 transition-colors duration-200 `}
                    >
                        <div className="rounded-t-xl overflow-hidden relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-40 object-cover transition duration-300 ease-in-out "
                            />
                            <div className='absolute bottom-0 left-0 px-2 w-full bg-gradient-to-t from-neutral-900/80 to-transparent z-10'>
                                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                                <h3 className={`text-sm mb-2 font-bold transition-colors duration-200  ${isSelecionado(item.id)? 'text-green-500':'text-neutral-200'}`}>R${item.price.toFixed(2)}</h3>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </Step>
        <Step>
        <div className="mt-10">
            <h2 className="text-md font-semibold mb-4 text-center">Selecione o barbeiro</h2>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <div
                key={0}
                onClick={() => handlerSetBarbeiro({id: 0, title: "Não tenho preferência", image: "https://www.shutterstock.com/image-photo/hairdresser-barbershop-barber-600nw-2484467169.jpg"})}
                className={`cursor-pointer border-3 rounded-2xl shadow-md m-2 relative overflow-hidden hover:scale-[1.02] transition-transform 
                    ${
                        isBarbeiroSelecionado(0)
                            ? "border-green-500 shadow-green-400/50"
                            : "border-neutral-300 dark:border-neutral-600"
                    } 
                    bg-neutral-200/50 hover:bg-neutral-700/40 flex justify-center items-center dark:bg-neutral-800/70 transition-colors duration-200`}
            >
                <div className='flex flex-col items-center '>
                    <Ban size={100} className="text-neutral-200 dark:text-neutral-700/40 absolute top-1/5" />
                    <h4 className="text-lg font-semibold text-black dark:text-white text-center z-1">Sem preferência</h4>
                </div>
            </div>
            {barbeiros.map((item) => (
                <div
                    key={item.id}
                    onClick={() => handlerSetBarbeiro(item)}
                    className={`cursor-pointer border-3 rounded-2xl shadow-md m-2 relative overflow-hidden hover:scale-[1.02] transition-transform 
                        ${
                            isBarbeiroSelecionado(item.id)
                                ? "border-green-500 shadow-green-400/50"
                                : "border-neutral-300 dark:border-neutral-600"
                        } 
                        bg-neutral-200/50 hover:bg-neutral-200/80 dark:bg-neutral-800/70 transition-colors duration-200`}
                >
                    <div className="rounded-t-xl overflow-hidden relative">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-40 object-cover transition duration-300 ease-in-out"
                        />
                        <div className='absolute bottom-0 left-0 px-2 w-full bg-gradient-to-t from-neutral-900/80 to-transparent z-10'>
                            <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                            {/* <h3 className={`text-sm mb-2 font-bold ${isBarbeiroSelecionado(item.id) ? 'text-green-400' : 'text-neutral-200'}`}>
                                Especialidade: {item.especialidade}
                             </h3> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>

            
        </Step>
        <Step>
            <div className="">
                <h2 className="text-md font-semibold mb-4 text-center">Confirmação</h2>
            </div>
            <div>
                <div>
                    <h3 className="text-md font-semibold mb-2">Dados do cliente</h3>
                    <p className="text-sm font-semibold">Nome: <span className='font-normal'>{novo?.nome}</span></p>
                    <p className="text-sm font-semibold my-1">Telefone: <span className='font-normal'>{novo?.telefone}</span></p>
                    <p className="text-sm font-semibold">CPF: <span className='font-normal'>{novo?.cpf}</span></p>
                </div>
                <div className="mt-4">
                    <h3 className="text-md font-semibold mb-2">Serviços selecionados</h3>
                    {novo?.servicos?.map((item) => (
                        <div className='flex justify-between items-center mx-4 my-1' key={item.id}>
                            <p className="text-sm">{item.title}</p>
                            <p className="text-sm">R${item.price.toFixed(2)}</p>
                        </div>
                    ))}
                    <hr className=" border-1 border-neutral-200 my-2 mx-4" />
                    <div className='flex justify-between items-center mx-4 my-1'>
                        <p></p>
                        <p className="text-sm font-normal">Total: <span className='font-semibold'>R${novo?.servicos?.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</span></p>
                    </div>
                </div>
                <div className='mt-2'>
                    <h3 className="text-md font-semibold mb-2">Barbeiro selecionado</h3>
                    <div className='flex justify-between gap-2 mx-4'>
                        <div className='flex flex-col items-center'>
                            {/* <img src={novo?.barbeiro?.image} alt={novo?.barbeiro?.title} className='w-20 h-20 object-cover rounded-full' /> */}
                            <p className="text-sm">{novo?.barbeiro?.title}</p>
                        </div>
                        <div>
                            <p className="text-sm flex items-center mr-1">
                                <Calendar size={18} className="mr-2" />
                                03/05/2025
                            </p>
                        </div>
                        <div>
                            <p className="text-sm flex items-center mr-1">
                                <Clock size={18} className="mr-2" />
                                15:00
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Step>
    </Stepper>
  );
}

export default Agendamento;