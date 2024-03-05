import React from 'react';
import {TextInput,View,Button} from 'react-native';
import styles from './InputCard.styles';

const InputCard=(props)=>{
    function Click(){
        console.log('Basildi')
    }
        return(
            <View style={styles.card}>
                <TextInput placeholder='Yapilacak..' onChangeText={props.onSearch} />
                <View style={styles.line} />
                <View style={styles.child}>
                    <Button style={styles.button} color='#808080' title='Kaydet' onPress={Click}></Button>
                </View>
            </View>


        )

}
export default InputCard;