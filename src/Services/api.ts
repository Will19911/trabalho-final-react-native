import { WeatherData } from '../Types/interfaces';

export const API_KEY_DEFAULT = "724ee86e7e0f31c0043ec7f1fa36e20b";
export const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const MOCK_WEATHER: WeatherData = {
  name: "São Paulo",
  sys: { country: "BR" },
  main: { temp: 24, humidity: 60, feels_like: 26 },
  weather: [{ main: "Clouds", description: "nublado", icon: "04d" }],
  wind: { speed: 5.2 }
};

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "http://192.168.0.3:8081"
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;