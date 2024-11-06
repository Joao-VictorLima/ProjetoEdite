import axios from 'axios';

// Configuração padrão para instância do Axios
const api = axios.create({
  baseURL: 'https://localhost:5173/',
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

// GET - Recupera dados sem enviar informações no corpo da requisição
export const getRequest = async (url : string, config = {}) => {
  try {
    const response = await api.get(url, config);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer GET:', error);
    throw error;
  }
};

// POST - Envia dados para o servidor
export const postRequest = async (url : string, data : any, config = {}) => {
  try {
    const response = await api.post(url, data, config);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer POST:', error);
    throw error;
  }
};

// PUT - Atualiza dados existentes
export const putRequest = async (url : string, data : any, config = {}) => {
  try {
    const response = await api.put(url, data, config);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer PUT:', error);
    throw error;
  }
};

// DELETE - Remove dados do servidor
export const deleteRequest = async (url : string, config = {}) => {
  try {
    const response = await api.delete(url, config);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer DELETE:', error);
    throw error;
  }
};
