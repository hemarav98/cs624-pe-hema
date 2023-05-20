import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Countries = ({ countries }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Countries</Text>
      {countries.map((country, index) => (
        <View key={index} style={styles.countryContainer}>
          <Text style={styles.countryName}>{country.name}</Text>
          <Text style={styles.currency}>{country.currency}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  countryName: {
    marginRight: 10,
  },
  currency: {
    fontWeight: 'bold',
  },
});

export default Countries;

