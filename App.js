/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// screens
import Introduction from './app/screens/1_Introduction'
import PanGestureHandler from './app/screens/2_PanGestureHandler'
import Reactiveness from './app/screens/3_Reactiveness'
import DrivingAnimation from './app/screens/4_DrivingAnimation'
import Interpolation from './app/screens/5_Interpolation'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Interpolation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;
