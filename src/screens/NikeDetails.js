import React,{useState} from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
const { width } = Dimensions.get("screen");
const ITEMS = [1, 2, 3, 4, 5];
export default (props)=> {
  
  renderList = () => {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <>
          {ITEMS.map((item, index) => {
            return (
              <Image
                source={require("../../assets/shoes/shoe_men_3.png")}
                style={styles.image}
                resizeMode="contain"
                key={index}
              />
            );
          })}
        </>
      </ScrollView>
    );
  };
  return (
    <View>
      <View style={styles.header}>
          <Icon name="keyboard-backspace" type="MaterialCommunityIcons"
          style={{fontSize:28}} 
          onPress={()=>{ 
            props.navigation.goBack()?props.navigation.goBack():
              props.navigation.navigate('NikeHome')
          
          }}
          />
         <Text style={{alignSelf:'center'}}>Details</Text>
         <View/>
        </View>

      <ScrollView contentContainerStyle={{padding:16}}>
      {this.renderList()}
      <Text style={styles.price}>{`$180`}</Text>
      <Text style={styles.title}>{`Nike Air\nMax 270`}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 8
  },
  price: {
    fontWeight: "600",
    color: "gray",
    fontSize:20
  },
  image: {
    width: width - 32,
    height: 200,
    alignSelf: "center"
  },
  header: {
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop:40,
    padding:8,
  },
  logo: { width: 120, height: 40 }
});
