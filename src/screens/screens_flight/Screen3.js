import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React from 'react'


const Screen3 = ({route}) => {
    const {origin, destiny} = route.params
  return (

    <View>
        <Text>Screen 3</Text>
    
        <Text>{origin}</Text>
        <Text>{destiny}</Text>

        <Button title='Enviar'></Button>
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({
    input: {
      height: 50,
      borderWidth: 1,
    }
  })

