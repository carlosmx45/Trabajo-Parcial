import React from 'react';
import { FlatList,Text } from 'react-native';
import styles from './styles';

function List({data}){
    return(
        <FlatList
            data = {data}
            renderItem = {({item}) => <Text style={styles.text}>{item.value}</Text>}
        />
    )
}

export default List;