
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Button
} from 'react-native';



class App extends Component {

  state = {
    anim: new Animated.Value(0),
    vel: 10,
  };

  second = () => {
    Animated.loop(
    Animated.timing(this.state.anim, {
      toValue: 1,
      duration: 6000,
      useNativeDriver:true,
    })).start();
  };
  render(){

    return (
    <>
    <View>
    <Button title="clock" onPress={this.second}></Button>
    </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

      <Animated.View style={[styles.box, {transform: 
              [
                { rotateZ: this.state.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg']
                  }),
                },
                {
                translateY: 5,
              },
              {translateX: 50
                ,},
            ],}]}>

      </Animated.View>
      <Animated.View style={[styles.box2, {transform: 
              [
                {
                translateY: -5,
              },
              {translateX: 95
                ,},
                { rotateZ: this.state.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg']
                  })  ,
                },
            ],}]}>

      </Animated.View>
      </View>
    </>
  );
};
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'red',
    width:100,
    height:10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box2: {
    backgroundColor: 'green',
    width:80,
    height:10,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default App;
