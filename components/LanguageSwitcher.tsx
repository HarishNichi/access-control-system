import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLanguage = i18n.language === 'en' ? 'ja' : 'en';
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <TouchableOpacity onPress={toggleLanguage} style={styles.container}>
      <Ionicons name="globe-outline" size={24} color="#4b5563" />
      <Text style={styles.text}>
        {i18n.language === 'en' ? 'EN' : 'JP'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f3f4f6',
  },
  text: {
    marginLeft: 4,
    fontWeight: '600',
    color: '#4b5563',
  },
});
