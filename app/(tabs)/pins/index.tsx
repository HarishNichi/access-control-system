import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Card } from '../../../components/ui/Card';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const pins = [
  { id: '1', label: 'John - Main', pin: '****', device: 'Main Entrance', status: 'Active', expiry: '2025-12-31' },
  { id: '2', label: 'Guest - Back', pin: '****', device: 'Back Door', status: 'Expired', expiry: '2024-11-20' },
  { id: '3', label: 'John - Main', pin: '****', device: 'Main Entrance', status: 'Active', expiry: '2025-12-31' },
  { id: '4', label: 'Guest - Back', pin: '****', device: 'Back Door', status: 'Expired', expiry: '2024-11-20' },
  { id: '5', label: 'John - Main', pin: '****', device: 'Main Entrance', status: 'Active', expiry: '2025-12-31' },
  { id: '6', label: 'Guest - Back', pin: '****', device: 'Back Door', status: 'Expired', expiry: '2024-11-20' },
  { id: '7', label: 'John - Main', pin: '****', device: 'Main Entrance', status: 'Active', expiry: '2025-12-31' },
  { id: '8', label: 'Guest - Back', pin: '****', device: 'Back Door', status: 'Expired', expiry: '2024-11-20' },
  { id: '9', label: 'John - Main', pin: '****', device: 'Main Entrance', status: 'Active', expiry: '2025-12-31' },
  { id: '10', label: 'Guest - Back', pin: '****', device: 'Back Door', status: 'Expired', expiry: '2024-11-20' },
  { id: '11', label: 'John - Main', pin: '****', device: 'Main Entrance', status: 'Active', expiry: '2025-12-31' },
  { id: '12', label: 'Guest - Back', pin: '****', device: 'Back Door', status: 'Expired', expiry: '2024-11-20' },
  { id: '13', label: 'John - Main', pin: '****', device: 'Main Entrance', status: 'Active', expiry: '2025-12-31' },
  { id: '14', label: 'Guest - Back', pin: '****', device: 'Back Door', status: 'Expired', expiry: '2024-11-20' },
  { id: '15', label: 'John - Main', pin: '****', device: 'Main Entrance', status: 'Active', expiry: '2025-12-31' },
  { id: '16', label: 'Guest - Back', pin: '****', device: 'Back Door', status: 'Expired', expiry: '2024-11-20' },
];

const ITEMS_PER_PAGE = 5;

export default function PinList() {
  const router = useRouter();
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const visiblePins = pins.slice(0, visibleCount);
  const hasMore = visibleCount < pins.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + ITEMS_PER_PAGE, pins.length));
  };

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-green-50 to-white">
      <ScrollView className="flex-1">
        <View className="p-4">
          <View className="flex-row justify-between items-center mb-6">
              <Text className="text-2xl font-bold text-gray-800">{t('pins')}</Text>
              <TouchableOpacity 
                  onPress={() => router.push('/pins/create')}
                  activeOpacity={0.8}
              >
                <LinearGradient
                  colors={['#10b981', '#059669']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{ paddingHorizontal: 16, paddingVertical: 10, borderRadius: 8, flexDirection: 'row', alignItems: 'center', shadowColor: '#10b981', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 4 }}
                >
                  <Ionicons name="add-circle" size={18} color="white" style={{ marginRight: 6 }} />
                  <Text className="text-white font-semibold">{t('create_pin')}</Text>
                </LinearGradient>
              </TouchableOpacity>
          </View>

          {visiblePins.map((item) => (
            <Card key={item.id} className="mb-4">
              <View className="flex-row justify-between items-start">
                <View>
                  <Text className="text-lg font-semibold text-gray-800">{item.label}</Text>
                  <Text className="text-gray-500 text-sm">{item.device}</Text>
                </View>
                <LinearGradient
                  colors={item.status === 'Active' ? ['#10b981', '#059669'] : ['#ef4444', '#dc2626']}
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
                 <Text className="text-xs text-gray-400">{t('expires')}: {item.expiry}</Text>
                 <TouchableOpacity onPress={() => console.log('Reveal', item.id)}>
                    <Text className="text-blue-600 text-sm font-medium">{t('reveal')}</Text>
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

          {!hasMore && pins.length > ITEMS_PER_PAGE && (
            <View className="p-4 items-center">
              <Text className="text-gray-500 text-sm">{t('no_more_items')}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
