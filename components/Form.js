//Form stands for the two forms: insert title and insert description of the notes
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Form(props){
    return(
        <View>
            <Text style={styles.titolo}>{props.titolo}</Text>
                <TextInput
                style={styles.input}
                placeholder={props.input}
                onChangeText={(value) => props.imposta(value)}
                />
        </View>)
}

const styles=StyleSheet.create({
    titolo:{
        fontSize: 20,
        color: 'blue',
        textAlign: 'center',
        margin: 10,
        borderBottomColor: 'blue',
    },
    input:{
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 8,
        margin: 10,
        padding: 5,
    }
})