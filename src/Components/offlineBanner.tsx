import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { WifiOff } from 'lucide-react-native';

const OfflineBanner: React.FC = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected === true);
    });

    return () => unsubscribe();
  }, []);

 
  if (isConnected) return null;

  return (
    <View style={styles.container}>
      <WifiOff size={16} color="#fff" />
      <Text style={styles.text}>Sem conexão com a internet. Exibindo dados em cache!</Text>
    </View>
  );
};

export default OfflineBanner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 13,
    marginLeft: 6, 
  }
});


