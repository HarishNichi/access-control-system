import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function AddDevice() {
  const router = useRouter();
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [deviceId, setDeviceId] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    // Save logic here
    console.log('Saving device:', { name, deviceId, description });
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="p-4">
        <Text className="text-2xl font-bold mb-6 text-gray-800">{t('add_new_device')}</Text>
        
        <View className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <View className="mb-4">
                <Text className="text-gray-700 font-medium mb-2">{t('device_name')}</Text>
                <TextInput 
                    className="border border-gray-300 rounded-lg p-3 bg-gray-50"
                    placeholder={t('placeholder_main_entrance')}
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <View className="mb-4">
                <Text className="text-gray-700 font-medium mb-2">{t('device_id')}</Text>
                <TextInput 
                    className="border border-gray-300 rounded-lg p-3 bg-gray-50"
                    placeholder={t('placeholder_device_id')}
                    value={deviceId}
                    onChangeText={setDeviceId}
                />
            </View>

            <View className="mb-6">
                <Text className="text-gray-700 font-medium mb-2">{t('description_optional')}</Text>
                <TextInput 
                    className="border border-gray-300 rounded-lg p-3 bg-gray-50 h-24"
                    placeholder={t('placeholder_location')}
                    multiline
                    textAlignVertical="top"
                    value={description}
                    onChangeText={setDescription}
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
                    onPress={handleSave}
                >
                    <Text className="text-white font-medium">{t('save_device')}</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
