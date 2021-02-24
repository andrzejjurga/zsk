import React, { Component } from "react";
import { Animated, Text, View, StyleSheet, Switch, Image, ImageBackground, PixelRatio, Easing } from "react-native";
import Slider from '@react-native-community/slider';
import { linear } from "react-native/Libraries/Animated/src/Easing";


class App extends Component {
  
  state = {
    anim: new Animated.Value(0),
    anim2: new Animated.Value(0),
    vel: 1,
    vel2: 1,
    switchValue: false,
    switchValue2: false,
  };

  spin = () => {
    Animated.loop(
      Animated.timing(this.state.anim, {
        toValue: 1,
        duration: 3600,
        useNativeDriver: false,
        easing: Easing.linear,
      })
    ).start();
  }

  spin2 = () => {
    Animated.loop(
      Animated.timing(this.state.anim2, {
        toValue: 1,
        duration: 3600,
        useNativeDriver: false,
        easing: Easing.linear,
      })
    ).start();
  }


  spinStop = () => {
    Animated.timing(this.state.anim).stop();
  };  
  spinStop2 = () => {
    Animated.timing(this.state.anim2).stop();
  };

  setDeg(i, speed)
  {
    let k = i*speed;
    return k.toString()+'deg'
  }

  render() {
    return (
      <>
      <ImageBackground source={require('./src/bcg.png')} style={styles.image}>
        <View style={styles.container}> 
        {/*Wiatrak 1*/}
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
                  outputRange: [this.setDeg(0, this.state.vel), this.setDeg(360, this.state.vel)]
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
          {/*Wiatrak 2*/}
          <View style={{position:"absolute", top:80, left:600}}>
            <Image source={require('./src/pole.png')} style={styles.pole}></Image>
          </View>
          <View style={{position:"absolute", top:60, left:600}}>
            <Animated.Image source={require('./src/wings.png')} style={[ styles.pole, 
           {
            transform: 
            [
                
                { rotateZ: this.state.anim2.interpolate({
                  inputRange: [0, 1],
                  outputRange: [this.setDeg(0, this.state.vel2), this.setDeg(360, this.state.vel2)]
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
              onValueChange = {value => this.setState({vel: value})}
            />
          </View> 
          <Switch
            value={this.state.switchValue}  
            onValueChange ={(switchValue)=>this.setState({switchValue}, switchValue ? this.spin :this.spinStop)}
          />
          <View style={{alignItems:"center"}}>
            <Slider
              style={{width: 150, height: 40}}
              minimumValue={0}
              maximumValue={10}
              onValueChange = {value => this.setState({vel2: value})}
            />
          </View> 
          <Switch
            value={this.state.switchValue2}  
            onValueChange ={(switchValue2)=>this.setState({switchValue2}, switchValue2 ? this.spin2 :this.spinStop2)}
          />
        </View>
        <View style={{flexDirection:"row"}}>
          <Text style={{color:'white'}}>Gęstość opadu:</Text>
          <View style={{alignItems:"center"}}>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={10}
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