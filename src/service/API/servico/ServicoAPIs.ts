import axios from "axios";
import api from "../ApiConfig";
import { Servicos } from "../../../utils/interfaces";

export interface Response {
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

export async function getAllServicos(): Promise<Response> {
  try {
    const response = await api.get<Response>('/servico');
    
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

export async function putServicoById(servico: Servicos): Promise<Response> {
  try {
    const response = await api.put<Response>(`/servico/${servico.id}`, JSON.stringify(servico));
    
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

export async function postServico(servico: Servicos): Promise<Response> {

  console.log(JSON.stringify(servico))

  try {
    const response = await api.post<Response>(`/servico`, JSON.stringify(servico));
    
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