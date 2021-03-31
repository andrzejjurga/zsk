import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput, Animated } from "react-native";

export default class App extends Component {
  state = {
    anim: new Animated.Value(0),
  };

  animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.anim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.anim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        })
      ]
      )
    ).start();
  };



  render() {
    return (
      <View style={styles.container}>
        <Button title="Start" onPress={this.animate}></Button>
        <Animated.View style={[styles.circle1, {transform:
              [
                {
                  translateY: this.state.anim.interpolate({
                    inputRange:[0, 1],
                    outputRange:[0, 250]
                  })
                },
                {
                  translateX: this.state.anim.interpolate({
                    inputRange:[0, 1],
                    outputRange:[0, 250]
                  })
                },
                {
                translateY: -750,
              },
              {
                translateX: -150,
              },
              ],}]}></Animated.View>
        <Animated.View style={[styles.circle2, {transform:
              [
                {
                  translateY: this.state.anim.interpolate({
                    inputRange:[0, 1],
                    outputRange:[0, 250]
                  })
                },
                {
                  translateX: this.state.anim.interpolate({
                    inputRange:[0, 1],
                    outputRange:[0, -250]
                  })
                },
                {
                translateY: -750,
              },
              {
                translateX: 150,
              },
              ],}]}></Animated.View>
        <Animated.View style={[styles.circle3, {transform:
              [
                {
                  translateY: this.state.anim.interpolate({
                    inputRange:[0, 1],
                    outputRange:[0, -250]
                  })
                },
                {
                  translateX: this.state.anim.interpolate({
                    inputRange:[0, 1],
                    outputRange:[0, 250]
                  })
                },
                {
                translateY: -450,
              },
              {
                translateX: -150,
              },
              ],}]}></Animated.View>
        <Animated.View style={[styles.circle4, {transform:
              [
                {
                  translateY: this.state.anim.interpolate({
                    inputRange:[0, 1],
                    outputRange:[0, -250]
                  })
                },
                {
                  translateX: this.state.anim.interpolate({
                    inputRange:[0, 1],
                    outputRange:[0, -250]
                  })
                },
                {
                translateY: -450,
              },
              {
                translateX: 150,
              },
              ],}]}></Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "aquamarine",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  circle1: {
    backgroundColor: "red",
    width: 60,
    height: 60,
    borderRadius: 50,
    position: "absolute",
  },
  circle2: {
    backgroundColor: "yellow",
    width: 60,
    height: 60,
    borderRadius: 50,
    position: "absolute",
  },
  circle3: {
    backgroundColor: "blue",
    width: 60,
    height: 60,
    borderRadius: 50,
    position: "absolute",
  },
  circle4: {
    backgroundColor: "pink",
    width: 60,
    height: 60,
    borderRadius: 50,
    position: "absolute",
  },


})