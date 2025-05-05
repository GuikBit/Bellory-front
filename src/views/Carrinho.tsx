import { useGlobalState } from "../global/ContextGlobalState";
import { useState } from "react";
import { Avatar } from "primereact/avatar";
import { CupomDesconto } from "../components/Fragments/CupomDesconto";

const Carrinho = () => {
  const { carrinho } = useGlobalState();
  const produtos = carrinho?.produtos || [];

  const [descontoCupom, setDescontoCupom] = useState(0);

  const subtotal = produtos.reduce((total, item) => total + item.price * item.quantidade, 0);
  const descontoMetodo = carrinho?.pagamento?.metodo === 'pix' ? subtotal * 0.1 : 0;
  const descontoTotal = descontoMetodo + (subtotal * descontoCupom);
  const total = subtotal - descontoTotal;

  return (
    <div className="flex justify-center p-6">
      <div className="md:grid grid-cols-5 gap-6 w-full max-w-6xl">
        <div className="col-span-3 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Produtos no Carrinho</h2>
          <div className="space-y-4 max-h-[400px] overflow-y-auto">
            {produtos.length === 0 ? (
              <p className="text-gray-500">Seu carrinho está vazio.</p>
            ) : (
              produtos.map((produto) => (
                <div key={produto.id} className="flex justify-between items-center pb-2">
                  <div className="flex">
                    <Avatar image={`https://primefaces.org/cdn/primereact/images/product/${produto.image}`} size="large" shape="circle" className="mr-2" />
                    <div>
                      <p className="font-medium">{produto.name}</p>
                      <p className="text-sm text-neutral-600">Preço: R$ {produto.price.toFixed(2)} | qtd: {produto.quantidade}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Subtotal: R$ {(produto.price * produto.quantidade).toFixed(2)}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="col-span-2 p-4 rounded shadow h-fit">
          <h2 className="text-xl font-semibold mb-4">Resumo</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>

            <CupomDesconto aplicarDesconto={(desconto:any) => setDescontoCupom(desconto)} />

            <div className="flex justify-between">
              <span>Descontos:</span>
              <span>- R$ {descontoTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
          </div>
          <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
