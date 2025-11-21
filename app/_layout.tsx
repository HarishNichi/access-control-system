import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import '../global.css';

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#2563eb' }}>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
        }} 
      />
      <Tabs.Screen 
        name="devices" 
        options={{ 
          title: 'Devices',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="hardware-chip-outline" size={24} color={color} />,
        }} 
      />
      <Tabs.Screen 
        name="pins" 
        options={{ 
          title: 'PINs',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="keypad-outline" size={24} color={color} />,
        }} 
      />
      <Tabs.Screen 
        name="qrs" 
        options={{ 
          title: 'QR Codes',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="qr-code-outline" size={24} color={color} />,
        }} 
      />
      <Tabs.Screen 
        name="logs" 
        options={{ 
          title: 'Logs',
          tabBarIcon: ({ color }) => <Ionicons name="list-outline" size={24} color={color} />,
        }} 
      />
    </Tabs>
  );
}
