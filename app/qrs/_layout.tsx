import { Stack } from 'expo-router';

export default function QrLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'QR Codes', headerShown: false }} />
      <Stack.Screen name="generate" options={{ title: 'Generate QR' }} />
    </Stack>
  );
}
