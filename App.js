import { StatusBar } from 'expo-status-bar';
import {
   AppRegistry,
   StyleSheet, 
   Text, 
   View, 
   SafeAreaView ,
   Button, 
   Alert , 
   Image,
   TouchableHighlight,
   TouchableNativeFeedback} from 'react-native';
import React from 'react';
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    marginTop:10,
    marginLeft:150,
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  }
});
export default function App() {

  const handleTextPress = () => console.log('ok');
  const createThreeButtonAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed")
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

const createThreeButtonPromt = () =>
 Alert.prompt("ggg", "kkk", text => console.log(text));

  const handleButtonPress2 = () => console.log('ok2');
  const handleButtonPress3 = () => alert('Example');
  // const handleButtonPress4 = () => Alert.alert("1", "2", [
  //   {text:"YES", onPress: () => console.log('yes') },
  //   {text:"NO", onPress: () => console.log('no') }

  // ]);
   
  return (
    < View style={styles.container}>
      <Text style={styles.text} onPress={handleTextPress}>hello</Text>
      <Button title={'ok2'} onPress={handleButtonPress2} />
      <Button title={'ok3'} onPress={handleButtonPress3} />
      <Button
          title={"2-Button Alert"}
          onPress={createThreeButtonAlert}
        />
        <Button
          title={"4-Button promt"}
          onPress={createThreeButtonPromt}
        />
        <TouchableHighlight onPress={handleTextPress}>
        <Image
          style={styles.tinyLogo}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        </TouchableHighlight>
        <TouchableNativeFeedback onPress={handleTextPress}>
        <Image
          style={styles.tinyLogo}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        </TouchableNativeFeedback>
      
             
     
    </ View>
  );
}

 
// import React, { Component } from 'react';
// import { AppRegistry, View, Image, StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//   },
//   tinyLogo: {
//     width: 50,
//     height: 50,
//   },
//   logo: {
//     width: 66,
//     height: 58,
//   },
// });

// class DisplayAnImage extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
        
//         <Image
//           style={styles.tinyLogo}
//           source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
//         />
//         <Image
//           style={styles.logo}
//           source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
//         />
//       </View>
//     );
//   }
// }

// export default DisplayAnImage;