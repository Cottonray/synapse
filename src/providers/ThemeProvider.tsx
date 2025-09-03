import React, { useCallback, useEffect, useState, ReactNode } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme, Theme, ThemeMode } from '../themes';
import { ThemeContext, ThemeContextType } from './context/ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

const THEME_STORAGE_KEY = '@theme_mode';

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeMode, setThemeModeState] = useState<ThemeMode>('system');
  const [systemTheme, setSystemTheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme(),
  );

  // 실제 테마 계산
  const getActualTheme = useCallback((): Theme => {
    if (themeMode === 'system') {
      return systemTheme === 'dark' ? darkTheme : lightTheme;
    }
    return themeMode === 'dark' ? darkTheme : lightTheme;
  }, [themeMode, systemTheme]);

  const theme = getActualTheme();

  // AsyncStorage에서 테마 모드 로드
  useEffect(() => {
    const loadThemeMode = async () => {
      try {
        const savedThemeMode = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (
          savedThemeMode &&
          ['light', 'dark', 'system'].includes(savedThemeMode)
        ) {
          setThemeModeState(savedThemeMode as ThemeMode);
        }
      } catch (error) {
        console.error('테마 모드 로드 실패:', error);
      }
    };

    loadThemeMode();
  }, []);

  // 시스템 테마 변경 감지
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setSystemTheme(colorScheme);
    });

    return () => subscription?.remove();
  }, []);

  // 테마 모드 변경
  const setThemeMode = useCallback(async (mode: ThemeMode) => {
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, mode);
      setThemeModeState(mode);
    } catch (error) {
      console.error('테마 모드 저장 실패:', error);
    }
  }, []);

  // 테마 토글 (라이트 ↔ 다크)
  const toggleTheme = useCallback(() => {
    const currentTheme = getActualTheme();
    const newMode = currentTheme.isDark ? 'light' : 'dark';
    setThemeMode(newMode);
  }, [getActualTheme, setThemeMode]);

  const contextValue: ThemeContextType = {
    theme,
    themeMode,
    setThemeMode,
    toggleTheme,
  };

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeContext.Provider value={contextValue}>
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  );
};
