import { useQuery } from "@tanstack/react-query";
import { getAllFuncionarios } from "../../API/servico/FuncionarioAPIs";


export function useGetAllFunconarios() {
    return useQuery({
        queryKey: ['useGetAllFunconarios'],
        queryFn: async () => {
            return await getAllFuncionarios();
        },
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        staleTime: 5 * 60 * 1000,
    });
}