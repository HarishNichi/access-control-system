import { View, Text } from 'react-native';
import { Card } from '../ui/Card';

export function SummaryWidgets() {
  return (
    <View className="flex-row flex-wrap gap-4 mb-6">
      <Card className="flex-1 min-w-[150px]" title="Total PINs">
        <View>
            <Text className="text-3xl font-bold text-blue-600">124</Text>
            <Text className="text-gray-500 mt-1">Active: 110</Text>
        </View>
      </Card>
      <Card className="flex-1 min-w-[150px]" title="Total QRs">
        <View>
            <Text className="text-3xl font-bold text-green-600">45</Text>
            <Text className="text-gray-500 mt-1">Active: 40</Text>
        </View>
      </Card>
       <Card className="flex-1 min-w-[150px]" title="Devices">
        <View>
            <Text className="text-3xl font-bold text-purple-600">8</Text>
            <Text className="text-gray-500 mt-1">Online: 6</Text>
        </View>
      </Card>
    </View>
  );
}
