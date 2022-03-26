
import { StatusBar } from 'expo-status-bar';
import {
   AppRegistry,
   StyleSheet, 
   Text, 
   View, 
   FlatList} from 'react-native';
import Header from './components/Header'
import ListItem from './components/ListItem';
import Form from './components/Form';
import { useState } from 'react';
//////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
     
  } 
 
});
/////////////////////////////////////////////////////////////////////////////////


export default function App() {
const [listOfItems, setListOfItems] = useState([
  {text: 'buy milk', key:'1'},
  {text: 'buy meat', key:'2'}
])

const addHandler = (text) => {
  setListOfItems((list) => {
    return [
      {text:text, key: Math.random().toString(36).substring(7)},
      ...list
    ]
  })
}

const deleteHandler = (key) =>{
  setListOfItems((list) =>{
    return list.filter(listOfItems => listOfItems.key != key)
  });
}
  
  return (
    < View style={styles.container}>
    <Header  />
    <Form addHandler={addHandler}/>
    <View>
<FlatList data={listOfItems} renderItem={({item}) => (
  <ListItem el={item} deleteHandler={deleteHandler}/>
  
)}/> 
    </View>
    </ View>
  );
}

  