/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { ButtonSelection } from './src/Components';

const App: () => Node = () => {

  return (
    <View style={styles.appStyles}>
        <ButtonSelection
            items={["Item1","Item2","Item3","Item4"]}
            selected={1}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    appStyles: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: '100%'
    }
});

export default App;
