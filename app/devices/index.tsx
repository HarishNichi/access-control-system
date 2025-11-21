import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '../../components/ui/Card';

// Mock data
const devices = [
  { id: '1', name: 'Main Entrance', deviceId: 'DEV-001', status: 'Online', lastSync: '2 mins ago' },
  { id: '2', name: 'Back Door', deviceId: 'DEV-002', status: 'Offline', lastSync: '1 hour ago' },
  { id: '3', name: 'Server Room', deviceId: 'DEV-003', status: 'Online', lastSync: '5 mins ago' },
];

export default function DeviceList() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="p-4 flex-1">
        <View className="flex-row justify-between items-center mb-6">
            <Text className="text-2xl font-bold text-gray-800">Devices</Text>
            <TouchableOpacity 
                className="bg-blue-600 px-4 py-2 rounded-lg"
                onPress={() => router.push('/devices/add')}
            >
                <Text className="text-white font-medium">Add Device</Text>
            </TouchableOpacity>
        </View>

        <FlatList
          data={devices}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card className="mb-4">
              <View className="flex-row justify-between items-start">
                <View>
                  <Text className="text-lg font-semibold text-gray-800">{item.name}</Text>
                  <Text className="text-gray-500 text-sm">ID: {item.deviceId}</Text>
                </View>
                <View className={`px-2 py-1 rounded-full ${item.status === 'Online' ? 'bg-green-100' : 'bg-red-100'}`}>
                  <Text className={`text-xs font-medium ${item.status === 'Online' ? 'text-green-700' : 'text-red-700'}`}>
                    {item.status}
                  </Text>
                </View>
              </View>
              <View className="mt-3 pt-3 border-t border-gray-100 flex-row justify-between items-center">
                 <Text className="text-xs text-gray-400">Last Sync: {item.lastSync}</Text>
                 <TouchableOpacity onPress={() => console.log('Edit', item.id)}>
                    <Text className="text-blue-600 text-sm font-medium">Edit</Text>
                 </TouchableOpacity>
              </View>
            </Card>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
