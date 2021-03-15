import React, {Component} from 'react';
import { StyleSheet, Button, Text, Animated, View } from 'react-native';

class App extends Component{

  state = {
    anim: new Animated.Value(0),
  };

  animate = () => {
    Animated.loop(
      Animated.timing(this.state.anim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })).start();
  };

  render(){
    return (
      <>
        <View style={{flex: 1}}>
          <Button title="Klikaj" onPress={this.animate}></Button>
          <View style={{flex: 0.8, justifyContent: 'center', alignItems: 'center'}}>
            <Animated.View style={[styles.box, {
              transform:[
                {
                  rotateZ: this.state.anim.interpolate({
                    inputRange:[0, 1],
                    outputRange:['0deg', '360deg']
                  })
                },
                {
                  translateY: 5,
                },
                {
                  translateX: 40,
                },
              ]
            }]}></Animated.View>
            <Animated.View style={[styles.box1, {
              transform:[
                {
                  translateY: -5,
                },
                {
                  translateX: 80,
                },
                {
                  rotateZ: this.state.anim.interpolate({
                    inputRange:[0, 1],
                    outputRange:['0deg', '360deg']
                  })
                },
              ]
            }]}></Animated.View>
          </View>
        </View>
      </>
      );
      
    };
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'green',
    width:80,
    height:10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box1: {
    backgroundColor: 'red',
    width:80,
    height:10,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default App;