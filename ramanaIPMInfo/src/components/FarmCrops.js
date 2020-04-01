import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from './utils/Header';


export default function FarmCrops({ navigation }) {
    return (
        <TouchableOpacity style={{ width: wp('100%'), height: hp('7%'), backgroundColor: '#FFC300', justifyContent: 'center' }} onPress={() => navigation.openDrawer()}>
            <TouchableOpacity>
                <Image style={{ width: 25, height: 20, position: 'absolute', left: wp('5%'), top: hp('0.5%') }} source={require('../../assets/images/Topnav.png')} />
            </TouchableOpacity>
            <Text style={{ textAlign: 'center', alignItems: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: wp('5%') }}>IPMInfo</Text>
        </TouchableOpacity>
    );
}