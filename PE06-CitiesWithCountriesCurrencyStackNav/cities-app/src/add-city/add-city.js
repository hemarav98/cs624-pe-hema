import { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import package to generate unique IDs using uuidv4 method
import * as Crypto from 'expo-crypto';

// import custom theme
import { colors } from '../theme';

// component allows user to input a city & country
class AddCity extends Component {
  state = {
    city: '',
    country: ''
  }
  // function to capture user text input
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  // function to capture user submission
  submit = () => {
    // if incomplete submission, alert user
    if (this.state.city === '' || this.state.country === '') {
      alert('please complete form') 
    }
    // declare city object and its properties
    const city = {
      city: this.state.city,
      country: this.state.country,
      id: Crypto.randomUUID(),
      locations: []
    }
    //add to routing parameters
    this.props.route.params.addCity(city);
    //reset the state of the component
    this.setState({
      city: '',
      country: ''
    }, () => {
      //return to Cities view
      this.props.navigation.navigate('Cities')
    });
  }
  //render AddCity interface
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Cities</Text>
        <TextInput
          placeholder='City name'
          onChangeText={val => this.onChangeText('city', val)}
          style={styles.input}
          value={this.state.city}
        />
        <TextInput
          placeholder='Country name'
          onChangeText={val => this.onChangeText('country', val)}
          style={styles.input}
          value={this.state.country}
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add City</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center'
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50
  }
});

export default AddCity;
