import { StyleSheet, Text, View, TextInput } from 'react-native'
import {React, useState} from 'react'
import BtnNext from '../../components/BtnNext'


const Screen1 = () => {
  const [originInput, setOriginInput] = useState()
const objetoDeVariables = {origin: originInput}
const objetoParaPasarANext = {route:'Screen2', params:objetoDeVariables}
  return (
    <View>
        <Text>Screen 1</Text>
        <TextInput  value={originInput} onChangeText={setOriginInput} placeholder="Origin" style={styles.input}></TextInput>
      <BtnNext next={objetoParaPasarANext}/>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
  }
})

//value={origin} onChangeText={setOrigin}