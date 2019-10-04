import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default class Input extends React.Component {
  render() {
    return (
      <View style={styles.border}>
        <TextInput
          style={styles.input}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.isPassword}
          onChangeText={e => this.props.onChangeText(e)}
          value={this.props.val}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  border: {
    justifyContent: "center",
    width: 250,
    height: 50,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 20
  },
  input: {
    width: "100%",
    height: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  }
});
