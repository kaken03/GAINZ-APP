import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

const carList = [
  {
    id: '1',
    name: 'Ferrari 488',
    image: 'https://sbraceengineering.co.uk/wp-content/uploads/Ferrari-488-GTB.jpg',
    price: '$250,000',
  },
  {
    id: '2',
    name: 'Lamborghini Huracan',
    image: 'https://i.ytimg.com/vi/MG4AAcV9Pc0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDN_0jWQ5wpqcSgJ2QgYKvDwW_Dmw',
    price: '$300,000',
  },
  {
    id: '3',
    name: 'Porsche 911',
    image: 'https://mediaassets.pca.org/pages/pca/images/content/img_9(3).jpg',
    price: '$100,000',
  },
  {
    id: '4',
    name: 'Bugatti Chiron',
    image: 'https://cdn.thisiswhyimbroke.com/images/bugatti-chiron-super-sport-golden-era-640x533.jpg',
    price: '$3,000,000',
  },
  {
    id: '5',
    name: 'Rolls-Royce Phantom',
    image: 'https://hips.hearstapps.com/hmg-prod/images/phantom-scintilla-private-collection-0-1-66b50a5eddd44.jpg?crop=0.832xw:0.832xh;0.0849xw,0.168xh&resize=1200:*',
    price: '$450,000',
  },
];

export default function Product() {
  const handleOrder = (carName) => {
    alert(`You have ordered a ${carName}!`);
  };

  const renderCarItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.carImage} />
      <Text style={styles.carName}>{item.name}</Text>
      <Text style={styles.carPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.orderButton} onPress={() => handleOrder(item.name)}>
        <Text style={styles.buttonText}>Order Now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Cars for Order</Text>
      <FlatList
        data={carList}
        renderItem={renderCarItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display items in two columns
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
    padding: 10,
    elevation: 5,
    alignItems: 'center',
    flex: 1, // Ensures equal width in a grid layout
  },
  carImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  carName: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  carPrice: {
    fontSize: 16,
    color: '#a31d1d',
    marginVertical: 5,
  },
  orderButton: {
    backgroundColor: '#a31d1d',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
