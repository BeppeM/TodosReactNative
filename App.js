import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Form from './components/Form.js';
import Header  from './components/Header.js';
import { useRef, useState } from 'react';

export default function App() {
  const titolo= useRef();
  const descrizione= useRef();
  const [lista, updateLista] = useState([]);

  return (
    <View style={styles.container}>
      <Header/>

      <Form
      titolo="Inserisci il titolo della nota: "
      input="Inserisci il titolo"
      ref={titolo}/>

      <Form 
      titolo='Inserisci descrizione della nota: '
      input="Inserisci descrizione"
      ref={descrizione}
      />

      <Button
      onPress={addNote}
      title="Carica nota"/>

      <View>{
        lista.map((item) =>
          <Text>{item.titolo}</Text>)
        }
      </View>
    </View>
  );

  function addNote(){
    let t= titolo.current.value;
    //let d= descrizione.current.focus();
    updateLista(lista.concat({
      titolo: titolo.current.value,
      key: titolo.current.value,
    }))
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
