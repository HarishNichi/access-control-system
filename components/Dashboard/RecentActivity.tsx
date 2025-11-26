import { View, Text } from 'react-native';
import { Card } from '../ui/Card';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

const activities = [
  { id: '1', user: 'John Doe', device: 'Main Entrance', method: 'PIN', time: '10:30 AM', status: 'Success' },
  { id: '2', user: 'Jane Smith', device: 'Back Door', method: 'QR', time: '10:15 AM', status: 'Success' },
  { id: '3', user: 'Guest', device: 'Main Entrance', method: 'PIN', time: '09:45 AM', status: 'Failed' },
  { id: '4', user: 'Admin', device: 'Server Room', method: 'Remote', time: '09:00 AM', status: 'Success' },
];

export function RecentActivity() {
  const { t } = useTranslation();
  
  return (
    <Card title={t('recent_activity')} className="mb-6">
      {activities.map((item) => (
        <View key={item.id} className={`flex-row justify-between items-center py-3 px-3 rounded-lg mb-2 ${item.status === 'Success' ? 'bg-green-50' : 'bg-red-50'}`}>
          <View className="flex-row items-center flex-1">
            <View className={`p-2 rounded-full mr-3 ${item.status === 'Success' ? 'bg-green-100' : 'bg-red-100'}`}>
              <Ionicons 
                name={item.status === 'Success' ? 'checkmark-circle' : 'close-circle'} 
                size={20} 
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
    </Card>
  );
}
