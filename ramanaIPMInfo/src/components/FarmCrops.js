import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from './utils/Header';
import * as actionCreator from "../store/actions/actions";
import { useSelector, useDispatch, } from "react-redux";

import Carousel from 'react-native-snap-carousel';



function FarmCrops({ navigation }) {
    const cropsList = useSelector(state => state.cropsList);
    const selectedCrop = useSelector(state => state.selectedcropsList);
    useEffect(() => {
        dispatch(actionCreator.getCropCategories(selectedCrop.id));
    }, []);
    const dispatch = useDispatch();
    const _renderItem = ({ item, index }) => {
        return (
            <View style={{ flex: 1 }}>

                <View style={{ marginTop: hp('9%') }}>
                    <Image
                        style={{ width: 300, height: 200 }}
                        source={{
                            uri: item.image,
                        }}
                    />
                </View>
            </View>
        )
    }
    const handleSnapToItem = (index) => {
        dispatch(actionCreator.storeSelectedstore(cropsList[index]));
        dispatch(actionCreator.getCropCategories(cropsList[index].id));
    }
    navigateToNextScreen = () => {
        navigation.navigate('SelectedCropsDetailsScreen');
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <View>
                <View style={{ position: 'absolute', top: hp('3%'), left: wp('17%') }}>
                    <Text style={{ color: '#565656', fontWeight: 'bold', fontSize: wp('6%') }}>{selectedCrop.name}</Text>
                </View>
            </View>
            <Carousel
                data={cropsList}
                sliderWidth={300}
                itemWidth={150}
                renderItem={_renderItem}
                onSnapToItem={(index) => handleSnapToItem(index)}
            />
            <View style={{ position: 'absolute', top: hp('45%'), left: wp('17%') }}>
                <Text style={{ color: '#565656', fontSize: wp('5%') }}>{selectedCrop.scientificName}</Text>
                <Text style={{ color: '#565656', fontSize: wp('3.5%'), marginBottom: hp('0.5%') }}>{selectedCrop.description}</Text>
            </View>
            <View>
                <Image
                    style={{ width: wp('100%'), height: hp('34%') }}
                    source={{
                        uri: selectedCrop.image,
                    }}
                />
            </View>
            <View style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                borderTopColor: 'rgb(211,211,211)',
                borderTopWidth: wp('0.2%'),
            }}>
                <TouchableOpacity onPress={() => navigateToNextScreen()}>
                    <View style={{ width: wp('20%'), height: hp('10%'), borderWidth: wp('0.5%'), borderColor: 'rgb(211,211,211)' }}>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'Bold', fontSize: hp('3%'), marginTop: hp('2%') }}>Next</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default FarmCrops;