import React, { useState, memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '..';

function ButtonSelection({ items, selected, onChangeIndex }) {
    const [selectIndex, setSelectIndex] = useState(selected);
    const changeIndex = (index) => {
        setSelectIndex(index);
        onChangeIndex(index);
    }
    return <View style={styles.list}>
        {items.map((item, i) => <Button key={i} title={item} index={i} selected={selectIndex == i} onChange={changeIndex} />)}
    </View>
}

export default memo(ButtonSelection);

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row'
    }
});