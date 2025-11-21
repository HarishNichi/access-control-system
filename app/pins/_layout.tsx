import { Stack } from 'expo-router';

export default function PinLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'PINs', headerShown: false }} />
      <Stack.Screen name="create" options={{ title: 'Create PIN' }} />
    </Stack>
  );
}
