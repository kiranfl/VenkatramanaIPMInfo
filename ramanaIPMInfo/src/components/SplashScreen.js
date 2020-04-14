import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import reactotron from 'reactotron-react-native';
import I18n from 'react-native-i18n';
import * as actionCreator from "../store/actions/actions";
import { connect, useSelector, useDispatch, } from "react-redux";


function SplashScreen({ navigation }) {
    const dispatch = useDispatch();
    //const cropsList = useSelector(state => state.cropsList);
    useEffect(async () => {
        let cropsList = await dispatch(actionCreator.getCrops());
        setTimeout(async () => {
            let result = await AsyncStorage.getItem('languageScreen');
            if (result === 'es' || result === 'en') {
                I18n.locale = result;
                let getCrops = [...cropsList.payload];
                getCrops[0].selected = !cropsList.payload[0].selected;
                await dispatch(actionCreator.storeCropsList(getCrops));
                await dispatch(actionCreator.storeSelectedstore(getCrops[0]));
                navigation.navigate('CropsDetails');
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