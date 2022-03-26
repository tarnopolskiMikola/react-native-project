import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
   AppRegistry,
   ImageBackground,
   StyleSheet, 
   Text, 
   TouchableOpacity
   } from 'react-native';
 
const styles = StyleSheet.create({
 text:{
     padding:20,
     textAlign: 'center',
     borderRadius:5,
     backgroundColor: '#fafafa',
     borderWidth:1,
     marginTop:20,
     width: '60%',
     marginLeft:'20%',
     
 }
 
});
export default function ListItem({ el, deleteHandler }) {

  
  return (
   <TouchableOpacity onPress={()=> deleteHandler(el.key) }>
      <Text style={styles.text}>{el.text}</Text>
   </TouchableOpacity>
  );
}