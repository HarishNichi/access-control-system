import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from '../ui/Card';
import { useRouter } from 'expo-router';

export function QuickActions() {
  const router = useRouter();

  return (
    <Card title="Quick Actions">
      <View className="flex-row flex-wrap gap-3">
        <TouchableOpacity 
          className="bg-blue-50 p-4 rounded-lg flex-1 min-w-[120px] items-center justify-center"
          onPress={() => router.push('/devices/add')}
        >
          <Text className="text-blue-600 font-medium">Add Device</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          className="bg-purple-50 p-4 rounded-lg flex-1 min-w-[120px] items-center justify-center"
          onPress={() => router.push('/devices')}
        >
          <Text className="text-purple-600 font-medium">View Devices</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          className="bg-green-50 p-4 rounded-lg flex-1 min-w-[120px] items-center justify-center"
          onPress={() => router.push('/pins')}
        >
          <Text className="text-green-600 font-medium">Manage PINs</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          className="bg-orange-50 p-4 rounded-lg flex-1 min-w-[120px] items-center justify-center"
          onPress={() => router.push('/qrs')}
        >
          <Text className="text-orange-600 font-medium">Manage QRs</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
}
