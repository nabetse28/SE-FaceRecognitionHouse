import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import Login from './src/index';
import Camera from './src/camera/index'

const MainStack = createStackNavigator({
  // Login: {
  //   screen: Login
  // },
  Camera: {
    screen: Camera
  }
});


const App = createAppContainer(MainStack);
export default App;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
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
