import { StyleSheet } from 'react-native';
import { AppTheme } from './theme';
import { createCommonStyles } from './CommonStyles';

export const createAuthStyles = (theme: AppTheme) => {
  const common = createCommonStyles(theme);

  return StyleSheet.create({
    ...common,
    authContainer: {
      ...common.container,
      justifyContent: 'center',
      paddingHorizontal: theme.spacing.xl,
    },
    logoPlaceholder: {
      width: 150,
      height: 150,
      backgroundColor: theme.colors.cloudy,
      borderRadius: 75,
      alignSelf: 'center',
      marginBottom: theme.spacing.xl,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoText: {
      fontSize: theme.typography.size.h1,
      fontWeight: theme.typography.weight.bold,
      color: theme.colors.cardBackground,
    },
    subTitle: {
      ...common.title,
      fontSize: theme.typography.size.h3,
      marginBottom: theme.spacing.xl,
      textAlign: 'center',
      color: theme.colors.textSecondary,
    },
    linkText: {
      alignSelf: 'center',
      marginTop: theme.spacing.lg,
      color: theme.colors.primary,
      fontSize: theme.typography.size.caption,
      fontWeight: theme.typography.weight.medium,
    },
  });
};