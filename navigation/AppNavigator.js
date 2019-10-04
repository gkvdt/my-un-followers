import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { tabNavigator } from "./MainTabNavigator";

export default createSwitchNavigator({
  Main: tabNavigator
});
