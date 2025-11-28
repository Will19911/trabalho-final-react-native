import { TextStyle, ViewStyle, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Paleta de Cores base para um aplicativo de clima (tons de azul e cinza)
export const colors = {
  // Cores Primárias/Base
  primary: '#007BFF', // Azul vibrante para botões e destaques
  secondary: '#6C757D', // Cinza para texto secundário

  // Fundo do Aplicativo
  backgroundLight: '#F5F7FA', // Fundo claro para o dia
  backgroundDark: '#1E293B',  // Fundo escuro para a noite
  cardBackground: '#FFFFFF', // Fundo de cartões (claro)
  cardBackgroundDark: '#2D3748', // Fundo de cartões (escuro)

  // Cores de Texto
  textPrimaryLight: '#212529', // Texto escuro em fundo claro
  textPrimaryDark: '#E2E8F0',  // Texto claro em fundo escuro
  textSecondary: '#6C757D',

  // Cores do Clima
  clearSky: '#FFD700', // Sol para céu limpo
  rainy: '#4A90E2',    // Azul para chuva
  cloudy: '#9CA3AF',   // Cinza para nublado
  storm: '#9400D3',    // Roxo escuro para tempestade
  snow: '#E0FFFF',     // Branco/Azul claro para neve

  // Cores de Componentes
  inputBorder: '#CED4DA',
  error: '#DC3545',
};

// Tamanhos de Espaçamento e Borda
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

// Fontes (usando as fontes padrão do sistema, mas definindo tamanhos e pesos)
export const typography = {
  fontFamily: 'System', // Padrão do React Native
  size: {
    h1: 34,
    h2: 28,
    h3: 22,
    body: 16,
    caption: 14,
    small: 12,
  },
  weight: {
    light: '300' as '300',
    regular: '400' as '400',
    medium: '500' as '500',
    bold: '700' as '700',
  },
};

// Interface para o Tema Completo
export interface AppTheme {
  isDarkMode: boolean;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    cardBackground: string;
    textPrimary: string;
    textSecondary: string;
    // ... incluir todas as cores
    clearSky: string;
    rainy: string;
    cloudy: string;
    storm: string;
    snow: string;
    inputBorder: string;
    error: string;
  };
  spacing: typeof spacing;
  typography: typeof typography;
  layout: {
    screenWidth: number;
    screenHeight: number;
  };
}

// Tema padrão (Modo Claro)
export const LightTheme: AppTheme = {
  isDarkMode: false,
  colors: {
    ...colors,
    background: colors.backgroundLight,
    cardBackground: colors.cardBackground,
    textPrimary: colors.textPrimaryLight,
  },
  spacing,
  typography,
  layout: { screenWidth: width, screenHeight: height },
};

// Tema Escuro (para Context API e Requisito 10)
export const DarkTheme: AppTheme = {
  isDarkMode: true,
  colors: {
    ...colors,
    background: colors.backgroundDark,
    cardBackground: colors.cardBackgroundDark,
    textPrimary: colors.textPrimaryDark,
  },
  spacing,
  typography,
  layout: { screenWidth: width, screenHeight: height },
};