import { View, Text } from 'react-native';
import { Card } from '../ui/Card';
import { useTranslation } from 'react-i18next';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export function SummaryWidgets() {
  const { t } = useTranslation();
  
  return (
    <View className="flex-row flex-wrap gap-4 mb-6">
      <View className="flex-1 min-w-[150px]">
        <LinearGradient
          colors={['#3b82f6', '#06b6d4']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ borderRadius: 12, padding: 16, shadowColor: '#3b82f6', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 6 }}
        >
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-white text-sm font-semibold opacity-90">{t('total_pins')}</Text>
            <View className="bg-white/20 p-2 rounded-lg">
              <Ionicons name="keypad" size={20} color="white" />
            </View>
          </View>
          <Text className="text-4xl font-bold text-white">124</Text>
          <Text className="text-white/80 mt-1 text-sm">{t('active')}: 110</Text>
        </LinearGradient>
      </View>

      <View className="flex-1 min-w-[150px]">
        <LinearGradient
          colors={['#10b981', '#14b8a6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ borderRadius: 12, padding: 16, shadowColor: '#10b981', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 6 }}
        >
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-white text-sm font-semibold opacity-90">{t('total_qrs')}</Text>
            <View className="bg-white/20 p-2 rounded-lg">
              <Ionicons name="qr-code" size={20} color="white" />
            </View>
          </View>
          <Text className="text-4xl font-bold text-white">45</Text>
          <Text className="text-white/80 mt-1 text-sm">{t('active')}: 40</Text>
        </LinearGradient>
      </View>

      <View className="flex-1 min-w-[150px]">
        <LinearGradient
          colors={['#8b5cf6', '#ec4899']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ borderRadius: 12, padding: 16, shadowColor: '#8b5cf6', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 6 }}
        >
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-white text-sm font-semibold opacity-90">{t('devices')}</Text>
            <View className="bg-white/20 p-2 rounded-lg">
              <Ionicons name="hardware-chip" size={20} color="white" />
            </View>
          </View>
          <Text className="text-4xl font-bold text-white">8</Text>
          <Text className="text-white/80 mt-1 text-sm">{t('online')}: 6</Text>
        </LinearGradient>
      </View>
    </View>
  );
}
