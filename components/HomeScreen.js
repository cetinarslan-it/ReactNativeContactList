import { Pressable, StyleSheet, View, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View>
        <Text style={styles.listHeader}>Cetin's PhoneBook</Text>
      </View>
      <View style={styles.container}>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Contacts");
          }}
        >
          <Text style={styles.text}>Contact List</Text>
        </Pressable>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listHeader: {
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "blue",
    marginBottom: 10,
    shadowColor: "black",
    shadowRadius: 8,
    marginTop:-400,
  },
  text: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "white",
  },
});
