import { View, Text, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { Slot, useRouter, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export default function WebLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { t } = useTranslation();

  const menuItems = [
    { name: 'dashboard', icon: 'home-outline', path: '/' },
    { name: 'devices', icon: 'hardware-chip-outline', path: '/devices' },
    { name: 'pins', icon: 'keypad-outline', path: '/pins' },
    { name: 'qr_codes', icon: 'qr-code-outline', path: '/qrs' },
    { name: 'logs', icon: 'list-outline', path: '/logs' },
  ];

  const getTitle = () => {
    if (pathname === '/') return t('dashboard');
    if (pathname.startsWith('/devices')) return t('devices');
    if (pathname.startsWith('/pins')) return t('pins');
    if (pathname.startsWith('/qrs')) return t('qr_codes');
    if (pathname.startsWith('/logs')) return t('logs');
    return 'Access Control';
  };

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const SidebarContent = ({ onClose, isMobile }: { onClose?: () => void; isMobile?: boolean }) => (
    <>
      <View className="h-16 px-6 border-b border-indigo-400 flex-row items-center gap-3 bg-indigo-600">
        <View className="w-8 h-8 bg-white rounded-lg items-center justify-center shadow-md">
            <Ionicons name="shield-checkmark" size={20} color="#6366f1" />
        </View>
        {!isCollapsed && <Text className="text-xl font-bold text-white">ACS Admin</Text>}
      </View>
      
      <ScrollView className="flex-1 py-4 bg-white">
        {menuItems.map((item) => {
          const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
          return (
            <TouchableOpacity
              key={item.name}
              className={`flex-row items-center px-6 py-3 mb-1 mx-2 rounded-lg ${isActive ? 'bg-indigo-600 shadow-md' : 'hover:bg-indigo-50'}`}
              onPress={() => {
                router.push(item.path);
                if (onClose) onClose();
              }}
            >
              <Ionicons 
                name={item.icon as any} 
                size={20} 
                color={isActive ? '#ffffff' : '#6366f1'} 
              />
              {(!isCollapsed || isMobile) && (
                <Text className={`ml-3 font-medium ${isActive ? 'text-white' : 'text-indigo-600'}`}>
                  {t(item.name)}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Only show collapse button on desktop */}
      {!isMobile && (
        <View className="p-4 border-t border-indigo-200 bg-indigo-50">
            <TouchableOpacity 
              className="flex-row items-center px-4 py-2 bg-white rounded-lg shadow-sm border border-indigo-200"
              onPress={toggleCollapse}
            >
                <Ionicons name={isCollapsed ? "chevron-forward-outline" : "chevron-back-outline"} size={20} color="#6366f1" />
                {!isCollapsed && <Text className="ml-3 text-indigo-600 font-medium">Collapse</Text>}
            </TouchableOpacity>
        </View>
      )}
    </>
  );

  return (
    <View className="flex-1 flex-row bg-gray-50 h-screen">
      {/* Fixed Sidebar for Large Screens */}
      <View className={`hidden lg:flex ${isCollapsed ? 'w-20' : 'w-64'} bg-white shadow-xl flex-col h-full transition-all border-r border-gray-200`}>
        <SidebarContent />
      </View>

      {/* Main Content Area */}
      <View className="flex-1 flex-col h-screen overflow-hidden relative">
        {/* Header */}
        <View className="h-16 bg-teal-600 shadow-lg flex-row items-center justify-between px-6 z-20">
          <View className="flex-row items-center gap-4">
            {/* Hamburger Menu - Hidden on Large Screens */}
            <TouchableOpacity onPress={toggleDrawer} className="lg:hidden">
              <Ionicons name="menu" size={28} color="#ffffff" />
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center gap-4 relative">
               <LanguageSwitcher />
               <TouchableOpacity 
                  className="w-9 h-9 bg-orange-500 rounded-full items-center justify-center shadow-lg"
                  onPress={() => setShowUserMenu(!showUserMenu)}
               >
                  <Text className="text-white font-bold text-sm">AD</Text>
               </TouchableOpacity>
               
               {/* User Dropdown Menu */}
               {showUserMenu && (
                  <>
                     <Pressable 
                        className="fixed inset-0 z-30"
                        onPress={() => setShowUserMenu(false)}
                     />
                     <View className="absolute top-12 right-0 w-48 bg-white rounded-lg shadow-xl border border-gray-100 z-40">
                        <TouchableOpacity 
                           className="flex-row items-center px-4 py-3 hover:bg-blue-50 rounded-lg"
                           onPress={() => {
                              setShowUserMenu(false);
                              router.replace('/(auth)/login');
                           }}
                        >
                           <Ionicons name="log-out-outline" size={20} color="#ef4444" />
                           <Text className="ml-3 text-gray-700 font-medium">{t('logout')}</Text>
                        </TouchableOpacity>
                     </View>
                  </>
               )}
          </View>
        </View>

        {/* Drawer Overlay & Sidebar for Small/Medium Screens */}
        {isDrawerOpen && (
            <>
                <Pressable 
                    className="absolute inset-0 bg-black/50 z-30 lg:hidden" 
                    onPress={() => setIsDrawerOpen(false)}
                />
                <View className="absolute top-0 left-0 bottom-0 w-64 bg-white flex-col z-40 h-full shadow-2xl lg:hidden">
                    <SidebarContent onClose={() => setIsDrawerOpen(false)} isMobile={true} />
                </View>
            </>
        )}

        {/* Page Content */}
        <View className="flex-1 overflow-hidden bg-gray-100">
            <View className="flex-1 overflow-auto">
                {/* Max-width container for large screens */}
                <View className="w-full max-w-7xl mx-auto">
                    <Slot />
                </View>
            </View>
        </View>
      </View>
    </View>
  );
}
