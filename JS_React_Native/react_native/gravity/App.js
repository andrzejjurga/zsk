import React, { Component } from "react";
import { StyleSheet, PanResponder, View, Text, Dimensions, DevSettings } from "react-native";

export default class PanResponderPrzyklad extends Component {
    // wartości początkowe
    _panResponder = {};
    _poprzedniLewo = 0;
    _poprzedniGora = 0;
    _styleKol = {};
    kolo = null;

    constructor(props) {
        super(props);
        this.state = {
            aktywneDotyki: 0,
            ruchX: 0,
            ruchY: 0,
            x0: 0,
            y0: 0,
            dx: 0,
            dy: 0,
            vx: 0,
            vy: 0,
            x: 0
        };
    }

    UNSAFE_componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: this._obslugaPanResponderPrzyznano,
            onPanResponderMove: this._obslugaPanResponderRuch,
            onPanResponderRelease: this._animacja,
        });
        this._poprzedniLewo = 20;
        this._poprzedniGora = Dimensions.get('window').height-80;
        this._styleKol = {
            style: { left: this._poprzedniLewo, top: this._poprzedniGora }
        };
    }

    componentDidMount() {
        this._zaktualizujPozycje();
    }

    render() {
        return (
            <View style={styles.container}>
              <Text>
                  dx: {this.state.dx},{"\n"}
                  dy: {this.state.dy},{"\n"}
                  vx: {this.state.vx},{"\n"}
                  vy: {this.state.vy}
              </Text>
                <View
                    ref={kolo => {
                        this.kolo = kolo;
                    }}
                    style={styles.kolo}
                    {...this._panResponder.panHandlers}
                />
            </View>
        );
    }


    // Za pomocą setNativeProps kontrolujemy właściwość kuli
    _zaktualizujPozycje = () => {
        this.kolo && this.kolo.setNativeProps(this._styleKol);
    };

    _obslugaPanResponderRuch = (event, stanGestu) => {
        this.setState({
            idStanu: stanGestu.stateID,
            ruchX: stanGestu.moveX,
            ruchY: stanGestu.moveY,
            x0: stanGestu.x0,
            y0: stanGestu.y0,
            dx: stanGestu.dx,
            dy: stanGestu.dy,
            vx: stanGestu.vx,
            vy: stanGestu.vy,
            aktywneDotyki: stanGestu.numberActiveTouches
        });
     };
        
    _obslugaPanResponderKoniec = (event, stanGestu) => {
        this._poprzedniLewo += stanGestu.dx;
        this._poprzedniGora += stanGestu.dy;
    };
    _animacja = (event, stanGestu) => {
        this.state.x += 1;
        this._styleKol.style.top =Dimensions.get('window').height - 80 -1 * (this.state.x* ((this.state.dy / this.state.dx)*-1)) + (9.8/(100*(this.state.vx*this.state.vx))) *  this.state.x *  this.state.x;
        this._styleKol.style.left += 1;

        this._zaktualizujPozycje();
        if(Dimensions.get('window').height < this._styleKol.style.top || this._styleKol.style.top<0 || Dimensions.get('window').width < this._styleKol.style.left)
        {
            this._styleKol.style.left = 20;
            this._styleKol.style.top = Dimensions.get('window').height-80;
            this._zaktualizujPozycje();
            DevSettings.reload()
            this.state.x = 0;
            this.state.dy = 0;
        }
        else
        {
            requestAnimationFrame(this._animacja);
        }
  };

}

//styles
const styles = StyleSheet.create({
    kolo: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'blue',
        position: "absolute",
        left: 0,
        top: 0
    },
    container: { flex: 1 }
});