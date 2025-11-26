import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from '../ui/Card';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { LinearGradient } from 'expo-linear-gradient';

export function QuickActions() {
  const router = useRouter();
  const { t } = useTranslation();

  const actions = [
    {
      titleKey: 'add_device',
      icon: 'add-circle',
      colors: ['#3b82f6', '#1d4ed8'],
      path: '/devices/add'
    },
    {
      titleKey: 'view_devices',
      icon: 'hardware-chip',
      colors: ['#8b5cf6', '#6d28d9'],
      path: '/devices'
    },
    {
      titleKey: 'manage_pins',
      icon: 'keypad',
      colors: ['#10b981', '#059669'],
      path: '/pins'
    },
    {
      titleKey: 'manage_qrs',
      icon: 'qr-code',
      colors: ['#f59e0b', '#d97706'],
      path: '/qrs'
    }
  ];

  return (
    <Card title={t('quick_actions')}>
      <View className="flex-row flex-wrap justify-between">
        {actions.map((action, index) => (
          <TouchableOpacity 
            key={index}
            className="w-[48%] mb-4"
            onPress={() => router.push(action.path as any)}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={action.colors}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ padding: 16, borderRadius: 12, alignItems: 'center', justifyContent: 'center', shadowColor: action.colors[0], shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 6 }}
            >
              <View className="mb-2 bg-white/20 p-3 rounded-full">
                <Ionicons name={action.icon as any} size={28} color="white" />
              </View>
              <Text className="text-white font-semibold text-center text-sm">{t(action.titleKey)}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </Card>
  );
}
