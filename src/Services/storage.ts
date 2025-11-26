import AsyncStorage from '@react-native-async-storage/async-storage';

const StorageService = {
  setItem: async (key: string, value: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error("Erro ao salvar no AsyncStorage:", e);
    }
  },

  getItem: async (key: string): Promise<string | null> => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (e) {
      console.error("Erro ao ler do AsyncStorage:", e);
      return null;
    }
  },

  removeItem: async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error("Erro ao remover do AsyncStorage:", e);
    }
  }
};

export default StorageService;
