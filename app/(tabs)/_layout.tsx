import { Tabs, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import '../../global.css';
import '../../i18n'; // Import i18n config
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../../components/LanguageSwitcher';
import { View, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Layout() {
  const { t } = useTranslation();
  const router = useRouter();

  const HeaderLeft = () => (
    <View style={{ paddingLeft: 16 }}>
      <LanguageSwitcher />
    </View>
  );

  const HeaderTitle = () => (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <LinearGradient
        colors={['#8b5cf6', '#ec4899']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ 
          width: 32, 
          height: 32, 
          borderRadius: 8, 
          alignItems: 'center', 
          justifyContent: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5
        }}
      >
        <Ionicons name="shield-checkmark" size={20} color="white" />
      </LinearGradient>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>ACS</Text>
    </View>
  );

  const HeaderRight = () => (
    <View style={{ paddingRight: 16 }}>
      <TouchableOpacity onPress={() => router.replace('/(auth)/login')}>
        <Ionicons name="log-out-outline" size={24} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#8b5cf6',
      tabBarInactiveTintColor: '#9ca3af',
      tabBarStyle: {
        backgroundColor: '#ffffff',
        borderTopWidth: 0,
        elevation: 8,
        shadowColor: '#8b5cf6',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        paddingBottom: 4,
        height: 60,
      },
      headerStyle: {
        backgroundColor: '#8b5cf6',
        elevation: 4,
        shadowOpacity: 0.3,
      },
      headerTintColor: '#ffffff',
      headerLeft: () => <HeaderLeft />,
      headerTitle: () => <HeaderTitle />,
      headerRight: () => <HeaderRight />,
    }}>
      {/* Hide login from tabs */}
      <Tabs.Screen 
        name="login" 
        options={{ 
          href: null,
        }} 
      />
      
      <Tabs.Screen 
        name="index" 
        options={{ 
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
          tabBarLabel: t('dashboard'),
        }} 
      />
      <Tabs.Screen 
        name="devices/index" 
        options={{ 
          tabBarIcon: ({ color }) => <Ionicons name="hardware-chip-outline" size={24} color={color} />,
          tabBarLabel: t('devices'),
          headerShown: false,
        }} 
      />
      <Tabs.Screen 
        name="devices/add" 
        options={{ 
          href: null,
        }} 
      />
      <Tabs.Screen 
        name="pins/index" 
        options={{ 
          tabBarIcon: ({ color }) => <Ionicons name="keypad-outline" size={24} color={color} />,
          tabBarLabel: t('pins'),
          headerShown: false,
        }} 
      />
      <Tabs.Screen 
        name="pins/create" 
        options={{ 
          href: null,
        }} 
      />
      <Tabs.Screen 
        name="qrs/index" 
        options={{ 
          tabBarIcon: ({ color }) => <Ionicons name="qr-code-outline" size={24} color={color} />,
          tabBarLabel: t('qr_codes'),
          headerShown: false,
        }} 
      />
      <Tabs.Screen 
        name="qrs/generate" 
        options={{ 
          href: null,
        }} 
      />
      <Tabs.Screen 
        name="logs/index" 
        options={{ 
          tabBarIcon: ({ color }) => <Ionicons name="list-outline" size={24} color={color} />,
          tabBarLabel: t('logs'),
          headerShown: false,
        }} 
      />
      {/* Hide logout screen */}
      <Tabs.Screen 
        name="logout" 
        options={{ 
          href: null,
        }} 
      />
    </Tabs>
  );
}
