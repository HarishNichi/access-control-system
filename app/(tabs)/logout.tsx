// Dummy logout screen - immediately redirects to login
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';

export default function LogoutScreen() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/(auth)/login');
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-gray-50">
      <ActivityIndicator size="large" color="#2563eb" />
    </View>
  );
}
