
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput
} from 'react-native';



class App extends Component {
constructor(props)
{
  super(props);
  this.state={Num1:0, Num2:0, Wynik:0};
}

Sum=()=>
{
  var N1= parseInt(this.state.Num1);
  var N2= parseInt(this.state.Num2);
  var wyn = N1 + N2;
  this.setState({Wynik}) = wyn;
  alert(wyn);
}

Diff=()=>
{
  var N1= parseInt(this.state.Num1);
  var N2= parseInt(this.state.Num2);
  var wyn = N1 - N2;
  alert(wyn);
}

Mul=()=>
{
  var N1= parseInt(this.state.Num1);
  var N2= parseInt(this.state.Num2);
  var wyn = N1 * N2;
  alert(wyn);
}

Div=()=>
{
  var N1= parseInt(this.state.Num1);
  var N2= parseInt(this.state.Num2);
  var wyn = N1 / N2;
  alert(wyn);
}
  render(){

    return (
    <>
    <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'green'}}>
  
      
    <TextInput
        style={{height: 40, width: 150, backgroundColor: 'orange'}}
        placeholder="Liczba 1"
        onChangeText={Num1=>this.setState({Num1})}
        />
    <TextInput
        style={{height: 40, width: 150, backgroundColor: 'orange'}}
        placeholder="Liczba 2"
        onChangeText={Num2=>this.setState({Num2})}
        />
      <View>
      <Button title="Oblicz sume" onPress={this.Sum}></Button>
      <Button title="Oblicz różnice" onPress={this.Diff}></Button>
      <Button title="Oblicz iloczyn" onPress={this.Mul}></Button>
      <Button title="Oblicz iloraz" onPress={this.Div}></Button>
      </View>
      <Text
        style={{height: 40, width: 150, backgroundColor: 'orange'}}
        value={this.state.Wynik}
        />
    </View>
    </>
  );
};
}



export default App;
