import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ToastNotification from './src/ToastNotification';

export default function App() {
  const [showAnimation, setShowAnimation] = useState(false);
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
       {
        showAnimation &&  <ToastNotification/>
       }
      
       <TouchableOpacity style={{padding:50, backgroundColor:'red'}} onPress={()=> setShowAnimation(!showAnimation)}>
          <Text >Show Animation</Text>
       </TouchableOpacity>
    </View> 
   
  );
}


