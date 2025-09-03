import { useContext } from 'react';
import { useTheme as useEmotionTheme } from '@emotion/react';
import {
  ThemeContext,
  ThemeContextType,
} from '../providers/context/ThemeContext';
import { Theme } from '../themes';

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme은 ThemeProvider 내부에서만 사용할 수 있습니다.');
  }
  return context;
};

// @emotion의 useTheme 훅 (styled components에서 사용)
export const useEmotionThemeHook = (): Theme => {
  return useEmotionTheme() as Theme;
};
