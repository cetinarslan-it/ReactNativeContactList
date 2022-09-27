import { FlatList, StyleSheet, View, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { customers } from '../data/customers'

const Contacts = ({ navigation }) => {

  const handleCustomers = (customer, index) => {
    customers[index] = customer;
  }

  const renderItem = ({ item, index }) => (
    <Item customer={item} index={index} />
  );
  
  const Item = ({customer, index}) => (
    <View>
        <Button
          style={buttonStyles.container} 
          title={`${customer.name.title} ${customer.name.first} ${customer.name.last}`}
          onPress={() => {
              navigation.navigate('Details', {customer, index, handleCustomers})}
            }
        />
    </View>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={customers}
        renderItem={renderItem}
        keyExtractor={item => item.phone}
        scrollEnabled
      />
      <Button 
        title='Go Back To Home' 
        onPress={() => navigation.goBack()} 
      />
      <Button title='console log customers' onPress={() => console.log(customers)}/>
    </SafeAreaView>
  )
}

export default Contacts

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