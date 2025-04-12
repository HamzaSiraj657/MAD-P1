import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

const products = [
  {
    id: '1',
    name: 'Bag',
    description: 'This is a great Bag..',
    price: '$19.99',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeabKGd2eoRHwSftd2mVWFuyY7d0gH-Efclg&s',
  },
  {
    id: '2',
    name: 'Blue Umbrella',
    description: 'Amazing quality of Blue Umbrella.',
    price: '$29.99',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmplby-uBh-xAhlZdMqu0iYWXexpH__5g1vw&s',
  },
  {
    id: '3',
    name: 'Red Jacket',
    description: 'Comfortable and trendy Red Jacket.',
    price: '$39.99',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYt311SaLqNko3hhCowNj2VtVJMgOyvXCUqQ&s',
  },
  {
    id: '4',
    name: 'Laptop',
    description: 'Stylish and durable Laptop.',
    price: '$49.99',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGozeH8GhWlv_zGyUufOkA5mMbf6V3lsazg&s',
  },
];

const ProductsScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Products" />
      <FlatList
        contentContainerStyle={styles.content}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 16 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  image: { width: 150, height: 150, borderRadius: 10 },
  name: { marginTop: 10, fontSize: 18, fontWeight: 'bold' },
  description: { fontSize: 14, color: '#666', marginTop: 5, textAlign: 'center' },
  price: { marginTop: 8, fontSize: 16, fontWeight: '600', color: '#2c3e50' },
});

export default ProductsScreen;
