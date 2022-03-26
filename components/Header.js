import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
   AppRegistry,
   StyleSheet, 
   Text, 
   View, 
   } from 'react-native';
 
const styles = StyleSheet.create({
  main: {
    paddingTop: 35,
    height:100,
    backgroundColor:'silver'
  },
  text:{
      fontSize:18,
      color:'blue',
      textAlign:'center'
       
  }
 
});
export default function Header() {

  
  return (
    < View style={styles.main}>
    <Text style={styles.text}>TODO List</Text>
     
    </ View>
  );
}
