import { apiLink } from "../api/axios-config";

export async function createLink(url: string, ttl: number){
  try {
    const response = await apiLink.post('create/', { url, ttl });
    return response.data.link_url;
  } catch (error) {
    console.error('Erro ao criar link:', error);
    throw error;
  }
};