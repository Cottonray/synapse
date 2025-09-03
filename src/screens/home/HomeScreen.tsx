import { Text, View } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('screens.home.title')}</Text>
      <Text>{t('screens.home.welcome')}</Text>
    </View>
  );
};

export default HomeScreen;
