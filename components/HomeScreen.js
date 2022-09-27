import { Button, StyleSheet, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Button
          onPress={() => {
              navigation.navigate('Contacts')
            }}
          title='Go To Contacts'
        />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
const buttonStyles = StyleSheet.create({
    container: {
        padding: 10
    }
});