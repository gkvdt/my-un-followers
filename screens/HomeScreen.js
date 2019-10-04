import React from "react";
import {
  StyleSheet,
  View,
  BackHandler,
  AsyncStorage,
  ToastAndroid
} from "react-native";
import followers from "../client/Followers";
import CostumList from "../components/CostumList";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import lang from "../lang";
import loadAd from "../helpers/InterstitalAd";

export default class HomeScreen extends React.Component {
  async componentDidMount() {
    try {
      var username = await AsyncStorage.getItem("username");
      var password = await AsyncStorage.getItem("password");
    } catch (error) {}
    this.state.data = await followers(username, password).then(response => {
      return response.data;
    });

    this.state.data = this.state.data.map(item => {
      return { ...item, status: 1 };
    });

    this.state.username = username;
    this.state.password = password;
    this.setState(this);
    await loadAd();
  }
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      data: []
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ marginTop: 22 }}>
          {this.state.data.map(data => (
            <CostumList
              data={data}
              func={pk => this.func(pk)}
              text={lang("unfollow")}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", function() {
      return true;
    });
  }
  func = pk => {
    console.warn(pk);
    this.state.data = this.state.data.filter(e => {
      if (pk !== e.pk) {
        return { ...e, status: 2 };
      } else {
        return { ...e };
      }
    });
    this.setState(this);
    const muri =
      "http://www.avokadoyazilim.site/instagram/unFollowUser.php?username=" +
      this.state.username +
      "&password=" +
      this.state.password +
      "&id=" +
      pk;
    console.warn(muri);
    axios
      .get(muri)
      .then(response => {
        console.warn(response.data); // ok
        this.state.data = this.state.data.filter(e => {
          return pk !== e.pk;
        });
        this.setState(this);
        loadAd();
      })
      .catch(err => {
        this.state.data = this.state.data.filter(e => {
          ToastAndroid.show(lang("unf_error"), ToastAndroid.SHORT);
          console.warn(err);
          if (pk !== e.pk) {
            return { ...e, status: 1 };
          } else {
            return { ...e };
          }
        });
      });
  };
}
HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
