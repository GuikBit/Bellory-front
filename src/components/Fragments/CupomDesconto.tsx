import { useState } from "react";
import { Ticket, Check, X, Trash2 } from "lucide-react";

const cuponsDisponiveis = [
  { id: 1, nome: "DESCONTO10", desconto: 0.1 },
  { id: 2, nome: "DESCONTO15", desconto: 0.15 },
  { id: 3, nome: "DESCONTO25", desconto: 0.25 },
];

interface CupomDescontoProps {
  aplicarDesconto: (desconto: number) => void;
}

export const CupomDesconto = ({ aplicarDesconto }: CupomDescontoProps) => {
  const [cupomDigitado, setCupomDigitado] = useState("");
  const [cupomValido, setCupomValido] = useState<boolean | null>(null);
  const [cupomAtivo, setCupomAtivo] = useState(false);

  const validarCupom = () => {
    const cupom = cuponsDisponiveis.find(c => c.nome === cupomDigitado.toUpperCase());
    if (cupom) {
      setCupomValido(true);
      aplicarDesconto(cupom.desconto);
    } else {
      setCupomValido(false);
      aplicarDesconto(0);
    }
    setCupomAtivo(true);
  };

  const removerCupom = () => {
    setCupomDigitado("");
    setCupomValido(null);
    aplicarDesconto(0);
    setCupomAtivo(false);
  };

  return (
    <div className="my-3">
      {cupomAtivo ? (
        <div className={`flex items-center border  rounded-lg px-3 py-2  ${cupomValido === true ? 'border-green-500' :  cupomValido === false ? 'border-red-500' :'border-neutral-400 dark:border-neutral-600'}`}>
          <Ticket size={20} className="mr-2" />
          <input
            type="text"
            value={cupomDigitado}
            onChange={(e) => setCupomDigitado(e.target.value)}
            onBlur={()=>{validarCupom()}}
            className={`flex-1 outline-none placeholder:text-neutral-600  `}
            placeholder="Digite o seu cupom"
            
          />
            {cupomValido === true && (
                <Check size={20} className="text-green-500" />
            )}
            {cupomValido === false && (
                <X size={20} className="text-red-400" />
            )}

          <Trash2 size={20} className="text-red-500 cursor-pointer ml-2" onClick={removerCupom} />
        </div>
      ) : (
        <div className="" onClick={()=>{setCupomAtivo(true)}}>
            <a href="#" className="text-sm text-blue-700 hover:text-blue-600">Cupom de desconto?</a>
        </div>
      )}

    </div>
  );
};
