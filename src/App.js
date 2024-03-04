/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StyleSheet,Text,View} from 'react-native';
import InputCard from './components/InputCard'
function App(){

    return(
    <View style={styles.container}>
        <View>
            <Text style={styles.text}>Yapilacaklar:   </Text>
        </View>
        <View style={styles.inputCardContainer}>
              <InputCard></InputCard>
        </View>

    </View>



    )
}

export default App;

const styles=StyleSheet.create({
    text:{
        color:'orange',
        fontSize:50,
        marginTop:40,
        marginLeft:12,

    },
    container:{
        flex: 1,
        backgroundColor:'#102027',
    },
    inputCardContainer: {
        flex: 1,


        marginTop: 580,
    },


})