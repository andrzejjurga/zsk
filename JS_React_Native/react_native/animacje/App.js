import React, { Component } from "react";
import { Animated, Text, View, StyleSheet, Button, Image, ImageBackground, PixelRatio } from "react-native";
import Slider from '@react-native-community/slider';


class App extends Component {
  state = {
    anim: new Animated.Value(0),
    vel: 10,
  };

fadeIn = () => {
    Animated.loop(Animated.sequence([Animated.timing(this.state.anim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver:true,
    }),
   Animated.delay(0), 
   Animated.timing(this.state.anim, {
      toValue: 0,
      duration: 0,
      useNativeDriver:true,
    }),

  ])).start();
  };

  fadeOut = () => {
    Animated.loop(Animated.timing(this.state.anim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver:true,
    })).start();
    };


  fadeStop = () => {
    Animated.timing(this.state.anim).stop();
  };


  setDeg(i)
  {
    let k = i*this.state.vel;
    return k.toString()+'deg'
  }

  render() {
    return (
      <>
      <ImageBackground source={require('./src/bcg.png')} style={styles.image}>
        <View style={styles.container}> 
          <View style={{position:"absolute", top:80, left:240}}>
            <Image source={require('./src/pole.png')} style={styles.pole}></Image>
          </View>
          <View style={{position:"absolute", top:60, left:240}}>
            <Animated.Image source={require('./src/wings.png')} style={[ styles.pole, 
           {
            transform: 
            [
                
                { rotateZ: this.state.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [this.setDeg(0), this.setDeg(360)]
                  })  ,
                },
                { translateY: 21
                    ,
                },
                { translateX: 0
                    ,
                },
              
            ]
           }
          ]}></Animated.Image>
          </View>

        </View>
      </ImageBackground>
      <View style={styles.navBar}>
        <View style={{flexDirection:"row"}}>
          <View style={{alignItems:"center"}}>
            <Slider
              style={{width: 150, height: 40}}
              minimumValue={0}
              maximumValue={10}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onValueChange = {value => this.setState({vel: value})}
            />
          </View> 
          <Button title="pause" onPress={this.fadeIn}></Button>
          <View style={{alignItems:"center"}}>
            <Slider
              style={{width: 150, height: 40}}
              minimumValue={0}
              maximumValue={10}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onValueChange = {value => this.setState({vel: value})}
            />
          </View> 
          <Button title="pause"></Button>
        </View>
        <View style={{flexDirection:"row"}}>
          <Text style={{color:'white'}}>Gęstość opadu:</Text>
          <View style={{alignItems:"center"}}>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={10}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onValueChange = {value => this.setState({vel: value})}
            />
          </View> 
        </View>
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
  },
  navBar: {
    flex: 0.1,
    backgroundColor: "gray",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  pole: {
    width: PixelRatio.getPixelSizeForLayoutSize(70),
    height: PixelRatio.getPixelSizeForLayoutSize(70),
    position:'absolute'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});

export default App;