import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks/useTheme';
import {
  Container,
  Title,
  Section,
  SectionTitle,
  OptionButton,
  ButtonText,
} from './SettingScreen.style';

const SettingScreen = () => {
  const { t, i18n } = useTranslation();
  const { theme, themeMode, setThemeMode } = useTheme();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Container theme={theme}>
      <Title theme={theme}>{t('screens.setting.title')}</Title>

      <Section>
        <SectionTitle theme={theme}>
          {t('screens.setting.language')}
        </SectionTitle>

        <OptionButton
          theme={theme}
          isActive={i18n.language === 'ko'}
          onPress={() => changeLanguage('ko')}
        >
          <ButtonText theme={theme} isActive={i18n.language === 'ko'}>
            {t('screens.setting.korean')}
          </ButtonText>
        </OptionButton>

        <OptionButton
          theme={theme}
          isActive={i18n.language === 'en'}
          onPress={() => changeLanguage('en')}
        >
          <ButtonText theme={theme} isActive={i18n.language === 'en'}>
            {t('screens.setting.english')}
          </ButtonText>
        </OptionButton>
      </Section>

      <Section>
        <SectionTitle theme={theme}>{t('screens.setting.theme')}</SectionTitle>

        <OptionButton
          theme={theme}
          isActive={themeMode === 'light'}
          onPress={() => setThemeMode('light')}
        >
          <ButtonText theme={theme} isActive={themeMode === 'light'}>
            {t('screens.setting.light')}
          </ButtonText>
        </OptionButton>

        <OptionButton
          theme={theme}
          isActive={themeMode === 'dark'}
          onPress={() => setThemeMode('dark')}
        >
          <ButtonText theme={theme} isActive={themeMode === 'dark'}>
            {t('screens.setting.dark')}
          </ButtonText>
        </OptionButton>

        <OptionButton
          theme={theme}
          isActive={themeMode === 'system'}
          onPress={() => setThemeMode('system')}
        >
          <ButtonText theme={theme} isActive={themeMode === 'system'}>
            {t('screens.setting.system')}
          </ButtonText>
        </OptionButton>
      </Section>
    </Container>
  );
};

export default SettingScreen;
