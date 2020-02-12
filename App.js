import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screen/Home';
import { DetailsScreen } from './src/component/Details';
import { SafeAreaView, View } from 'react-native';
import Navigator from './src/ReactNavigation';

// const Stack = createStackNavigator();

function App() {
  return (
    <React.Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#6b52aa' }} />
      <SafeAreaView style={{ flex: 1 }}>
        <Navigator />
      </SafeAreaView>
    </React.Fragment>
  );
}
export default App;
