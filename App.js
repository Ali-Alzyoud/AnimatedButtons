/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { ButtonSelection, ImageViewer } from './src/Components';
import img0 from './src/assets/image-0.jpeg';
import img1 from './src/assets/image-1.jpeg';
import img2 from './src/assets/image-2.jpeg';
import img3 from './src/assets/image-3.jpeg';

const App: () => Node = () => {

  const [index, setIndex] = useState(0);
  const onChangeIndex = (newIndex) => {
      setIndex(newIndex);
  }

  return (
      <View style={styles.appStyles}>
          <ImageViewer items={[img0,img1,img2,img3]} selectedIndex={index} />
          <View style={styles.buttons}>
              <ButtonSelection
                  items={["Item1", "Item2", "Item3", "Item4"]}
                  selected={index}
                  onChangeIndex={onChangeIndex}
              />
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
    appStyles: {
        height: '100%'
    },
    buttons: {
        bottom:0,
        position:'absolute',
        alignItems:'center',
        width:'100%'
    }
});

export default App;
