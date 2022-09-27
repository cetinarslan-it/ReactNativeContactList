import { TextInput, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Details = ({route, navigation: { goBack }}) => {

  const { customer, index, handleCustomers } = route.params;
  const [text, setText] = useState('')

  return (
    <View style={styles.container}>
      <Text>
        Name: {`${customer.name.title} ${customer.name.first} ${customer.name.last}`}        
      </Text>
      <Text>
        Lives at {`${customer.location.street.name} ${customer.location.street.number}`}
      </Text>
      <Button style={styles.container} onPress={() => goBack()} title='Go Back To Contacts'/>
      <TextInput
        style={styles.textArea}
        value={text}
        onChangeText={setText}
        underlineColorAndroid="transparent"
        placeholder="Type something"
        placeholderTextColor="grey"
        numberOfLines={10}
        multiline={true}
      />
      <Button title='Add Information' onPress={() => {customer.AdditionalInformation = text; handleCustomers(customer, index)}}/>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    textArea: {
      borderWidth: 1,
      height: 200,
      width: 200,
      borderColor: 'black',
    }
  });