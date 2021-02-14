import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Easing, Button } from 'react-native';

const AnimOne = () =>  {
    const movEl = useRef(new Animated.ValueXY()).current;

    const runAnim = () => {
        Animated.timing(movEl,{
            toValue:{x:150,y:-350},
            duration:2000,
            easing:Easing.bounce
        }).start();
    }


    return (
        <>
        <View style={styles.container}>
            <Animated.View style={movEl.getLayout()}>
                <View style={styles.circle}>
                    <Text>Anim one</Text>
                </View>
            </Animated.View>
         
        </View>
            <Button
            title="Animation"
            onPress={runAnim}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffffff',
        height:'95%',
        display:'flex',
        justifyContent:'flex-end'
    },
    circle:{
        width:100,
        height:100,
        backgroundColor:'red',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AnimOne;