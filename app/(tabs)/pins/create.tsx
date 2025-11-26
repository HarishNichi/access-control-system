import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function CreatePin() {
  const router = useRouter();
  const { t } = useTranslation();
  const [device, setDevice] = useState('');
  const [model, setModel] = useState('');
  const [expiry, setExpiry] = useState('');
  const [pin, setPin] = useState('');

  const handleGenerate = () => {
    // Generation logic
    console.log('Creating PIN:', { device, model, expiry, pin });
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="p-4">
        <Text className="text-2xl font-bold mb-6 text-gray-800">{t('create_new_pin')}</Text>
        
        <View className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <View className="mb-4">
                <Text className="text-gray-700 font-medium mb-2">{t('select_device')}</Text>
                <TextInput 
                    className="border border-gray-300 rounded-lg p-3 bg-gray-50"
                    placeholder={t('placeholder_select_device')}
                    value={device}
                    onChangeText={setDevice}
                />
            </View>

            <View className="mb-4">
                <Text className="text-gray-700 font-medium mb-2">{t('model')}</Text>
                <TextInput 
                    className="border border-gray-300 rounded-lg p-3 bg-gray-50"
                    placeholder={t('placeholder_device_model')}
                    value={model}
                    onChangeText={setModel}
                />
            </View>

            <View className="mb-4">
                <Text className="text-gray-700 font-medium mb-2">{t('expiry_date')}</Text>
                <TextInput 
                    className="border border-gray-300 rounded-lg p-3 bg-gray-50"
                    placeholder={t('placeholder_date')}
                    value={expiry}
                    onChangeText={setExpiry}
                />
            </View>

             <View className="mb-6">
                <Text className="text-gray-700 font-medium mb-2">{t('pin_code')}</Text>
                <TextInput 
                    className="border border-gray-300 rounded-lg p-3 bg-gray-50"
                    placeholder={t('placeholder_enter_pin')}
                    value={pin}
                    onChangeText={setPin}
                    keyboardType="numeric"
                    maxLength={8}
                />
            </View>

            <View className="flex-row gap-4">
                <TouchableOpacity 
                    className="flex-1 bg-gray-200 p-4 rounded-lg items-center"
                    onPress={() => router.back()}
                >
                    <Text className="text-gray-700 font-medium">{t('cancel')}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    className="flex-1 bg-blue-600 p-4 rounded-lg items-center"
                    onPress={handleGenerate}
                >
                    <Text className="text-white font-medium">{t('create_pin')}</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
