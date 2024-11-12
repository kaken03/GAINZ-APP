import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const navigation = useNavigation(); // Initialize navigation


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to AJINO-MOTO</Text>
      <Text style={styles.subtitle}>Your destination for branded cars</Text>
      <Link style={styles.buttonText} href="/home">
                Get Started 
            </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 36, // Increased font size for better visibility
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20, // Increased font size for better readability
    marginBottom: 30,
    color: '#555',
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff', // White text for better contrast
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#a31d1d',
    padding: 15,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
    textAlign: 'center',
  },
});
