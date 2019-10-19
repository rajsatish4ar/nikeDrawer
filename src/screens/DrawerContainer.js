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
import Drawer from '../components/Drawer';

const styles = StyleSheet.create({
  container: {
     height,
     backgroundColor:'white'
   },
 });
 
 const DrawerContainer =  (Wrapcomponents)=> {
    class Container extends Component {
     render() {
      return (
        <View style={styles.container}>
          <DrawerLayout
            ref={drawer => {
              this.drawer = drawer;
            }}
            drawerWidth={65}
            drawerPosition={DrawerLayout.positions.Left}
            drawerType="slide"
            drawerBackgroundColor="#ddd"
            overlayColor={"#00000000"}
            renderNavigationView={()=><Drawer drawer={this.drawer}/>}
            >
           <>
           <StatusBar barStyle="dark-content"/>
            <View style={{flexDirection:'row'}}>
            {/* screen to row wise and first view is of width 30 so that drawer close view can be visible */}
            <TouchableOpacity style={{width:30}}
            onPress={()=>this.drawer.openDrawer()}
            />
            <Wrapcomponents {...this.props}/>
            </View>
           </>
          </DrawerLayout>
         
        </View>
      );
     }
   }
   return Container
   
}
export default DrawerContainer
