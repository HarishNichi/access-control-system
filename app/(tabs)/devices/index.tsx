import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Card } from '../../../components/ui/Card';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

// Mock data - expanded for pagination demo
const devices = [
  { id: '1', name: 'Main Entrance', deviceId: 'DEV-001', status: 'Online', lastSync: '2 mins ago' },
  { id: '2', name: 'Back Door', deviceId: 'DEV-002', status: 'Offline', lastSync: '1 hour ago' },
  { id: '3', name: 'Server Room', deviceId: 'DEV-003', status: 'Online', lastSync: '5 mins ago' },
  { id: '4', name: 'Conference Room A', deviceId: 'DEV-004', status: 'Online', lastSync: '3 mins ago' },
  { id: '5', name: 'Conference Room B', deviceId: 'DEV-005', status: 'Online', lastSync: '1 min ago' },
  { id: '6', name: 'Parking Lot', deviceId: 'DEV-006', status: 'Offline', lastSync: '2 hours ago' },
  { id: '7', name: 'Rooftop Access', deviceId: 'DEV-007', status: 'Online', lastSync: '4 mins ago' },
  { id: '8', name: 'Storage Room', deviceId: 'DEV-008', status: 'Online', lastSync: '6 mins ago' },
];

const ITEMS_PER_PAGE = 5;

export default function DeviceList() {
  const router = useRouter();
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const visibleDevices = devices.slice(0, visibleCount);
  const hasMore = visibleCount < devices.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + ITEMS_PER_PAGE, devices.length));
  };

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-purple-50 to-white">
      <ScrollView className="flex-1">
        <View className="p-4">
          <View className="flex-row justify-between items-center mb-6">
              <Text className="text-2xl font-bold text-gray-800">{t('devices')}</Text>
              <TouchableOpacity 
                  onPress={() => router.push('/devices/add')}
                  activeOpacity={0.8}
              >
                <LinearGradient
                  colors={['#3b82f6', '#1d4ed8']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{ paddingHorizontal: 16, paddingVertical: 10, borderRadius: 8, flexDirection: 'row', alignItems: 'center', shadowColor: '#3b82f6', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 4 }}
                >
                  <Ionicons name="add-circle" size={18} color="white" style={{ marginRight: 6 }} />
                  <Text className="text-white font-semibold">{t('add_device')}</Text>
                </LinearGradient>
              </TouchableOpacity>
          </View>

          {visibleDevices.map((item) => (
            <Card key={item.id} className="mb-4">
              <View className="flex-row justify-between items-start">
                <View>
                  <Text className="text-lg font-semibold text-gray-800">{item.name}</Text>
                  <Text className="text-gray-500 text-sm">ID: {item.deviceId}</Text>
                </View>
                <LinearGradient
                  colors={item.status === 'Online' ? ['#10b981', '#059669'] : ['#ef4444', '#dc2626']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{ paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 }}
                >
                  <Text className="text-xs font-bold text-white">
                    {t(item.status.toLowerCase())}
                  </Text>
                </LinearGradient>
              </View>
              <View className="mt-3 pt-3 border-t border-gray-100 flex-row justify-between items-center">
                 <Text className="text-xs text-gray-400">{t('last_sync')}: {item.lastSync}</Text>
                 <TouchableOpacity onPress={() => console.log('Edit', item.id)}>
                    <Text className="text-blue-600 text-sm font-medium">{t('edit')}</Text>
                 </TouchableOpacity>
              </View>
            </Card>
          ))}

          {hasMore && (
            <TouchableOpacity 
              className="bg-gray-100 p-4 rounded-lg items-center mb-4"
              onPress={loadMore}
            >
              <Text className="text-gray-700 font-medium">{t('load_more')}</Text>
            </TouchableOpacity>
          )}

          {!hasMore && devices.length > ITEMS_PER_PAGE && (
            <View className="p-4 items-center">
              <Text className="text-gray-500 text-sm">{t('no_more_items')}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
