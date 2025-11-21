import { View, Text } from 'react-native';
import { Card } from '../ui/Card';

const activities = [
  { id: '1', user: 'John Doe', device: 'Main Entrance', method: 'PIN', time: '10:30 AM', status: 'Success' },
  { id: '2', user: 'Jane Smith', device: 'Back Door', method: 'QR', time: '10:15 AM', status: 'Success' },
  { id: '3', user: 'Guest', device: 'Main Entrance', method: 'PIN', time: '09:45 AM', status: 'Failed' },
  { id: '4', user: 'Admin', device: 'Server Room', method: 'Remote', time: '09:00 AM', status: 'Success' },
];

export function RecentActivity() {
  return (
    <Card title="Recent Activity" className="mb-6">
      {activities.map((item) => (
        <View key={item.id} className="flex-row justify-between items-center py-3 border-b border-gray-100 last:border-0">
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
      ))}
    </Card>
  );
}
