import { useQuery } from "@tanstack/react-query";
import { buscarServicosAgendamento } from "../../API/servico/ServicoAPIs";

export function useBuscarServicosAgendamento() {

    return useQuery({
        queryKey: ['useBuscarServicosAgendamento'],
        queryFn: async () => {
            return await buscarServicosAgendamento();
        },
        refetchOnWindowFocus: false, // Não revalida ao trocar de aba
        refetchOnReconnect: false, // Não revalida ao reconectar
        staleTime: 5 * 60 * 1000, // Dados considerados "frescos" por 5 minutos
    });
}

  