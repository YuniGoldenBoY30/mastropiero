import { API_BASE, Post } from '../types/modelos';

const url = API_BASE.url;

class ApiService {
  async getPosts(): Promise<Post[]> {
    try {
      const response = await fetch(`${url}/posts`);
      const datosDelBackend = await response.json();
      return datosDelBackend;
    } catch (error) {
      throw new Error('Error al obtener datos del backend');
    }
  }
}

export default new ApiService();
