import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '../../components/ui/Card';
import { useState } from 'react';

const logs = [
  { id: '1', user: 'John Doe', device: 'Main Entrance', method: 'PIN', time: '2025-11-22 10:30 AM', status: 'Success' },
  { id: '2', user: 'Jane Smith', device: 'Back Door', method: 'QR', time: '2025-11-22 10:15 AM', status: 'Success' },
  { id: '3', user: 'Guest', device: 'Main Entrance', method: 'PIN', time: '2025-11-22 09:45 AM', status: 'Failed' },
  { id: '4', user: 'Admin', device: 'Server Room', method: 'Remote', time: '2025-11-22 09:00 AM', status: 'Success' },
];

export default function AccessLogs() {
  const [filter, setFilter] = useState('');

  const filteredLogs = logs.filter(log => 
    log.user.toLowerCase().includes(filter.toLowerCase()) ||
    log.device.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="p-4 flex-1">
        <Text className="text-2xl font-bold mb-6 text-gray-800">Access Logs</Text>
        
        <View className="mb-4">
            <TextInput 
                className="border border-gray-300 rounded-lg p-3 bg-white"
                placeholder="Search user or device..."
                value={filter}
                onChangeText={setFilter}
            />
        </View>

        <FlatList
          data={filteredLogs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="bg-white p-4 border-b border-gray-100 flex-row justify-between items-center">
              <View>
                <Text className="font-medium text-gray-800">{item.user}</Text>
                <Text className="text-xs text-gray-500">{item.device} • {item.method}</Text>
              </View>
              <View className="items-end">
                <Text className={`text-sm font-medium ${item.status === 'Success' ? 'text-green-600' : 'text-red-600'}`}>
                  {item.status}
                </Text>
                <Text className="text-xs text-gray-400">{item.time}</Text>
              </View>
            </View>
          )}
          className="bg-white rounded-lg shadow-sm border border-gray-200 flex-1"
        />
      </View>
    </SafeAreaView>
  );
}
