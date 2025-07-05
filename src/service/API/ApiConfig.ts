// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://bellory-back.onrender.com/api', // Use variável de ambiente para a URL base
  timeout: 10000, // Tempo limite de 10 segundos
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json', // Informa que esperamos JSON como resposta
    //'Authorization': `Bearer ${localStorage.getItem('token')}` // Exemplo: Adiciona token JWT se existir
  }
});

// Opcional: Interceptores para tratar erros globalmente ou adicionar tokens
api.interceptors.response.use(
  response => response,
  error => {
    // Exemplo de tratamento de erro 401 (Não autorizado)
    if (error.response && error.response.status === 401) {
      console.error('Sessão expirada ou não autorizada. Redirecionando para login...');
      // window.location.href = '/login'; // Redireciona para a página de login
    }
    return Promise.reject(error); // Rejeita a Promise para que o erro possa ser tratado no local da chamada
  }
);

export default api;