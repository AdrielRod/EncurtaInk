import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getLinks(){
  try {
    const linksJSON = await AsyncStorage.getItem('@links');
    return JSON.parse(linksJSON || '[]');
  } catch (error) {
    console.error('Erro ao obter links:', error);
    throw error;
  }
};

export async function getFavorites(){
  try {
    const favoritesJSON = await AsyncStorage.getItem('@favorites');
    return JSON.parse(favoritesJSON || '[]');
  } catch (error) {
    console.error('Erro ao obter favoritos:', error);
    throw error;
  }
};

export async function updateLinksStorage(links: string[]) {
  await AsyncStorage.setItem('@links', JSON.stringify(links));
}

export async function updateFavoritesStorage(favorites: string[]) {
  await AsyncStorage.setItem('@favorites', JSON.stringify(favorites));
}