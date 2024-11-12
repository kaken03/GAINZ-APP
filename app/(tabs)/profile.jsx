import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const userProfile = {
  name: 'Ian Dave',
  email: 'iandave@gmail.com',
  phone: '+1 234 567 890',
  paymentMethod: 'Visa',
  cardNumber: '**** **** **** 1234',
  address: '123 Main St, Anytown, USA',
};

const favoriteCars = [
  {
    id: '1',
    name: 'Ferrari 488',
    image: 'https://sbraceengineering.co.uk/wp-content/uploads/Ferrari-488-GTB.jpg',
    description: 'A high-performance sports car with a powerful V8 engine.',
  },
  {
    id: '2',
    name: 'Lamborghini Huracan',
    image: 'https://i.ytimg.com/vi/MG4AAcV9Pc0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDN_0jWQ5wpqcSgJ2QgYKvDwW_Dmw',
    description: 'A stunning supercar with a bold design and thrilling performance.',
  },
  {
    id: '3',
    name: 'Porsche 911',
    image: 'https://mediaassets.pca.org/pages/pca/images/content/img_9(3).jpg',
    description: 'A classic sports car known for its precision engineering and luxury.',
  },
];

export default function Profile() {
  const navigation = useNavigation(); // Initialize navigation

  const handleLogout = () => {
    // Implement logout logic here (e.g., clear user data, token)
    alert('Logged out');
    navigation.navigate('Home'); // Navigate to homepage after logout
  };

  const renderFavoriteCar = ({ item }) => (
    <View style={styles.carCard}>
      <Image source={{ uri: item.image }} style={styles.carImage} />
      <Text style={styles.carName}>{item.name}</Text>
      <Text style={styles.carDescription}>{item.description}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://linktoyourprofileimage.com/profile.jpg' }}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>{userProfile.name}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>Profile Information</Text>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.info}>{userProfile.email}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.info}>{userProfile.phone}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Payment Method:</Text>
          <Text style={styles.info}>{userProfile.paymentMethod}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Card Number:</Text>
          <Text style={styles.info}>{userProfile.cardNumber}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.info}>{userProfile.address}</Text>
        </View>
      </View>

      <Text style={styles.title}>Favorite Cars</Text>
      <FlatList
        data={favoriteCars}
        renderItem={renderFavoriteCar}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carList}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('index')}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#a31d1d',
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#a31d1d',
    marginBottom: 15,
    textAlign: 'center',
  },
  infoCard: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  info: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  carList: {
    paddingVertical: 10,
  },
  carCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    elevation: 2,
    alignItems: 'center',
    width: 200,
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
  carDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginVertical: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#a31d1d',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 50,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
