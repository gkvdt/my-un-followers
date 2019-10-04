import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  AsyncStorage,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator
} from "react-native";
import * as Font from "expo-font";
import login from "../client/Login";
import ToggleButton from "../components/ToggleButton";
import Input from "../components/Input";
import lang from "../lang";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      pressLogin: false,
      username: "",
      password: "",
      fontLoaded: false,
      saveUser: false
    };
    this.notCorrectUP = `InstagramAPI\\Response\\LoginResponse: The password you entered is incorrect. Please try again.`;
    this.notConfirmed =
      "InstagramAPI\\Response\\TimelineFeedResponse: Challenge required.";
  }
  async componentDidMount() {
    await Font.loadAsync({
      font: require("../assets/fonts/font.ttf"),
      italic: require("../assets/fonts/italic.ttf")
    });
    var username = await AsyncStorage.getItem("savedUsername");
    var password = await AsyncStorage.getItem("savedPassword");
    this.setState({
      fontLoaded: true,
      username: username,
      password: password
    });
  }
  render() {
    return (
      <ImageBackground
        source={require("../assets/images/bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          {this.state.fontLoaded ? (
            <View style={{ alignItems: "center" }}>
              <View style={styles.logo}>
                <Text style={styles.title}>{lang("login")}</Text>
                <Text style={styles.subtitle}>{lang("subtitle")}</Text>
              </View>

              <Input
                onChangeText={e => this.setState({ username: e })}
                style={styles.input}
                val={this.state.username}
                placeholder={lang("username")}
              />
              <Input
                style={styles.input}
                placeholder={lang("password")}
                isPassword={true}
                val={this.state.password}
                onChangeText={e => this.setState({ password: e })}
              />
              <ToggleButton
                onPress={() =>
                  this.setState({ saveUser: !this.state.saveUser })
                }
                checked={this.state.saveUser}
                text={lang("remember")}
              />
              <TouchableOpacity onPress={this.login} style={styles.loginButton}>
                {this.state.pressLogin ? (
                  <ActivityIndicator color="gray" size={20} />
                ) : (
                  <Text style={styles.loginButtonText}>{lang("login")}</Text>
                )}
              </TouchableOpacity>
            </View>
          ) : (
            <ActivityIndicator color="white" size={50} />
          )}
        </View>
      </ImageBackground>
    );
  }

  login = () => {
    if (!this.state.pressLogin) {
      this.setState(this);
      if (this.state.password.length > 0 && this.state.username.length > 0) {
        this.state.pressLogin = true;
        login(this.state.username, this.state.password).then(response => {
          console.warn(response);
          if (response.data == "1") {
            this.loginSuccess();
          } else if (response.data === this.notCorrectUP) {
            ToastAndroid.show(
              "Kullanıcı ad ve/veya şifre hatalı!",
              ToastAndroid.SHORT
            );
          } else {
            ToastAndroid.show("Bağlantı hatası!", ToastAndroid.SHORT);
            this.state.pressLogin = false;
          }
        });
      } else {
        ToastAndroid.show(
          "Lütfen kullanıcı adı ve şifrenizi tam giriniz.",
          ToastAndroid.SHORT
        );
        this.state.pressLogin = false;
      }
    }
    this.setState(this);
  };
  loginSuccess = async () => {
    if (this.state.saveUser) {
      try {
        await AsyncStorage.setItem("savedUsername", this.state.username);
        await AsyncStorage.setItem("savedPassword", this.state.password);
      } catch (error) {
        console.warn(error);
      }
    }
    try {
      await AsyncStorage.setItem("username", this.state.username);
      await AsyncStorage.setItem("password", this.state.password);
      this.state.pressLogin = false;
      this.setState(this);
      this.props.navigation.navigate("TabNavigator");
    } catch (error) {
      console.warn(error);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  loginButton: {
    backgroundColor: "white",
    width: 120,
    height: 40,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center"
  },
  loginButtonText: {
    fontSize: 18,
    color: "#3a3a3a"
  },
  input: {
    marginBottom: 20
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30
  },
  title: {
    color: "white",
    fontSize: 48,
    fontFamily: "font"
  },
  subtitle: {
    color: "#ffffff99",
    fontSize: 20,
    fontFamily: "italic",
    fontStyle: "italic"
  }
});

export default Login;
