import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Header title="Home" />
      <View style={styles.content}>
        
        <Text style={styles.welcome}>Welcome to Our Store!</Text>
        <Text style={styles.subtext}>Find the best products with unbeatable prices.</Text>
        <View style={styles.buttonContainer}>
          <Button title="Go to Products" onPress={() => navigation.navigate('Products')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Contact Us" onPress={() => navigation.navigate('Contact')} />
        </View>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  logo: { width: 100, height: 100, marginBottom: 20 },
  welcome: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtext: { fontSize: 16, color: '#555', textAlign: 'center', marginBottom: 30 },
  buttonContainer: { marginVertical: 8, width: '80%' },
});

export default HomeScreen;
