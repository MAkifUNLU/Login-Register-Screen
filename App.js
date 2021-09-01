import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginScreen from './src/screen/loginScreen';
import registerScreen from './src/screen/registerScreen';
import profileScreen from './src/screen/profileScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name="Register" component={registerScreen} />
        <Stack.Screen name="Profile" component={profileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;











// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';



// const App = () => {
//   return (
//     <NavigationContainer>
//       
//     </NavigationContainer>
//   );
// };

// export default App;





