import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { buscarServicosAgendamento, getAllServicos, postServico, putServicoById } from "../../API/servico/ServicoAPIs";
import { Servicos } from "../../../utils/interfaces";

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

export function useGetAllServicos() {

    return useQuery({
        queryKey: ['useGetAllServicos'],
        queryFn: async () => {
            return await getAllServicos();
        },
        refetchOnWindowFocus: false, // Não revalida ao trocar de aba
        refetchOnReconnect: false, // Não revalida ao reconectar
        staleTime: 5 * 60 * 1000, // Dados considerados "frescos" por 5 minutos
    });
}

export const useUpdateServico = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (servico: Servicos) => {
        // console.log(servico);
        return await putServicoById(servico)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["useGetAllServicos"] })
    },
  })
}

// Hook para criar serviço
export const useCreateServico = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (servico: Servicos) => {
      
    //   console.log(servico);

      return await postServico(servico);

    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["useGetAllServicos"] })
    },
  })
}




  