import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetails = ({ name, imageSrc, rating, reviewCount }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageSrc }} />
      <Text style={styles.name}>{name}</Text>
      <Text>
        {rating} Stars, {reviewCount} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginLeft: 15 },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ResultsDetails;
