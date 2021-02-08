import React, { Component } from "react";
import { View} from "react-native";

class App extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 10
        }}
      >
        <View style={{ backgroundColor: "blue", flex: 0.4 }} />
        <View style={{ backgroundColor: "red", flex: 0.6 }} />
	  </View>
    );
  }
}

export default App
