import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from "react-native";
import DrawerLayout from "react-native-gesture-handler/DrawerLayout";
const { height } = Dimensions.get("screen");
import NikeDashBoard from './NikeDashBoard';
import DrawerContainer from './GestureDrawerContainer';
export default DrawerContainer(NikeDashBoard)
