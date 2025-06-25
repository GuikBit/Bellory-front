import { useState } from "react"
import { Servicos } from "../../../utils/interfaces"


interface ServicoCadastroProps {
  detalhes?: Servicos | null
  onSave?: (servico: Servicos) => void
  onCancel?: () => void
  isOpen?: boolean
  onClose?: () => void
}


const ColaboradoresCadastro = ({ detalhes = null, onSave, onCancel, isOpen = true, onClose }: ServicoCadastroProps) =>{

    const [servico, setServico] = useState<Servicos>({
        organizacao_id: 1,
        nome: "",
        categoria: "",
        genero: "",
        descricao: "",
        duracaoEstimadaMinutos: 0,
        preco: 0,
        produtos: [],
        urlsImagens: [],
        ativo: true,
    })

    return(
        <div>
            cadastro de funcionario
        </div>
    )
}

export default ColaboradoresCadastro;