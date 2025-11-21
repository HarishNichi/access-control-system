import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SummaryWidgets } from '../components/Dashboard/SummaryWidgets';
import { RecentActivity } from '../components/Dashboard/RecentActivity';
import { QuickActions } from '../components/Dashboard/QuickActions';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text className="text-2xl font-bold mb-6 text-gray-800">Dashboard</Text>
        <SummaryWidgets />
        <RecentActivity />
        <QuickActions />
      </ScrollView>
    </SafeAreaView>
  );
}
