import React from 'react';
import {View,Text} from 'react-native';
import styles from './TodoItem.styles';

const TodoItem=(props)=>{
        return(
            <View style={styles.cardItem}>
                <Text style={styles.item}>{props.item}</Text>
            </View>
        )

}
export default TodoItem;