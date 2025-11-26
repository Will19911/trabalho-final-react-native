export interface User {
    email: string;
    name: string;
  }
  
  export interface WeatherData {
    name: string;
  
    sys: {
      country: string;
      sunrise?: number;
      sunset?: number;
    };
  
    main: {
      temp: number;
      humidity: number;
      feels_like: number;
      temp_min?: number;
      temp_max?: number;
    };
  
    weather: Array<{
      id?: number;
      main: string;
      description: string;
      icon: string;
    }>;
  
    wind: {
      speed: number;
      deg?: number;
    };
  }
  
  export interface AppContextType {
    user: User | null;
    favorites: WeatherData[];
    apiKey: string;
    loadingAuth: boolean;
  
    login: (email: string, name: string) => Promise<void>;
    logout: () => Promise<void>;
    toggleFavorite: (cityData: WeatherData) => Promise<void>;
  
    saveApiKey: (key: string) => Promise<void>;
  }
  