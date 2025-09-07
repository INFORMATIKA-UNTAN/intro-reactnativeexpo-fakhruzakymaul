//import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text testID="welcome-text">Hello, React Native!</Text>
      <Text testID="nama-name">Nama: Muhammad Fakhruzaky Maulyandri</Text>
      <Text testID="nim-nim">NIM: D1041211030</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f9ff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
