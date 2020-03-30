import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import I18n from '../i18n/i18n';
import { getCrops, storeCropsList } from '../store/actions/actions';
import * as actionCreator from "../store/actions/actions";
import { connect, useSelector, useDispatch, } from "react-redux";

function CropsDetailsScreen() {
    return (
        <View>
            <Text>Crops Details Screen</Text>
        </View>
    )
}

export default CropsDetailsScreen;