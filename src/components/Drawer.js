import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  SafeAreaView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
const { height } = Dimensions.get("screen");
const MENUS = ["KIDS", "WOMEN", "MEN"];
const MENU_HEIGHT = 80;
// rotate menu text to vertical
const txtRotation = {
  transform: [
    {
      rotate: "-90deg"
    }
  ]
};
// positions of arrow corner based on menu,
// default pos = 0 totalHeight/2 - menuHeight
// pos = 1 totalHeight/2
// pos = 2 totalHeight/2 + menuHeight
const ARROW_POSITIONS = [
  height / 2 - MENU_HEIGHT,
  height / 2,
  height / 2 + MENU_HEIGHT
];

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0
    };
    this.animateCursor = new Animated.Value(ARROW_POSITIONS[0]);
  }
  onClickMenu = (index)=> {
    const { position } = this.state;
    this.animateCursor.setValue(ARROW_POSITIONS[position]);
    Animated.timing(this.animateCursor, {
      toValue: ARROW_POSITIONS[index],
      duration: 500
    }).start();
    this.setState({ position: index });
  }

  render() {
    let cursorPosition = this.animateCursor;
    const { position } = this.state;
    return (
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: "always", horizontal: "never" }}
      >
       <Icon name="backburger"  style={styles.searchIcon} 
        onPress={() =>{
          if(this.props.drawer)
          this.props.drawer.closeDrawer()
          else 
          this.props.navigation.toggleDrawer()
        }}
       />  
        <View style={{ alignSelf: "center" }}>
          {MENUS.map((it, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  ...txtRotation,
                  height: MENU_HEIGHT,
                  justifyContent: "center"
                }}
                onPress={() => this.onClickMenu(index)}
              >
                <Text
                  style={[
                    styles.drawerText,
                    { color: index === position ? "white" : "gray" }
                  ]}
                >{`${it}`}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        {/* drawer side view inluding arrow and touchability to open drawer */}
        <View style={styles.arrowView}>
          <TouchableOpacity
            style={styles.arrowLineView}
            onPress={() =>{
              // for ReactNative-gesture-handler based drawer
              // drawer can be open by drawer referance
              if(this.props.drawer)
              this.props.drawer.openDrawer()
              else
              this.props.navigation.toggleDrawer()
            }}
            activeOpacity={10}
          />
          <Animated.View
            style={[
              styles.cornerRect,
              {
                transform: [{ translateY: cursorPosition }, { rotate: "-45deg" }]
              }
            ]}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  arrowView: { position: "absolute", right: -20 },
  arrowLineView: {
    width: 20,
    backgroundColor: "black",
    flexDirection: "row",
    height
  },
  container: {
    width: 60,
    height,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },
  drawerText: {
    fontSize: 15,
    textAlign: "center",
    color: "white"
  },
  cornerRect: {
    position: "absolute",
    backgroundColor: "black",
    height: 16,
    width: 16,
    left: 12,
    top: 0,
    transform: [
      {
        rotate: "45deg"
      }
    ]
  },
  searchIcon:{
    fontSize:26,
    color:'white',
    position: 'absolute',
    top:40
  }
});
