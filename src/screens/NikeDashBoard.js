import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar
} from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";
const ITEMS = [1, 2, 3, 4];
const { width } = Dimensions.get("screen");
// remain 30 should be empty view so that closed drawer state can be visible

const screeWidth = width - 30;
export default class screens extends Component {
  showDetails = () => {
    this.props.navigation.navigate("NikeDetails");
  };
  renderItemList = () => {
    return (
      <ScrollView
        horizontal={true}
        style={{ marginTop: 20 }}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      >
        <>
          {ITEMS.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                style={styles.itemBox}
                onPress={this.showDetails}
              >
                <Text style={styles.price}>{`$180`}</Text>
                <Text style={styles.title}>{`Nike Air\nMax 270`}</Text>
                <Image
                  source={require("../../assets/shoes/shoe_men_3.png")}
                  style={styles.image}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            );
          })}
        </>
      </ScrollView>
    );
  };
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <View />
          <Image
            source={require("../../assets/shoes/nike_logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Icon name="search" type="FontAwesome" style={styles.searchIcon} />
        </View>
     
        <ScrollView
          contentContainerStyle={{ paddingLeft: 0, paddingRight: 16 }}
        >
          <View style={styles.headingView}>
            <Text style={styles.boldText}>{`Latest`}</Text>
            <Text style={styles.textGray}>{`Featured`}</Text>
            <Text style={styles.textGray}>{`Trending`}</Text>
          </View>
          {this.renderItemList()}
          <Text
            style={[styles.boldText, { marginTop: 50 }]}
          >{`More to Explore`}</Text>

          <TouchableOpacity style={styles.soloImageView} activeOpacity={1}>
            <Image
              source={require("../../assets/shoes/shoe_men_3.png")}
              style={{
                width: screeWidth,
                height: "100%",
                alignSelf: "center"
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          {this.renderItemList()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { width: screeWidth, alignSelf: "flex-end" },
  image: {
    width: screeWidth / 2,
    height: 90,
    alignSelf: "center"
  },
  soloImageView: {
    width: screeWidth - 18,
    backgroundColor: "#fcf6eb",
    height: 120,
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 20
  },
  textGray: { fontSize: 20, color: "gray" },
  boldText: { fontSize: 20, fontWeight: "bold" },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 8
  },
  price: {
    fontWeight: "600",
    color: "gray"
  },
  itemBox: {
    width: screeWidth / 2,
    height: 220,
    backgroundColor: "#fcf6eb",
    marginRight: 10,
    padding: 16,
    borderRadius: 8
  },
  headingView: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  header: {
    width: screeWidth,
    marginTop: 30,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 8
  },
  searchIcon: { color: "gray", fontSize: 24, alignSelf: "center" },
  logo: { width: 120, height: 40 }
});
