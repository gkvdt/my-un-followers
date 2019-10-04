import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class ToggleButton extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
          <View
            style={[
              this.props.checked ? styles.checked : styles.unchecked,
              styles.defaultBox
            ]}
          />
          <Text style={styles.text}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const size = 20;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 8,
    alignItems: "center"
  },
  defaultBox: {
    margin: 8,
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 50,
    width: size,
    height: size
  },
  checked: {
    backgroundColor: "#a151e8"
  },
  unchecked: {
    backgroundColor: "white"
  },
  text: {
    fontFamily: "italic",
    fontSize: 16,
    color: "#ffffff99"
  }
});
