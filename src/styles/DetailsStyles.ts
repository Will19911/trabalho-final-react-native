import { StyleSheet } from 'react-native';
import { AppTheme } from './theme';
import { createCommonStyles } from './CommonStyles';

export const createDetailsStyles = (theme: AppTheme) => {
  const common = createCommonStyles(theme);

  return StyleSheet.create({
    ...common,
    forecastList: {
      flex: 1,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.md,
    },
    // Estilo para cada item da previsão diária na lista
    dayForecastItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: theme.spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.inputBorder,
    },
    dayText: {
      fontSize: theme.typography.size.body,
      fontWeight: theme.typography.weight.medium,
      color: theme.colors.textPrimary,
      flex: 2,
    },
    conditionIcon: {
      width: 30,
      height: 30,
      marginHorizontal: theme.spacing.md,
    },
    tempRangeContainer: {
      flexDirection: 'row',
      flex: 3,
      justifyContent: 'flex-end',
    },
    maxTempText: {
      fontSize: theme.typography.size.body,
      fontWeight: theme.typography.weight.bold,
      color: theme.colors.textPrimary,
      width: 40,
      textAlign: 'right',
    },
    minTempText: {
      fontSize: theme.typography.size.body,
      color: theme.colors.textSecondary,
      marginLeft: theme.spacing.md,
      width: 40,
      textAlign: 'right',
    },
  });
};