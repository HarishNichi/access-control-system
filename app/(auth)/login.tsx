import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../../components/LanguageSwitcher';

export default function LoginScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Dummy login - just navigate to dashboard
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100">
      <View className="flex-1 justify-center px-6">
        {/* Language Switcher */}
        <View className="absolute top-4 right-4">
          <LanguageSwitcher />
        </View>

        {/* Centered Container with Max Width */}
        <View className="w-full max-w-md mx-auto">
          {/* Logo and Title */}
          <View className="items-center mb-8">
            <View className="w-20 h-20 bg-blue-600 rounded-2xl items-center justify-center mb-4 shadow-lg">
              <Ionicons name="shield-checkmark" size={48} color="white" />
            </View>
            <Text className="text-3xl font-bold text-gray-800 mb-2">{t('welcome_back')}</Text>
            <Text className="text-gray-600">{t('login_subtitle')}</Text>
          </View>

          {/* Login Form */}
          <View className="bg-white rounded-2xl p-6 shadow-lg">
            {/* Email Input */}
            <View className="mb-4">
              <Text className="text-gray-700 font-medium mb-2">{t('email')}</Text>
              <View className="flex-row items-center border border-gray-300 rounded-lg px-4 py-3 bg-gray-50">
                <Ionicons name="mail-outline" size={20} color="#9ca3af" />
                <TextInput
                  className="flex-1 ml-3 text-gray-800"
                  placeholder={t('email_placeholder')}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Password Input */}
            <View className="mb-6">
              <Text className="text-gray-700 font-medium mb-2">{t('password')}</Text>
              <View className="flex-row items-center border border-gray-300 rounded-lg px-4 py-3 bg-gray-50">
                <Ionicons name="lock-closed-outline" size={20} color="#9ca3af" />
                <TextInput
                  className="flex-1 ml-3 text-gray-800"
                  placeholder={t('password_placeholder')}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
              </View>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              className="bg-blue-600 py-4 rounded-lg items-center shadow-md active:opacity-80"
              onPress={handleLogin}
            >
              <Text className="text-white font-semibold text-lg">{t('login')}</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View className="mt-8 items-center">
            <Text className="text-gray-500 text-sm">Access Control System v1.0</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
