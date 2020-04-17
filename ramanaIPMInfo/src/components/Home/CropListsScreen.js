import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import I18n from '../../i18n/i18n';
import * as actionCreator from "../../store/actions/actions";
import { connect, useSelector, useDispatch, } from "react-redux";


function CropListsScreen({ navigation }) {
    useEffect(() => {
        dispatch(actionCreator.getCrops());
    }, []);
    const cropsList = useSelector(state => state.cropsList);
    const dispatch = useDispatch();
    const selectCrop = index => {
        let getCrops = [...cropsList];
        getCrops[index].selected = !cropsList[index].selected;
        dispatch(actionCreator.storeCropsList(getCrops));
        dispatch(actionCreator.storeSelectedstore(getCrops[0]));
    }
    navigateToNextScreen = () => {
        navigation.navigate('CropsDetails');
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginLeft: wp('5%'), marginTop: hp('3%') }}>
                <View>
                    <Text style={styles.titleText}>{I18n.t('PICK_CROP_INTEREST')}</Text>
                </View>
                <View>
                    <Text style={styles.titleLang}>{I18n.t('CROP')}(s)</Text>
                </View>
            </View>
            <FlatList
                data={cropsList}
                style={{ marginTop: hp('2.5%') }}
                numColumns={2}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={{
                            justifyContent: 'space-between',
                            marginLeft: wp('3.5%')
                        }} onPress={() => selectCrop(index)}>
                            <View style={{ flexDirection: 'column' }}>
                                <Image
                                    style={{ width: wp('45%'), height: hp('15%') }}
                                    source={{
                                        uri: item.image,
                                    }}
                                />
                                <View style={item.selected ? (styles.cropSelectedStyle) : (styles.cropStyle)}>
                                    <Text style={item.selected ? (styles.cropTextSelected) : (styles.cropText)}>{item.name}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item.id}
            />
            <View style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                borderTopColor: 'rgb(211,211,211)',
                borderTopWidth: wp('0.2%'),
            }}>
                <TouchableOpacity onPress={() => navigateToNextScreen()}>
                    <View style={{ width: wp('20%'), height: hp('10%'), borderWidth: wp('0.5%'), borderColor: 'rgb(211,211,211)' }}>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'Bold', fontSize: hp('3%'), marginTop: hp('2%') }}>{I18n.t('NEXT')}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    titleText: {
        fontWeight: 'bold', color: 'rgb(26, 25, 24)', fontSize: hp('5%')
    },
    titleLang: {
        fontWeight: 'bold', color: 'rgb(66, 245, 173)', fontSize: hp('5%')
    },
    cropStyle: {
        width: wp('45%'),
        height: hp('6%'),
        backgroundColor: 'rgb(220,220,220)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cropSelectedStyle: {
        width: wp('45%'),
        height: hp('6%'),
        backgroundColor: 'rgb(0, 0, 102)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cropText: {
        justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: hp('2.8%'), color: 'rgb(0, 51, 0)'
    },
    cropTextSelected: {
        justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: hp('2.8%'), color: 'rgb(255, 255, 255)'
    },
})
export default CropListsScreen;