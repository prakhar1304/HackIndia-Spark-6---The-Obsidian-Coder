import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

// Define the type for the route params (if using TypeScript)
interface RouteParams {
  
    id: string;
    imageUrl: string;
    minBid: string;
  
}

const Detailed = () => {
  const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
  const { id  , imageUrl , minBid } = route.params; // Destructure nftData safely
  console.log("Received params:",  id,);


  if (!id) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No NFT data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.nftImage} />
      <Text style={styles.minBidText}>Minimum Bid: {minBid}</Text>
    </View>
  );
};

export default Detailed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  nftImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 10, // Adds rounded corners for a polished look
  },
  minBidText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});
