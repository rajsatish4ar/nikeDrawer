import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack";
import NikeDetails from "../screens/NikeDetails"
import NikeDashBoard from "../screens/NikeDashBoard"
import CustomDrawer from '../components/Drawer';
// if you want to show drawer on many screens then include screen in drawer stack
// in this case you need to set screens width= width-30
// for only on screen this is the configurations
const DrawerNavigator = createDrawerNavigator(
  {
    NikeDashBoard,
  },
  {
    initialRouteName: "NikeDashBoard",
    defaultNavigationOptions:{
      header:null
    },
    drawerType:'slide',
    drawerBackgroundColor:'transparent',
    drawerWidth:60,
    contentComponent:CustomDrawer,
    contentOptions: {
      activeTintColor: 'white',
      inactiveTintColor:'gray',
      labelStyle:{
        transform:[{
          rotate:'-90deg'
        }]
      },
    }
  }
);


const AppNavigator = createStackNavigator(
  {
    DrawerNavigator,
    NikeDetails,
  },
  {
    initialRouteName: "DrawerNavigator",
    defaultNavigationOptions:{
      header:null
    },
  }
);


export default createAppContainer(AppNavigator);
