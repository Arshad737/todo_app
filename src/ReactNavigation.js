import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import Home from './screen/Home';
import { DetailsScreen } from './component/Details';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { COLOR_PRIMARY } from './styles/common';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Todo App',
            headerStyle: {
              backgroundColor: COLOR_PRIMARY
            },
            headerTitleStyle: { color: '#fff', fontWeight: 'bold' }
          }}
        />
        <Stack.Screen
          name='Details'
          component={DetailsScreen}
          options={{
            title: 'Todo App',
            headerStyle: {
              backgroundColor: COLOR_PRIMARY
            },
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 24
            },
            headerBackImage: () => (
              <Icon name='arrow-left' size={24} color='#fff' />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
