import React, { Component, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, withRepeat } from 'react-native-reanimated'

const size = 100;

const HomeScreen = () => {
    const progress = useSharedValue(1)
    const scale = useSharedValue(2)

    const reanimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: progress.value,
            transform: [{ scale: scale.value }, { rotate: handleRotation(progress) }],
            borderRadius: progress.value * size / 2
        }
    }, [])

    const handleRotation = progress => {
        'worklet';
        return `${progress.value * 2 * Math.PI}rad`
    }
}

useEffect(() => {
    //progress.value = withTiming(0.5)
    progress.value = withSpring(0.5)
    //scale.value = withSpring(1)
    scale.value = withRepeat(withSpring(1), 3, true)
}, [])

return (
    <View style={styles.container}>
        <Animated.View style={[{
            width: size,
            height: size,
            backgroundColor: 'blue'
        }, reanimatedStyle]}></Animated.View>
    </View>
)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeScreen;