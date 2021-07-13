import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const size = 100;

const Screen = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offset.value * 255,
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]}></Animated.View>

      <Button
        title="Change value"
        onPress={() => {
          offset.value = withSpring(Math.random());
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    width: size,
    height: size,
    backgroundColor: 'blue',
    marginBottom: 10,
  },
});

export default Screen;
