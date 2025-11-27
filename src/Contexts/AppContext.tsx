import React, { createContext, useState, useEffect, ReactNode } from 'react';
import StorageService  from '../Services/storage';
import { API_KEY_DEFAULT } from '../Services/api';
import { User, WeatherData, AppContextType } from '../Types/interfaces';

export const AppContext = createContext<AppContextType | null>(null);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [favorites, setFavorites] = useState<WeatherData[]>([]);
  const [apiKey, setApiKey] = useState<string>(API_KEY_DEFAULT);
  const [loadingAuth, setLoadingAuth] = useState<boolean>(true);
  const [home, setHome] = useState<string>("");

  useEffect(() => {
    const loadStorage = async () => {
      try {
        const storedUser = await StorageService.getItem('@user');
        const storedFavs = await StorageService.getItem('@favorites');
        const storedKey = await StorageService.getItem('@apiKey');

        if (storedUser) setUser(JSON.parse(storedUser));
        if (storedFavs) {
          try {
             setFavorites(JSON.parse(storedFavs));
          } catch {
             setFavorites([]);
          }
       }
       if (storedKey && storedKey.length > 5) setApiKey(storedKey);
      } catch (error) {
        console.warn("Erro ao carregar dados do storage:", error);
      } finally {
        setTimeout(() => setLoadingAuth(false), 1000);
      }
    };
    loadStorage();
  }, []);

  const login = async (email: string, name: string) => {
    const userData: User = { email, name };
    setUser(userData);
    await StorageService.setItem('@user', JSON.stringify(userData));
  };

  const logout = async () => {
    setUser(null);
    await StorageService.removeItem('@user');
  };

  const toggleFavorite = async (cityData: WeatherData) => {
    const exists = favorites.some(f => f.name === cityData.name);
    
    let newFavs = exists
      ? favorites.filter(f => f.name !== cityData.name)
      : [...favorites, cityData];
  
    setFavorites(newFavs);
    await StorageService.setItem('@favorites', JSON.stringify(newFavs));
  };

  const saveApiKey = async (key: string) => {
    setApiKey(key);
    await StorageService.setItem('@apiKey', key);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        favorites,
        toggleFavorite,
        loadingAuth,
        apiKey,
        saveApiKey,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
