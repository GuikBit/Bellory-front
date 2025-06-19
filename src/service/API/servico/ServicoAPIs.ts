import axios from "axios";
import api from "../ApiConfig";

interface Response {
  success: boolean
  message: string
  errorCode: number
  dados: any[]
}

// Exemplo de outra requisição GET
export async function buscarServicosAgendamento(): Promise<Response> {
  try {
    const response = await api.get<Response>('/servico/agendamento');
    
    return {
      success: response.data.success,
      message: response.data.message,
      errorCode: response.data.errorCode,
      dados: response.data.dados
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.mensagem || 'Erro ao buscar serviços.');
    }
    throw new Error('Erro de rede ou inesperado.');
  }
}