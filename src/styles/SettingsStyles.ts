import { StyleSheet } from 'react-native';
import { AppTheme } from './theme';
import { createCommonStyles } from './CommonStyles';

export const createSettingsStyles = (theme: AppTheme) => {
  const common = createCommonStyles(theme);

  return StyleSheet.create({
    ...common,
    settingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: theme.spacing.lg,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.inputBorder,
      paddingHorizontal: theme.spacing.md,
    },
    settingText: {
      fontSize: theme.typography.size.body,
      color: theme.colors.textPrimary,
      fontWeight: theme.typography.weight.regular,
    },
    switchContainer: {
      // Estilo para o componente Switch (toggle)
    },
    // Estilo para a opção de logout
    logoutButton: {
      marginTop: theme.spacing.xl * 2,
      backgroundColor: theme.colors.error,
      paddingVertical: theme.spacing.md,
      borderRadius: theme.spacing.sm,
      marginHorizontal: theme.spacing.md,
    },
  });
};