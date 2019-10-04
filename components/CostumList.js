import React from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default CostumList = props => {
  const data = props.data;
  console.warn(props);

  return (
    <View style={styles.container}>
      <View style={styles.picView}>
        <Image
          style={styles.pic}
          source={{
            uri: data.profile_pic_url
          }}
        />
      </View>
      <View style={styles.nameView}>
        <Text style={styles.name}>{data.full_name}</Text>
        <Text style={styles.username}>{data.username}</Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => props.func(data.pk)}
          style={styles.button}
        >
          {props.data.status === 1 ? (
            <Text style={{ color: "white" }}>{props.text}</Text>
          ) : (
            <ActivityIndicator color="white" size={20} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "95%",
    padding: 8,
    alignItems: "center",
    margin: 8,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 4,
    elevation: 1,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0
  },
  picView: {},
  pic: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  nameView: {
    marginLeft: 18,
    flex: 1
  },
  name: {
    fontSize: 18
  },
  username: {
    fontStyle: "italic",
    color: "#606060"
  },
  buttonView: {},
  button: {
    backgroundColor: "#a151e8",
    borderRadius: 12,
    margin: 8,
    paddingVertical: 12,
    paddingHorizontal: 18,
    justifyContent: "center",
    alignItems: "center"
  }
});
