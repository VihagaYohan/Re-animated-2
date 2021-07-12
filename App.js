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

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Introduction />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;