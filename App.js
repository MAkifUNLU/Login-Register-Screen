import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import loginScreen from './src/screen/loginScreen';
import registerScreen from './src/screen/registerScreen';
import profileScreen from './src/screen/profileScreen';

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











// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
