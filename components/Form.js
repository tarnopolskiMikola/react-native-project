import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
   StyleSheet, 
   Text, 
   TouchableHighlight,
   TextInput,
   Button,
   View
   } from 'react-native';
 
const styles = StyleSheet.create({
input:{
    borderBottomWidth:2,
    borderColor:'green',
    padding: 10
}
 
});
export default function Form({addHandler}) {
const [text, setValue] = useState('');  
const onChange = (text) => {
    setValue(text);
};
  
  return (
   <View>
       <TextInput style={styles.input} onChangeText={onChange} placeholder='type text'/>
       <Button color="green" title="Add" onPress={() => addHandler(text)}/>
   </View>
  );
}
