import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";

const Details = ({ route, navigation: { goBack } }) => {
  const { customer, index, handleCustomers } = route.params;
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 5, marginBottom: 10 }}>
        <Image
          style={{ height: 300, width: 380, marginBottom:5 }}
          source= {customer.picture.large}
        />
        <Text style={styles.titleText}>
          Name     :{" "}
          {`${customer.name.title} ${customer.name.first} ${customer.name.last}`}
        </Text>
        <Text style={styles.titleText}>
          Address :{" "}
          {`${customer.location.street.name} ${customer.location.street.number}`}
        </Text>
      </View>

      <TextInput
        style={styles.textArea}
        value={text}
        onChangeText={setText}
        underlineColorAndroid="transparent"
        placeholder="   Type something..."
        placeholderTextColor="grey"
        numberOfLines={40}
        multiline={true}
      />

      <View style={styles.buttonContainer}>
        <Pressable style={styles.Button} onPress={() => goBack()}>
          <Text style={styles.buttonText}>To Contacts</Text>
        </Pressable>

        <Pressable
          style={styles.Button}
          onPress={() => {
            customer.AdditionalInformation = text;
            handleCustomers(customer, index);
          }}
        >
          <Text style={styles.buttonText}>Add Text</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 25,
  },
  textArea: {
    backgroundColor: "ghostwhite",
    borderColor: "black",
    borderWidth: 1,
    height: 100,
    width: 380,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: -140,
  },
  Button: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 10,
    width: 150,
    height: 50,
    backgroundColor: "blue",
    shadowColor: "black",
    shadowRadius: 8,
    elevation: 7,
    margin: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 20,
  },
});
