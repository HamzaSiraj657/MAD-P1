
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2025 YourApp. All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#f1f1f1', padding: 10, alignItems: 'center' },
  text: { fontSize: 12, color: '#777' },
});

export default Footer;
