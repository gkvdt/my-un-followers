import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import lang from "../lang";
import loadAd from "../helpers/InterstitalAd";

export default class LinksScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  async componentDidMount() {
    var username = await AsyncStorage.getItem("username");
    this.setState({
      username: username
    });
    await loadAd();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.username}>{this.state.username}</Text>
        <TouchableOpacity onPress={this.logout}>
          <Text style={styles.logout}>{lang("logout")}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  logout = () => {
    this.props.navigation.navigate("Login");
  };
}

LinksScreen.navigationOptions = {
  header: null
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  username: {
    fontSize: 24,
    marginBottom: 24
  },
  logout: {
    color: "#4364f0",
    fontSize: 18
  }
});
