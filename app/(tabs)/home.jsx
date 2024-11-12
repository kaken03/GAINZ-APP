import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native';

const bestSellingCars = [
  {
    id: '1',
    name: 'Ferrari 488',
    image: 'https://sbraceengineering.co.uk/wp-content/uploads/Ferrari-488-GTB.jpg',
    description: 'A high-performance sports car with a powerful V8 engine.',
  },
  {
    id: '2',
    name: 'Lamborghini Huracan',
    image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/2023/model_chooser/huracan_evo_spyder_m.jpg',
    description: 'A stunning supercar with a bold design and thrilling performance.',
  },
  {
    id: '3',
    name: 'Porsche 911',
    image: 'https://img.etimg.com/thumb/width-420,height-315,imgsize-58280,resizemode-75,msid-110533985/industry/auto/cars-uvs/porsche-911-hybrid-unveiled-here-are-price-launch-dates-performance-speed-and-other-details/porsche.jpg',
    description: 'A classic sports car known for its precision engineering and luxury.',
  },
];

const mostExpensiveCars = [
  {
    id: '1',
    name: 'Bugatti Chiron',
    image: 'https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2023/Bugatti-Models/Sport/Gallery/CS_1.jpg',
    description: 'The epitome of luxury with a quad-turbocharged W16 engine.',
  },
  {
    id: '2',
    name: 'Pagani Zonda HP Barchetta',
    image: 'https://imageresizer.static9.net.au/XQcmcPch4esCCIfHcdPtXbhSHVw=/1200x900/https%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2F2018%2F07%2F26%2F16%2F48%2Fzonda-hero.jpg',
    description: 'A limited edition hypercar with a stunning design and performance.',
  },
  {
    id: '3',
    name: 'Rolls-Royce Sweptail',
    image: 'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/2-6-10-coachbuild--sweptail/components/rolls-royce-front-grille-08-headline-on-the-interior-sweptail-verticalscroll-v4.jpg/jcr:content/renditions/original',
    description: 'A bespoke luxury car with an unparalleled level of craftsmanship.',
  },
];

export default function Home() {
  const renderCarItem = ({ item }) => (
    <View style={styles.carCard}>
      <Image source={{ uri: item.image }} style={styles.carImage} />
      <Text style={styles.carName}>{item.name}</Text>
      <Text style={styles.carDescription}>{item.description}</Text>
    </View>
  );

  return (
    <ImageBackground 
      source={{ uri: 'https://linktoyourbackgroundimage.com/background.jpg' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>AJINO-MOTO</Text>
          <Text style={styles.appDescription}>
            AJINO-MOTO is your premier destination for buying branded and luxury cars.
            Explore our top-selling and most expensive models to find your dream car today!
          </Text>

          <Text style={styles.sectionTitle}>Top 3 Best-Selling Cars</Text>
          <FlatList
            data={bestSellingCars}
            renderItem={renderCarItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.list}
          />

          <Text style={styles.sectionTitle}>Top 3 Most Expensive Cars</Text>
          <FlatList
            data={mostExpensiveCars}
            renderItem={renderCarItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.list}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#a31d1d', // Gold color for better visibility
    backgroundColor: 'white',
    borderRadius: 20,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginBottom: 10,
  },
  appDescription: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 20,
  },
  list: {
    paddingVertical: 10,
  },
  carCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 5,
    elevation: 5,
    alignItems: 'center',
    width: 200,
    height: 300,
  },
  carImage: {
    width: 180,
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
  },
});
