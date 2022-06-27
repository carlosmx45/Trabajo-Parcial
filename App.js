import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Select from './Select';
import Game from './Game';
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon: () => <Image source={require('./images/casa.png')} style={{width: 20, height: 20}}/>}}/>
        <Tab.Screen name="Select" component={Select} options={{tabBarIcon: () => <Image source={require('./images/Options.png')} style={{width: 20, height: 20}}/>}}/>
        <Tab.Screen name="Game" component={Game} options={{tabBarButton: () => null}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}