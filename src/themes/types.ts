export interface ThemeColors {
  // 주요 색상
  primary: string;
  primaryLight: string;
  primaryDark: string;

  // 백그라운드 색상
  background: string;
  surface: string;
  card: string;

  // 텍스트 색상
  text: string;
  textSecondary: string;
  textDisabled: string;

  // 테두리 및 구분선 색상
  border: string;
  separator: string;

  // 상태를 표현하는 색상
  success: string;
  warning: string;
  error: string;
  info: string;

  // 탭바 색상
  tabBarBackground: string;
  tabBarActive: string;
  tabBarInactive: string;
  tabBarActiveBackground: string;

  // 그림자 색상
  shadow: string;

  // 카드 색상
  cardPurple: string;
}

export interface Theme {
  colors: ThemeColors;
  isDark: boolean;
}

export type ThemeMode = 'light' | 'dark' | 'system';
