import { View, Text, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { Slot, useRouter, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function WebLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: 'home-outline', path: '/' },
    { name: 'Devices', icon: 'hardware-chip-outline', path: '/devices' },
    { name: 'PINs', icon: 'keypad-outline', path: '/pins' },
    { name: 'QR Codes', icon: 'qr-code-outline', path: '/qrs' },
    { name: 'Logs', icon: 'list-outline', path: '/logs' },
  ];

  const getTitle = () => {
    if (pathname === '/') return 'Dashboard';
    if (pathname.startsWith('/devices')) return 'Device Management';
    if (pathname.startsWith('/pins')) return 'PIN Management';
    if (pathname.startsWith('/qrs')) return 'QR Code Management';
    if (pathname.startsWith('/logs')) return 'Access Logs';
    return 'Access Control';
  };

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const SidebarContent = ({ onClose }: { onClose?: () => void }) => (
    <>
      <View className="p-6 border-b border-gray-200 items-center flex-row gap-3">
        <View className="w-8 h-8 bg-blue-600 rounded-lg items-center justify-center">
            <Ionicons name="shield-checkmark" size={20} color="white" />
        </View>
        <Text className="text-xl font-bold text-gray-800">ACS Admin</Text>
      </View>
      
      <ScrollView className="flex-1 py-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
          return (
            <TouchableOpacity
              key={item.name}
              className={`flex-row items-center px-6 py-3 mb-1 mx-2 rounded-lg ${isActive ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
              onPress={() => {
                router.push(item.path);
                if (onClose) onClose();
              }}
            >
              <Ionicons 
                name={item.icon as any} 
                size={20} 
                color={isActive ? '#2563eb' : '#64748b'} 
              />
              <Text className={`ml-3 font-medium ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View className="p-4 border-t border-gray-200">
          <TouchableOpacity className="flex-row items-center px-4 py-2">
              <Ionicons name="log-out-outline" size={20} color="#64748b" />
              <Text className="ml-3 text-gray-600 font-medium">Logout</Text>
          </TouchableOpacity>
      </View>
    </>
  );

  return (
    <View className="flex-1 flex-row bg-gray-100 h-screen">
      {/* Fixed Sidebar for Large Screens */}
      <View className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col h-full">
        <SidebarContent />
      </View>

      {/* Main Content Area */}
      <View className="flex-1 flex-col h-screen overflow-hidden relative">
        {/* Header */}
        <View className="h-16 bg-white border-b border-gray-200 flex-row items-center justify-between px-4 z-20">
          <View className="flex-row items-center gap-4">
            {/* Hamburger Menu - Hidden on Large Screens */}
            <TouchableOpacity onPress={toggleDrawer} className="lg:hidden">
              <Ionicons name="menu" size={28} color="#1f2937" />
            </TouchableOpacity>
            <Text className="text-xl font-semibold text-gray-800">{getTitle()}</Text>
          </View>
          <View className="flex-row items-center gap-4">
               <TouchableOpacity>
                  <Ionicons name="notifications-outline" size={24} color="#64748b" />
               </TouchableOpacity>
               <View className="w-8 h-8 bg-gray-200 rounded-full items-center justify-center">
                  <Text className="text-gray-600 font-bold">AD</Text>
               </View>
          </View>
        </View>

        {/* Drawer Overlay & Sidebar for Small/Medium Screens */}
        {isDrawerOpen && (
            <>
                <Pressable 
                    className="absolute inset-0 bg-black/50 z-30 lg:hidden" 
                    onPress={() => setIsDrawerOpen(false)}
                />
                <View className="absolute top-0 left-0 bottom-0 w-64 bg-white border-r border-gray-200 flex-col z-40 h-full shadow-lg lg:hidden">
                    <SidebarContent onClose={() => setIsDrawerOpen(false)} />
                </View>
            </>
        )}

        {/* Page Content */}
        <View className="flex-1 overflow-hidden bg-gray-50">
            <View className="flex-1 overflow-auto p-0">
                <Slot />
            </View>
        </View>
      </View>
    </View>
  );
}
