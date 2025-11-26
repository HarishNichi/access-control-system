import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Card } from '../../../components/ui/Card';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

const logs = [
  { id: '1', user: 'John Doe', device: 'Main Entrance', method: 'PIN', time: '2025-11-22 10:30 AM', status: 'Success' },
  { id: '2', user: 'Jane Smith', device: 'Back Door', method: 'QR', time: '2025-11-22 10:15 AM', status: 'Success' },
  { id: '3', user: 'Guest', device: 'Main Entrance', method: 'PIN', time: '2025-11-22 09:45 AM', status: 'Failed' },
  { id: '4', user: 'Admin', device: 'Server Room', method: 'Remote', time: '2025-11-22 09:00 AM', status: 'Success' },
  { id: '5', user: 'Mike Johnson', device: 'Conference Room', method: 'QR', time: '2025-11-22 08:30 AM', status: 'Success' },
  { id: '6', user: 'Sarah Williams', device: 'Parking Lot', method: 'PIN', time: '2025-11-22 08:00 AM', status: 'Failed' },
  { id: '7', user: 'Tom Brown', device: 'Main Entrance', method: 'QR', time: '2025-11-22 07:45 AM', status: 'Success' },
  { id: '8', user: 'Lisa Davis', device: 'Back Door', method: 'Remote', time: '2025-11-22 07:30 AM', status: 'Success' },
];

const ITEMS_PER_PAGE = 5;

export default function AccessLogs() {
  const [filter, setFilter] = useState('');
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredLogs = logs.filter(log => 
    log.user.toLowerCase().includes(filter.toLowerCase()) ||
    log.device.toLowerCase().includes(filter.toLowerCase())
  );

  const visibleLogs = filteredLogs.slice(0, visibleCount);
  const hasMore = visibleCount < filteredLogs.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + ITEMS_PER_PAGE, filteredLogs.length));
  };

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-blue-50 to-white">
      <ScrollView className="flex-1">
        <View className="p-4">
          <Text className="text-2xl font-bold mb-6 text-gray-800">{t('logs')}</Text>
          
          <View className="mb-4 relative">
              <View className="absolute left-3 top-3 z-10">
                <Ionicons name="search" size={20} color="#9ca3af" />
              </View>
              <TextInput 
                  className="border-2 border-purple-200 rounded-lg p-3 pl-10 bg-white"
                  placeholder={t('search_placeholder', 'Search user or device...')}
                  value={filter}
                  onChangeText={(text) => {
                    setFilter(text);
                    setVisibleCount(ITEMS_PER_PAGE); // Reset pagination on search
                  }}
              />
          </View>

          <View className="bg-white rounded-lg shadow-sm border border-gray-200">
            {visibleLogs.map((item) => (
              <View key={item.id} className={`p-4 border-b border-gray-100 flex-row justify-between items-center last:border-0 ${item.status === 'Success' ? 'bg-green-50/30' : 'bg-red-50/30'}`}>
                <View className="flex-row items-center flex-1">
                  <View className={`p-2 rounded-full mr-3 ${item.status === 'Success' ? 'bg-green-100' : 'bg-red-100'}`}>
                    <Ionicons 
                      name={item.status === 'Success' ? 'checkmark-circle' : 'close-circle'} 
                      size={18} 
                      color={item.status === 'Success' ? '#10b981' : '#ef4444'} 
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="font-semibold text-gray-800">{item.user}</Text>
                    <Text className="text-xs text-gray-500">{item.device} • {t(item.method.toLowerCase())}</Text>
                  </View>
                </View>
                <View className="items-end">
                  <Text className={`text-sm font-bold ${item.status === 'Success' ? 'text-green-600' : 'text-red-600'}`}>
                    {t(item.status.toLowerCase())}
                  </Text>
                  <Text className="text-xs text-gray-400">{item.time}</Text>
                </View>
              </View>
            ))}
          </View>

          {hasMore && (
            <TouchableOpacity 
              className="bg-gray-100 p-4 rounded-lg items-center mt-4"
              onPress={loadMore}
            >
              <Text className="text-gray-700 font-medium">{t('load_more')}</Text>
            </TouchableOpacity>
          )}

          {!hasMore && filteredLogs.length > ITEMS_PER_PAGE && (
            <View className="p-4 items-center">
              <Text className="text-gray-500 text-sm">{t('no_more_items')}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
