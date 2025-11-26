import { StyleSheet } from 'react-native';
import { AppTheme } from './theme';
import { createCommonStyles } from './CommonStyles';

export const createHomeStyles = (theme: AppTheme) => {
  const common = createCommonStyles(theme);

  return StyleSheet.create({
    ...common,
    // Container Principal com padding top maior para a barra de status
    weatherContainer: {
      ...common.container,
      paddingTop: theme.spacing.xl * 2,
      alignItems: 'center',
      backgroundColor: theme.colors.background, // Pode ser alterado dinamicamente no componente
    },
    locationText: {
      ...common.title,
      fontSize: theme.typography.size.h2,
      color: theme.colors.textPrimary,
      marginBottom: theme.spacing.xs,
    },
    dateText: {
      fontSize: theme.typography.size.caption,
      color: theme.colors.textSecondary,
      marginBottom: theme.spacing.xl,
    },
    // Grande temperatura central
    temperatureText: {
      fontSize: 120, // Tamanho gigante para destaque
      fontWeight: theme.typography.weight.light,
      color: theme.colors.textPrimary,
      marginBottom: theme.spacing.md,
    },
    conditionText: {
      fontSize: theme.typography.size.h3,
      fontWeight: theme.typography.weight.regular,
      color: theme.colors.textPrimary,
      marginBottom: theme.spacing.xl,
    },
    // Estilo para a animação do ícone do clima
    weatherIconContainer: {
      width: 150,
      height: 150,
      marginBottom: theme.spacing.lg,
      // Exemplo de estilo para um ícone SVG ou Lottie
    },
    // Container para os detalhes da previsão (Umidade, Vento, etc.)
    detailsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: theme.spacing.lg,
      marginTop: theme.spacing.lg,
    },
    detailCard: {
      ...common.card,
      width: '48%', // Duas colunas
      padding: theme.spacing.md,
      alignItems: 'center',
    },
    detailValue: {
      fontSize: theme.typography.size.h3,
      fontWeight: theme.typography.weight.bold,
      color: theme.colors.primary,
    },
    detailLabel: {
      fontSize: theme.typography.size.small,
      color: theme.colors.textSecondary,
      marginTop: theme.spacing.xs,
    },
    // Estilo para a seção de previsão horária (scroll horizontal)
    hourlyForecastContainer: {
      marginTop: theme.spacing.xl,
      marginBottom: theme.spacing.lg,
    },
    hourlyItem: {
      ...common.card,
      marginRight: theme.spacing.md,
      width: 80, // Largura fixa para cada item
      alignItems: 'center',
      paddingVertical: theme.spacing.md,
    },
    // Estilo para o componente animado (Requisito 7)
    animatedElement: {
        width: theme.layout.screenWidth,
        height: 10,
        backgroundColor: theme.colors.primary,
        opacity: 0.5,
        marginTop: theme.spacing.lg,
        // O componente React Native deve usar Animated.View com este estilo base
    }
  });
};