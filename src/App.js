import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import TodoItem from './components/TodoItem';

function App() {
    const [yapilacaklar, setYapilacaklar] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const ItemRender = ({ item, index }) => (
        <TouchableOpacity onPress={() => handleItemPress(index)}>
            <Text style={item.completed ? styles.completedText : styles.text}>{item.task}</Text>
        </TouchableOpacity>
    );

    const sayi = yapilacaklar.length;

    const handleSearch = () => {
        if (inputValue.trim() !== '') {
            setYapilacaklar((prevList) => [...prevList, { task: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const handleItemPress = (index) => {
        setYapilacaklar((prevList) =>
            prevList.map((item, idx) => (idx === index ? { ...item, completed: !item.completed } : item))
        );
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Yapilacaklar: {sayi}</Text>
            </View>
            <View style={styles.flat}>
                <FlatList
                    data={yapilacaklar}
                    renderItem={ItemRender}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <View style={styles.inputCardContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Yapılacak..."
                    onChangeText={(text) => setInputValue(text)}
                    value={inputValue}
                />
                <Button title="Ekle" onPress={handleSearch} />
            </View>
        </View>
    );
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
        padding: 20,
    },
    inputCardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        marginRight: 10,
        paddingHorizontal: 10,
    },
    flat: {
        flex: 1,
        marginTop: 20,
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
});