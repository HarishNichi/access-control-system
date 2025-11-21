import { View, Text, ViewProps } from 'react-native';

interface CardProps extends ViewProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, children, className, ...props }: CardProps) {
  return (
    <View className={`bg-white p-4 rounded-lg shadow-sm border border-gray-200 ${className || ''}`} {...props}>
      {title && <Text className="text-lg font-semibold mb-4 text-gray-800">{title}</Text>}
      {children}
    </View>
  );
}
