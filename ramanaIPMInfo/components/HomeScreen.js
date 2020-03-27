import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import I18n from '../i18n/i18n';


class HomeScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Text>{I18n.t('greeting')}</Text>
            </View>
        )
    }
}
export default HomeScreen;