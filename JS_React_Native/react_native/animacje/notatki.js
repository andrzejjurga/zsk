import React, { Component } from "react";
import { Animated, Text, View, StyleSheet, Button, Image } from "react-native";
import Slider from '@react-native-community/slider';


class App extends Component {
  state = {
    anim: new Animated.Value(0),
    vel: 0,
  };

  /*fadeIn = () => {
    Animated.timing(this.state.anim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver:true,
    }).start();
  };

  fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(this.state.anim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver:true,
    }).start();
  };
*/

/*
fadeIn = () => {
    Animated.loop(Animated.timing(this.state.anim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver:true,
    })).start();
  };

  fadeOut = () => {
    Animated.loop(Animated.timing(this.state.anim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver:true,
    })).start();
    };
  */

/*
  fadeIn = () => {
|   Animated.sequence([Animated.timing(this.state.anim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver:true,
    }),
   Animated.timing(this.state.anim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver:true,
    }),

  ]).start();
  };

  fadeOut = () => {
    Animated.loop(Animated.timing(this.state.anim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver:true,
    })).start();
    };
*/
fadeIn = () => {
    Animated.loop(Animated.sequence([Animated.timing(this.state.anim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver:true,
    }),
   Animated.delay(1000), 
   Animated.timing(this.state.anim, {
      toValue: 0,
      duration: 1000,
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
      <View style={styles.container}>
      
        <Animated.View style={
          [ styles.box, 
           {
            transform: 
            [
                
                { rotateZ: this.state.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [this.setDeg(0), this.setDeg(360)]
                  })  ,
                },
                { translateY: 50
                    ,
                },
                { translateX: 50
                    ,
                },
              
            ]
           }
          ]
          }>            
        </Animated.View>
        

        <Animated.View style={
          [ styles.box, 
           {
            transform: 
            [
                { translateY: this.state.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 200]
                  })  ,
                },
              
            ]
           }
          ]
          }>            
        </Animated.View>
        

        <View style={styles.buttonRow}>
          <Button title="Anim 1" onPress={this.fadeIn} />
          <Button title="Anim 2" onPress={this.fadeOut} />
          <Button title="Anim stop" onPress={this.fadeStop} />
          
        </View>
        <View style={{alignItems:"center"}}>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={10}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onValueChange = {value => this.setState({vel: value})}
            />
            <Text>Kontrola obrotu</Text>
          </View> 
          <Image source={require('./src/pole.png')}></Image>
          <Image source={require('./src/wings.png')}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    
  box: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginVertical: 40,
    backgroundColor: "#61dafb",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "powderblue",
    opacity: 1,
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16
  }
});

export default App;