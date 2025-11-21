import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from '../ui/Card';
import { useRouter } from 'expo-router';

export function QuickActions() {
  const router = useRouter();

  const actions = [
    {
      title: 'Add Device',
      icon: 'add-circle-outline',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      path: '/devices/add'
    },
    {
      title: 'View Devices',
      icon: 'hardware-chip-outline',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      path: '/devices'
    },
    {
      title: 'Manage PINs',
      icon: 'keypad-outline',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      path: '/pins'
    },
    {
      title: 'Manage QRs',
      icon: 'qr-code-outline',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      path: '/qrs'
    }
  ];

  return (
    <Card title="Quick Actions">
      <View className="flex-row flex-wrap justify-between">
        {actions.map((action, index) => (
          <TouchableOpacity 
            key={index}
            className={`${action.bgColor} p-4 rounded-xl w-[48%] mb-4 items-center justify-center shadow-sm active:opacity-70`}
            onPress={() => router.push(action.path as any)}
          >
            <View className="mb-2 bg-white/50 p-2 rounded-full">
              <Ionicons name={action.icon as any} size={24} className={action.color} color={action.color.replace('text-', '').replace('-600', '') === 'blue' ? '#2563eb' : action.color.replace('text-', '').replace('-600', '') === 'purple' ? '#9333ea' : action.color.replace('text-', '').replace('-600', '') === 'green' ? '#16a34a' : '#ea580c'} />
            </View>
            <Text className={`${action.color} font-semibold text-center`}>{action.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Card>
  );
}
