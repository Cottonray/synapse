import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks/useTheme';
import { Container, Title, Welcome } from './HomeScreen.style';

const HomeScreen = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      <Title theme={theme}>{t('screens.home.title')}</Title>
      <Welcome theme={theme}>{t('screens.home.welcome')}</Welcome>
    </Container>
  );
};

export default HomeScreen;
