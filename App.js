import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import Form from './components/Form.js';
import Header  from './components/Header.js';
import { useRef, useState } from 'react';

export default function App() {
  const [lista, updateLista] = useState([]);

  const [titolo, setTitolo]= useState('');

  const [descrizione, setDescrizione]= useState('');

  function impostaTitolo(tit){
    setTitolo(tit);
  }

  function impostaDescrizione(desc){
    setDescrizione(desc);
  }

  const renderizza = ({ item }) => (
    <View style={styles.item}>
        <Text>Titolo: {item.titolo}</Text>
        <Text>Descrizione: {item.descrizione}</Text>
      </View>
  );

  return (
    <View style={styles.container}>
      <Header/>

      <Form
      imposta={impostaTitolo}
      titolo="Inserisci il titolo della nota: "
      input="Inserisci il titolo"/>

      <Form 
      imposta={impostaDescrizione}
      titolo='Inserisci descrizione della nota: '
      input="Inserisci descrizione"
      />

      <Button
      onPress={addNote}
      title="Carica nota"/>

      <FlatList style={styles.lista}
        data={lista}
        renderItem={renderizza}
        keyExtractor={item => item.titolo}
      />
      </View>
  );

  function addNote(){
    console.log("Bella");
    updateLista(lista.concat({
      titolo: titolo,
      descrizione: descrizione,
    }))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(190, 192, 229, 0.5)',
  },
  lista:{
    marginTop: 10,
    backgroundColor: 'rgba(129, 161, 252, 0.3)'
  },
  item:{
    borderWidth: 1.0,
    borderColor: 'rgba(250, 50, 54, 1.0)',
    padding: 2,
    borderRadius: 5,
    margin: 6,
  }
});
