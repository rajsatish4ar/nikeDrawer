import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
const descriptions = `Nike UI Animation`;
export default props => {
  return (
    <View style={styles.container}>
      <Text>{descriptions}</Text>

     
      <Text style={styles.type}>Using React-native-gesture-handler</Text>
      <Button
        title="Using React Navigation Gesture Handler"
        onPress={() => props.navigation.navigate("FirstApp")}
      />
      <Text style={styles.type}>Using React-navigation</Text>
      <Button
        title="Using React Navigation"
        onPress={() => props.navigation.navigate("SecondApp")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  type: { marginTop: 20, marginBottom: 20 },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
