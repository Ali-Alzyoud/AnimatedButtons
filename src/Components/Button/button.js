import React, { useRef, useEffect, memo } from 'react';
import { Animated, Text, StyleSheet } from 'react-native';

function Button({ title, selected, index, change }) {
    const animateSelection = useRef(new Animated.Value(0)).current;
    const click = () => {
        change(index)
    }
    useEffect(() => {
        Animated.timing(
            animateSelection,
            {
                toValue: selected ? 1 : 0,
                duration: 1000,
                useNativeDriver: false
            }
        ).start();
    }, [selected])
    return (
        <Animated.View style={[styles.button, 
        
            {
                backgroundColor: animateSelection.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['black', 'gray'],
                })
            }
            
            ]} onTouchStart={click}>
            <Text style={styles.text}>{title}</Text>
            <Animated.View style={[styles.animated,

            {
                width: animateSelection.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 60],
                })
            }

            ]}></Animated.View>
        </Animated.View>
    );
}

export default memo(Button);

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 60,
    },
    text: {
        fontSize: 16,
        width: '100%',
        height: '100%',
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    animated: {
        position: 'absolute',
        backgroundColor: 'lightblue',
        height: 10,
        alignSelf: 'center',
        bottom: 0
    }
});