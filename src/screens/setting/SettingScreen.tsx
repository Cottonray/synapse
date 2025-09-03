import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

const SettingScreen = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('screens.setting.title')}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('screens.setting.language')}</Text>

        <TouchableOpacity
          style={[
            styles.languageButton,
            i18n.language === 'ko' && styles.activeButton,
          ]}
          onPress={() => changeLanguage('ko')}
        >
          <Text
            style={[
              styles.buttonText,
              i18n.language === 'ko' && styles.activeButtonText,
            ]}
          >
            {t('screens.setting.korean')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.languageButton,
            i18n.language === 'en' && styles.activeButton,
          ]}
          onPress={() => changeLanguage('en')}
        >
          <Text
            style={[
              styles.buttonText,
              i18n.language === 'en' && styles.activeButtonText,
            ]}
          >
            {t('screens.setting.english')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  languageButton: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  activeButton: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  activeButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default SettingScreen;
