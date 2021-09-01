import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import loginScreen from './src/screen/loginScreen';
import registerScreen from './src/screen/registerScreen';
import profileScreen from './src/screen/profileScreen';
import { NavigationContainer } from '@react-navigation/native';

const navigator = createStackNavigator({
  Login: loginScreen,
  Register: registerScreen,
  Profile: profileScreen
}, {   
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    title: 'App'
  }
});

export default createAppContainer(navigator);


// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator }






