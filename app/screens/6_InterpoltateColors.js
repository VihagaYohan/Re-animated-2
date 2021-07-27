import React, {Component, useState} from 'react';
import {StyleSheet, View, Text, Switch, Dimensions} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Colors = {
  dark: {
    background: '#1e1e1e',
    circle: '#252525',
    text: '#f8f8f8',
  },
  light: {
    background: '#f8f8f8',
    circle: '#fff',
    text: '#1e1e1e',
  },
};

const SWITCH_TRACK_COLOR = {
  true: 'rgba(256,0,256,0.2)',
  false: 'rgba(0,0,0,0.1)',
};

const Theme = ['light', 'dark'];

const Size = Dimensions.get('screen').width * 0.7;

const Screen = () => {
  const [theme, setTheme] = useState(Theme[0]);

  // const progress = useSharedValue(0);
  const progress = useDerivedValue(() => {
    return theme == 'dark' ? withTiming(1) : withTiming(0);
  }, [theme]);

  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.background, Colors.dark.background],
    );
    return {
      backgroundColor,
    };
  });

  const rCircleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.circle, Colors.dark.circle],
    );
    return {
      backgroundColor: backgroundColor,
    };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.text, Colors.dark.text],
    );
    return {
      color: color,
    };
  });

  return (
    <Animated.View style={[styles.container, rStyle]}>
      <Animated.Text style={[styles.text, rTextStyle]}>Theme</Animated.Text>
      <Animated.View style={[styles.circle, rCircleStyle]}>
        <Switch
          value={theme === 'dark'}
          onValueChange={toggled => {
            setTheme(toggled ? 'dark' : 'light');
          }}
          trackColor={SWITCH_TRACK_COLOR}
          thumbColor={'violet'}
        />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: Size,
    height: Size,
    borderRadius: Size / 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    /* shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 0.1, */
    elevation: 8,
  },
  text: {
    fontSize: 70,
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: 12,
    marginBottom: 35,
  },
});

export default Screen;
