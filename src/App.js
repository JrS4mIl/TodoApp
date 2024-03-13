
import React from 'react';
import { useState } from "react";
import {StyleSheet,Text,View,FlatList} from 'react-native';
import InputCard from './components/InputCard'
import TodoItem from './components/TodoItem'

function App(){
    const [yapilacaklar, setYapilacaklar] = useState([]);

    const ItemRender=({item}) => <TodoItem item={item} />
    const sayi=yapilacaklar.length

    const handleSearch = (text) => {
                setYapilacaklar((prevList) => [...prevList, text]);

        };
     function handleClick(){
            handleSearch()

     }

    return(
    <View style={styles.container}>
        <View>
            <Text style={styles.text}>Yapilacaklar:   {sayi}</Text>
        </View>
        <View style={styles.flat}>
                <FlatList data={yapilacaklar} renderItem={ItemRender} />
            </View>
        <View style={styles.inputCardContainer}>
              <InputCard onSearch={handleSearch} click={handleClick}></InputCard>
        </View>

    </View>



    )
}

export default App;

const styles = StyleSheet.create({
    text: {
        color: 'orange',
        fontSize: 50,
        marginTop: 40,
    },
    container: {
        flex: 1,
        backgroundColor: '#102027',
    },
    inputCardContainer: {
        flex: 1,
        marginTop: 200,
    },
    flat:{
        flex:1,
        marginTop:150
    }

});