import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function SplashScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Language');
        }, 2000);
    }, [])
    return (
        <View style={{ backgroundColor: 'rgb(235, 183, 52)', flex: 1, justifyContent: 'center', alignContent: 'center' }}>
            <Text style={{ textAlign: 'center', fontSize: wp('10%'), color: '#fff' }}>IPMInfo</Text>
        </View>
    )
}

export default SplashScreen;