import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '../../components/ui/Card';

const qrs = [
  { id: '1', label: 'Visitor Pass', device: 'Main Entrance', status: 'Active', expiry: '2025-12-31' },
  { id: '2', label: 'Contractor', device: 'Back Door', status: 'Expired', expiry: '2024-11-20' },
];

export default function QrList() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="p-4 flex-1">
        <View className="flex-row justify-between items-center mb-6">
            <Text className="text-2xl font-bold text-gray-800">QR Codes</Text>
            <TouchableOpacity 
                className="bg-blue-600 px-4 py-2 rounded-lg"
                onPress={() => router.push('/qrs/generate')}
            >
                <Text className="text-white font-medium">Generate QR</Text>
            </TouchableOpacity>
        </View>

        <FlatList
          data={qrs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card className="mb-4">
              <View className="flex-row justify-between items-start">
                <View>
                  <Text className="text-lg font-semibold text-gray-800">{item.label}</Text>
                  <Text className="text-gray-500 text-sm">{item.device}</Text>
                </View>
                <View className={`px-2 py-1 rounded-full ${item.status === 'Active' ? 'bg-green-100' : 'bg-red-100'}`}>
                  <Text className={`text-xs font-medium ${item.status === 'Active' ? 'text-green-700' : 'text-red-700'}`}>
                    {item.status}
                  </Text>
                </View>
              </View>
              <View className="mt-3 pt-3 border-t border-gray-100 flex-row justify-between items-center">
                 <Text className="text-xs text-gray-400">Expires: {item.expiry}</Text>
                 <TouchableOpacity onPress={() => console.log('View QR', item.id)}>
                    <Text className="text-blue-600 text-sm font-medium">View QR</Text>
                 </TouchableOpacity>
              </View>
            </Card>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
