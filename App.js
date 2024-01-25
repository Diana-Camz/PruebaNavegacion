import 'react-native-gesture-handler';
//import {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/navigate/Mainstack';

export default function App() {
 
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,

}})
  

  // const [origin, setOrigin] = useState("")
  // const enviar = () => {
  //   console.log(`'enviando...' ${origin}`)
  //   setOrigin('')
  // }

  // <View>
  //     <Text>Screen1</Text>
  //     <TextInput value={origin} onChangeText={setOrigin} placeholder='Screen 1' style={styles.input}></TextInput>
  //     <Text>{origin}</Text>

  //     <Button title='Enviar' onPress={enviar}>
        
  //     </Button>
  //   </View>
