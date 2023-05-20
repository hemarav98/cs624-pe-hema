import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const AddCountry = ({ addCountry }) => {
  const [country, setCountry] = useState('');
  const [currency, setCurrency] = useState('');

  const handleAddCountry = () => {
    if (country === '' || currency === '') {
      alert('Please complete the form');
      return;
    }

    addCountry({ country, currency });
    setCountry('');
    setCurrency('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Country</Text>
      <TextInput
        style={styles.input}
        placeholder="Country Name"
        value={country}
        onChangeText={text => setCountry(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Currency"
        value={currency}
        onChangeText={text => setCurrency(text)}
      />
      <TouchableOpacity onPress={handleAddCountry}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add Country</Text>
        </View>
      </TouchableOpacity>
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
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AddCountry;

