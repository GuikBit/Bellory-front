import { Servicos } from "../../../utils/interfaces";

const ServicoCadastro = ({detalhes}:{detalhes: Servicos | null}) =>{


    return (
        <div>
            {detalhes?.nome}
        </div>
    )
}

export default ServicoCadastro;