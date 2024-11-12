import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const orders = [
  {
    id: '1',
    name: 'Ferrari 488',
    image: 'https://sbraceengineering.co.uk/wp-content/uploads/Ferrari-488-GTB.jpg',
    price: '$250,000',
    description: 'A high-performance sports car with a powerful V8 engine.',
    shipmentStatus: 'In Transit',
  },
  {
    id: '2',
    name: 'Lamborghini Huracan',
    image: 'https://i.ytimg.com/vi/MG4AAcV9Pc0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDN_0jWQ5wpqcSgJ2QgYKvDwW_Dmw',
    price: '$300,000',
    description: 'A stunning supercar with a bold design and thrilling performance.',
    shipmentStatus: 'Delivered',
  },
  {
    id: '3',
    name: 'Porsche 911',
    image: 'https://mediaassets.pca.org/pages/pca/images/content/img_9(3).jpg',
    price: '$100,000',
    description: 'A classic sports car known for its precision engineering and luxury.',
    shipmentStatus: 'Processing',
  },
];

export default function Order() {
  const renderOrderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.carImage} />
      <Text style={styles.carName}>{item.name}</Text>
      <Text style={styles.carDescription}>{item.description}</Text>
      <Text style={styles.carPrice}>{item.price}</Text>
      <Text style={styles.shipmentStatus}>Status: {item.shipmentStatus}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Orders</Text>
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 15,
    elevation: 5,
    alignItems: 'center',
  },
  carImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  carName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  carDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginVertical: 5,
  },
  carPrice: {
    fontSize: 16,
    color: '#a31d1d',
    marginVertical: 5,
  },
  shipmentStatus: {
    fontSize: 14,
    color: '#777',
  },
});
