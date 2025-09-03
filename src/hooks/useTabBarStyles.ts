import { useMemo } from 'react';
import { useTheme } from './useTheme';

export const useTabBarStyles = () => {
  const { theme } = useTheme();

  return useMemo(
    () => ({
      tabBarShowLabel: false, // 라벨 숨기기
      tabBarStyle: {
        backgroundColor: theme.colors.background || '#FFFFFF',
        borderTopColor: 'transparent',
        borderTopWidth: 0,
        height: 90,
        paddingBottom: 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: 'absolute' as const,
        // 섀도우 효과
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.075,
        shadowRadius: 10,
        elevation: 10,
      },
      headerStyle: {
        backgroundColor: theme.colors.card,
      },
      headerTintColor: theme.colors.text,
      headerTitleStyle: {
        color: theme.colors.text,
      },
    }),
    [theme],
  );
};
