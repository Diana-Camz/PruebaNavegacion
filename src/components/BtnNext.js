import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const BtnNext = ({next}) => {
    const route = next.route
    const params = next.params
    const navigation = useNavigation();
    return (
       <TouchableOpacity
      onPress={()=>navigation.navigate(route, params)}
      >
          <View style={styles.container}>
            <Text style={styles.txt}>Next</Text>
          </View> 
      </TouchableOpacity>
      )
  }
  
  const styles = StyleSheet.create({
    container:{
      backgroundColor: '#5C6EF8',
      alignItems: 'center',
      width: 280,
      borderRadius:7,
      paddingVertical: 8,
      paddingHorizontal: 15,
    }, 
    txt:{
      color:'white'
    }
  })

  export default BtnNext