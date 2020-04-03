import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as actionCreator from "../store/actions/actions";
import { useSelector, useDispatch, } from "react-redux";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiseasesScreen from './DiseasesScreen';
import PestScreen from './PestScreen';


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#e91e63',
            labelStyle: {
                fontSize: wp('4%'),
            },
            style: {
                height: hp('8%')
            },
        }
        }>
            <Tab.Screen name="Diseases" component={DiseasesScreen}
                options={{
                    tabBarLabel: 'Diseases',
                    tabBarIcon: () => (
                        <Image style={{ width: wp('5%'), height: hp('3%'), marginTop: hp('2%') }} source={require('../../assets/images/diseas.png')} />
                    ),
                }}
            />
            <Tab.Screen name="Pests" component={PestScreen}
                options={{
                    tabBarLabel: 'Pests',
                    tabBarIcon: () => (
                        <Image style={{ width: wp('5%'), height: hp('3%'), marginTop: hp('2%') }} source={require('../../assets/images/pests.png')} />
                    ),
                    labelStyle: { fontSize: wp('20%') }
                }}
            />
        </Tab.Navigator>
    );
}


function SelectedCropsDetailsScreen() {
    /*const selectedCrop = useSelector(state => state.selectedcropsList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actionCreator.getCropCategories(selectedCrop.id));
    }, []);*/
    return (
        <View style={{ flex: 1 }}>
            <MyTabs />
        </View>
    )
}

export default SelectedCropsDetailsScreen;