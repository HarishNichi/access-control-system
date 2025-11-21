import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function GenerateQr() {
  const router = useRouter();
  const [device, setDevice] = useState('');
  const [model, setModel] = useState('');
  const [expiry, setExpiry] = useState('');
  const [qrData, setQrData] = useState('');

  const handleGenerate = () => {
    // Generation logic
    console.log('Creating QR:', { device, model, expiry, qrData });
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="p-4">
        <Text className="text-2xl font-bold mb-6 text-gray-800">Generate QR Code</Text>
        
        <View className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <View className="mb-4">
                <Text className="text-gray-700 font-medium mb-2">Select Device</Text>
                <TextInput 
                    className="border border-gray-300 rounded-lg p-3 bg-gray-50"
                    placeholder="Select Device"
                    value={device}
                    onChangeText={setDevice}
                />
            </View>

            <View className="mb-4">
                <Text className="text-gray-700 font-medium mb-2">Model</Text>
                <TextInput 
                    className="border border-gray-300 rounded-lg p-3 bg-gray-50"
                    placeholder="Device Model"
                    value={model}
                    onChangeText={setModel}
                />
            </View>

            <View className="mb-4">
                <Text className="text-gray-700 font-medium mb-2">Expiry Date</Text>
                <TextInput 
                    className="border border-gray-300 rounded-lg p-3 bg-gray-50"
                    placeholder="YYYY-MM-DD"
                    value={expiry}
                    onChangeText={setExpiry}
                />
            </View>

             <View className="mb-6">
                <Text className="text-gray-700 font-medium mb-2">QR Data</Text>
                <TextInput 
                    className="border border-gray-300 rounded-lg p-3 bg-gray-50 h-24"
                    placeholder="Data to encode"
                    multiline
                    textAlignVertical="top"
                    value={qrData}
                    onChangeText={setQrData}
                />
            </View>

            <View className="flex-row gap-4">
                <TouchableOpacity 
                    className="flex-1 bg-gray-200 p-4 rounded-lg items-center"
                    onPress={() => router.back()}
                >
                    <Text className="text-gray-700 font-medium">Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    className="flex-1 bg-blue-600 p-4 rounded-lg items-center"
                    onPress={handleGenerate}
                >
                    <Text className="text-white font-medium">Generate QR</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
