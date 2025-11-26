import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Card } from '../../../components/ui/Card';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const qrs = [
  { id: '1', label: 'Visitor Pass', device: 'Main Entrance', status: 'Active', expiry: '2025-12-31' },
  { id: '2', label: 'Contractor', device: 'Back Door', status: 'Expired', expiry: '2024-11-20' },
  { id: '3', label: 'Delivery Access', device: 'Loading Dock', status: 'Active', expiry: '2025-12-31' },
  { id: '4', label: 'VIP Guest', device: 'Main Entrance', status: 'Active', expiry: '2025-11-30' },
  { id: '5', label: 'Maintenance', device: 'Server Room', status: 'Active', expiry: '2025-12-15' },
  { id: '6', label: 'Temp Worker', device: 'Back Door', status: 'Expired', expiry: '2024-10-01' },
  { id: '7', label: 'Event Staff', device: 'Conference Room', status: 'Active', expiry: '2025-12-20' },
];

const ITEMS_PER_PAGE = 5;

export default function QrList() {
  const router = useRouter();
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const visibleQrs = qrs.slice(0, visibleCount);
  const hasMore = visibleCount < qrs.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + ITEMS_PER_PAGE, qrs.length));
  };

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-orange-50 to-white">
      <ScrollView className="flex-1">
        <View className="p-4">
          <View className="flex-row justify-between items-center mb-6">
              <Text className="text-2xl font-bold text-gray-800">{t('qr_codes')}</Text>
              <TouchableOpacity 
                  onPress={() => router.push('/qrs/generate')}
                  activeOpacity={0.8}
              >
                <LinearGradient
                  colors={['#f59e0b', '#d97706']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{ paddingHorizontal: 16, paddingVertical: 10, borderRadius: 8, flexDirection: 'row', alignItems: 'center', shadowColor: '#f59e0b', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 4 }}
                >
                  <Ionicons name="add-circle" size={18} color="white" style={{ marginRight: 6 }} />
                  <Text className="text-white font-semibold">{t('generate_qr')}</Text>
                </LinearGradient>
              </TouchableOpacity>
          </View>

          {visibleQrs.map((item) => (
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
                 <TouchableOpacity onPress={() => console.log('View QR', item.id)}>
                    <Text className="text-blue-600 text-sm font-medium">{t('view_qr')}</Text>
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

          {!hasMore && qrs.length > ITEMS_PER_PAGE && (
            <View className="p-4 items-center">
              <Text className="text-gray-500 text-sm">{t('no_more_items')}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
