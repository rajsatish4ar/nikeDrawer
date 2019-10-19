import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
const descriptions  =`Nike UI Animation`
export default (props)=> {
  return (
    <View style={styles.container}>
      <Text>Hello World,</Text>
      <Text>{descriptions}</Text>
      <Button
      title='Using React Navigation Gesture Handler'
      onPress={()=>props.navigation.navigate('FirstApp')}
      />
       <Button  
      title='Using React Navigation'
      onPress={()=>props.navigation.navigate('SecondApp')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
