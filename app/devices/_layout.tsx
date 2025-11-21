import { Stack } from 'expo-router';

export default function DeviceLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Devices', headerShown: false }} />
      <Stack.Screen name="add" options={{ title: 'Add Device' }} />
    </Stack>
  );
}
