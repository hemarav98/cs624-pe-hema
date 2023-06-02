import { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';

// import custom center-message component
import CenterMessage from '../components/center-message';
// import custom theme
import { colors } from '../theme';

// create Countries page as a class component
class Countries extends Component {
  // style navigation header
  static navigationOptions = {
    title: 'Countries',
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400'
    }
  }
  navigate = (item) => {
    this.props.navigation.navigate('Country', { country: item });
  }
  render() {
    // destruct routing parameters to obtain countries array data
    const { countries } = this.props.route.params;
    return (
      // if countries array is empty, use CenterMessage to display default message
      <ScrollView  contentContainerStyle={[!countries.length && { flex: 1 }]}>
        <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
          {
            !countries.length && <CenterMessage message='No saved countries!' />
          }
          {
            // else, display the array of countries data
            countries.map((item, index) => (
              <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={index} >
                <View style={styles.countryContainer}>
                  <Text style={styles.country}>{item.country}</Text>
                  <Text style={styles.currency}>{item.currency}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  },
  country: {
    fontSize: 20,
  },
  currency: {
    color: 'rgba(0, 0, 0, .5)'
  },  
});

export default Countries;
