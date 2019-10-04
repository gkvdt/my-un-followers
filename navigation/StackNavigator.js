import Login from "../screens/Login";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import { tabNavigator } from "./MainTabNavigator";
import SettingsScreen from "../screens/SettingsScreen";

const TabNavigator = createSwitchNavigator({
  tabNavigator
});

const stackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    TabNavigator: {
      screen: TabNavigator
    }
  },
  {
    defaultNavigationOptions: { header: null }
  }
);

const Navigator = createAppContainer(stackNavigator);

export default Navigator;
