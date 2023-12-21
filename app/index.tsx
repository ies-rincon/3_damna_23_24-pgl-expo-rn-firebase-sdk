import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { fireBaseConfigApp } from "../config/firebase.config";
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(fireBaseConfigApp);

const Usuarios = () => {
  const [users, setUsers] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersArray: any[] = [];
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => `, doc.data());
        usersArray.push({
          _id: doc.id,
          ...doc.data(),
        });
      });
      setUsers(usersArray);
      setLoading(false);
    };
    getUsers();
  }, []);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => {
        // navigation.navigate("Usuario", { user: item });
      }}
    >
      <Image source={{ uri: item.img }} style={styles.avatar} />
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userEmail}>{item.email}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userEmail: {
    margin: 10,
    fontSize: 14,
  },
});

export default Usuarios;
