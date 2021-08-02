import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {PinchGestureHandler} from 'react-native-gesture-handler';

const imageURL = 'https://picsum.photos/seed/picsum/300/300';

const {width, height} = Dimensions.get('screen');

const Screen = () => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const AnimatedImage = Animated.createAnimatedComponent(Image);

  const pinchHandler = useAnimatedGestureHandler({
    onActive: event => {
      scale.value = event.scale;
      focalX.value = event.focalX;
      focalY.value = event.focalY;
    },
    onEnd: () => {
      scale.value = withTiming(1);
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: focalX.value},
        {translateY: focalY.value},
        {
          translateX: -width / 2,
        },
        {
          translateY: -height / 2,
        },
        {scale: scale.value},
        {translateX: -focalX.value},
        {translateY: -focalY.value},
        {
          translateX: +width / 2,
        },
        {
          translateY: +height / 2,
        }
      ],
    };
  });

  const rFocalPoint = useAnimatedStyle(() => {
    return {
      transform: [{translateX: focalX.value}, {translateY: focalY.value}],
    };
  });

  return (
    <PinchGestureHandler onGestureEvent={pinchHandler}>
      <Animated.View style={{flex: 1}}>
        <AnimatedImage style={[rStyle, {flex: 1}]} source={{uri: imageURL}} />
        <Animated.View style={[styles.focalPoint, rFocalPoint]}></Animated.View>
      </Animated.View>
    </PinchGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  focalPoint: {
    ...StyleSheet.absoluteFillObject,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
});

export default Screen;
