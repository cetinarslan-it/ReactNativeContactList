import {
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
  Pressable,
  Image,
  Text,
} from "react-native";
import { customers } from "../data/customers";

const Contacts = ({ navigation }) => {
  const Item = ({ customer, index }) => (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate("Details", { customer, index });
        }}
      >
        <View style={styles.item}>
          <View style={{flex:1, flexDirection:"row"}}>
            <Image
              style={{ height: 50, width: 50, marginBottom: 5 }}
              source={customer.picture.thumbnail}
            />
            <View>
              <Text
                style={styles.itemName}
              >{`${customer.name.title} ${customer.name.first} ${customer.name.last}`}</Text>
              <Text style={styles.itemNo}>{`${customer.phone}`}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );

  const renderItem = ({ item, index }) => {
    return <Item style={styles.item} customer={item} index={index} />;
  };

  const header = () => {
    return (
      <View>
        <Text style={styles.listHeader}>Contact List</Text>
      </View>
    );
  };

  const handleEmpty = () => {
    return <Text style={styles.noData}>No contact present...</Text>;
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {!customers && <Text>Loading...</Text>}
        {customers && (
          <FlatList
            ListEmptyComponent={handleEmpty}
            ListHeaderComponent={header}
            data={customers}
            keyExtractor={(item) => item.phone}
            renderItem={renderItem}
            numColumns
            scrollEnabled
          />
        )}
      </SafeAreaView>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.text}>Home</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => console.log(customers)}>
          <Text style={styles.text}>console.log()</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 8,
    alignItems: "center",
  },
  listHeader: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 10,
    width: 150,
    height: 50,
    backgroundColor: "blue",
    shadowColor: "black",
    shadowRadius: 8,
    margin: 15,
  },
  text: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "white",
    textAlign: "center",
  },
  item: {
    backgroundColor: "yellow",
    padding: 2,
    marginVertical: 5,
    marginHorizontal: 1,
    width: 380,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
    shadowColor: "black",
    shadowRadius: 6,
    elevation: 7,
  },
  itemName: {
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  itemNo: {
    fontSize: 18,
    paddingLeft: 20,
  },
});