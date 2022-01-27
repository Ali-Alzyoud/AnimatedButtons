import React, { useRef, useEffect, memo } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { useState } from 'react/cjs/react.development';

function ImageViewer({ items, selectedIndex }) {
    const animateSelection = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(selectedIndex);
    useEffect(() => {
        Animated.timing(
            animateSelection,
            {
                toValue: 0,
                duration: 250,
                useNativeDriver: true
            }
        ).start(() => {
            setCurrentIndex(selectedIndex);
            Animated.timing(
                animateSelection,
                {
                    toValue: 1,
                    duration: 250,
                    useNativeDriver: true
                }).start();
        });
    }, [selectedIndex])
    return (
        <Animated.Image source={items && items[currentIndex]} style={[styles.image, 
            {
                transform: [
                    {
                        scaleX: animateSelection,
                    }]
            }
        ]
            } >
        </Animated.Image>
    );
}

export default memo(ImageViewer);

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    }
});