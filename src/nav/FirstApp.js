import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import NikeHome from "../screens/NikeHome";
import NikeDetails from '../screens/NikeDetails';
const AppNavigator = createStackNavigator(
  {
    NikeHome,
    NikeDetails,
  },
  {
    initialRouteName: "NikeHome",
    defaultNavigationOptions:{
      header:null
    },
  }
);

export default createAppContainer(AppNavigator);
