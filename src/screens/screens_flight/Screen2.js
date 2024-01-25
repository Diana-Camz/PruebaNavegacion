import { StyleSheet, Text, View, TextInput } from 'react-native'
import {React, useState} from 'react'
import BtnNext from '../../components/BtnNext'

const Screen2 = ({route}) => {
    const {origin} = route.params
   const [destinyInput, setDestinyInput] = useState("")
   const objetoDeVariables = {origin: origin, destiny: destinyInput}
   const objetoParaPasarANext = {route:'Screen3', params:objetoDeVariables}
  return (
    <View>
        <Text>Screen 2</Text>
        <TextInput value={destinyInput} onChangeText={setDestinyInput} placeholder="Destiny" style={styles.input}></TextInput>
        <Text>{origin}</Text>
        
      <BtnNext next={objetoParaPasarANext}/>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
    input: {
      height: 50,
      borderWidth: 1,
    }
  })

  // const {origin} = route.params
  //