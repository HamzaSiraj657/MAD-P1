
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#6200ee', padding: 16 },
  title: { color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
});

export default Header;
