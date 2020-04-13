import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import reactotron from 'reactotron-react-native';

function SplashScreen({ navigation }) {
    useEffect(async () => {
        setTimeout(async () => {
            reactotron.log('languageScreen', await AsyncStorage.getItem('languageScreen'))
            let result = await AsyncStorage.getItem('languageScreen');
            if (result === 'selected') {
                navigation.navigate('Home');
            } else {
                navigation.navigate('Language');
            }

        }, 2000);
    }, [])
    return (
        <View style={{ backgroundColor: 'rgb(235, 183, 52)', flex: 1, justifyContent: 'center', alignContent: 'center' }}>
            <Text style={{ textAlign: 'center', fontSize: wp('10%'), color: '#fff' }}>IPMInfo</Text>
        </View>
    )
}

export default SplashScreen;