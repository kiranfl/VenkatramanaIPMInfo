import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from './utils/Header';


export default function FarmCrops({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Header navigation={navigation} />
            <View>
                <Text>FarmCrops Screen</Text>
            </View>
        </View>

    );
}