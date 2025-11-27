import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { AppTheme } from './theme';

// O tema será injetado nos estilos por um hook ou HOC (Context API)
export const createCommonStyles = (theme: AppTheme) => {

  const baseText: TextStyle = {
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.textPrimary,
  };

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: theme.spacing.md,
    },
    title: {
      ...baseText,
      fontSize: theme.typography.size.h2,
      fontWeight: theme.typography.weight.bold,
      marginBottom: theme.spacing.lg,
      color: theme.colors.primary,
    },
    textInput: {
      height: 50,
      backgroundColor: theme.colors.cardBackground,
      borderRadius: theme.spacing.sm,
      borderWidth: 1,
      borderColor: theme.colors.inputBorder,
      paddingHorizontal: theme.spacing.md,
      marginBottom: theme.spacing.md,
      ...baseText,
    },
    primaryButton: {
      backgroundColor: theme.colors.primary,
      paddingVertical: theme.spacing.md,
      borderRadius: theme.spacing.lg,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: theme.spacing.md,
    },
    primaryButtonText: {
      ...baseText,
      color: theme.colors.cardBackground, // Branco ou cor clara no botão primário
      fontSize: theme.typography.size.body,
      fontWeight: theme.typography.weight.bold,
    },
    card: {
      backgroundColor: theme.colors.cardBackground,
      borderRadius: theme.spacing.md,
      padding: theme.spacing.md,
      shadowColor: theme.colors.textPrimary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
      marginBottom: theme.spacing.md,
    },
    // Estilos de Navegação (para ser aplicado ao TabBar ou Header)
    navHeader: {
      backgroundColor: theme.colors.primary,
      borderBottomWidth: 0,
    },
    navHeaderText: {
      ...baseText,
      color: theme.colors.cardBackground,
      fontSize: theme.typography.size.h3,
      fontWeight: theme.typography.weight.medium,
    },
    navTab: {
      backgroundColor: theme.colors.cardBackground,
      borderTopColor: theme.colors.inputBorder,
    },
  });
};