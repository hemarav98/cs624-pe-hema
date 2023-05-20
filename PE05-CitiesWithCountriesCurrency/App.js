import React, { Component, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AddCountry from './addCurrency/AddCountry';
import Countries from './addCurrency/Countries';

const Tab = createBottomTabNavigator();

export default function App() {
  const [countries, setCountries] = useState([]);

  const addCountry = country => {
    setCountries([...countries, country]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="AddCountry">
          {() => <AddCountry addCountry={addCountry} />}
        </Tab.Screen>
        <Tab.Screen name="Countries">
          {() => <Countries countries={countries} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

