import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../locales/i18n'; // i18n 초기화
import { useTheme } from '../hooks/useTheme';
import { ThemeProvider } from './ThemeProvider';

export interface AppProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

// NavigationContainer를 테마와 함께 사용하기 위한 내부 컴포넌트
const ThemedNavigationContainer = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();

  const navigationTheme = {
    dark: theme.isDark,
    colors: {
      primary: theme.colors.primary,
      background: theme.colors.background,
      card: theme.colors.card,
      text: theme.colors.text,
      border: theme.colors.border,
      notification: theme.colors.primary,
    },
    fonts: {
      regular: {
        fontFamily: 'System',
        fontWeight: 'normal' as const,
      },
      medium: {
        fontFamily: 'System',
        fontWeight: '500' as const,
      },
      bold: {
        fontFamily: 'System',
        fontWeight: 'bold' as const,
      },
      heavy: {
        fontFamily: 'System',
        fontWeight: '900' as const,
      },
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      {children}
    </NavigationContainer>
  );
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ThemedNavigationContainer>{children}</ThemedNavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
