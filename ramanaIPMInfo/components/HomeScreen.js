import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
class HomeScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Text>
                    This is HomeScreen
                </Text>
            </View>
        )
    }
}
export default HomeScreen;