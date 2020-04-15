import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from './utils/Header';
import * as actionCreator from "../store/actions/actions";
import { useSelector, useDispatch, } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';
import I18n from '../i18n/i18n';
import { Container, Content, Card, CardItem, Thumbnail, Button, Left, Body, Right } from 'native-base';


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
            {/* <View>
                <Image
                    style={{ width: wp('100%'), height: hp('34%') }}
                    source={{
                        uri: selectedCrop.image,
                    }}
                />
                <View style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    borderTopColor: 'rgb(211,211,211)',
                    borderTopWidth: wp('0.2%'),
                }}>
                    <View>
                        <View style={{ width: wp('20%'), height: hp('7%'), justifyContent: 'center' }}>
                            <Image style={{ position: 'absolute', right: wp('85%'), width: 50, height: 30 }} source={require('../../assets/images/strawberry.jpg')} />
                            <Text style={{ right: wp('35%'), width: wp('29%'), position: 'absolute', fontWeight: 'bold', fontSize: wp('4.5%'), color: '#565656' }}>{I18n.t('MORE_DETAILS')}</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigateToNextScreen()} style={{ position: 'absolute', top: hp('1.5%'), left: wp('10%') }}>
                            <Icon name="arrow-circle-right" size={30} color='#565656' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View> */}

            <View>
                <Image style={styles.backgroundImage} source={{ uri: selectedCrop.image }} />
                <View>
                    <Button transparent>
                        <View style={{
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            borderTopColor: 'rgb(211,211,211)',
                        }}>
                            <View>
                                <View style={{ width: wp('20%'), height: hp('7%'), justifyContent: 'center', opacity: 0.8 }}>
                                    <Image style={{ position: 'absolute', width: 50, height: 30, top: hp('3%') }} source={require('../../assets/images/strawberry.jpg')} />
                                    <Text style={{ top: hp('3%'), left: wp('35%'), width: wp('29%'), position: 'absolute', fontWeight: 'bold', fontSize: wp('4.5%'), color: '#ffffff' }}>{I18n.t('MORE_DETAILS')}</Text>
                                </View>
                                <TouchableOpacity onPress={() => navigateToNextScreen()} style={{ position: 'absolute', top: hp('2.5%'), left: wp('90%') }}>
                                    <Icon name="arrow-circle-right" size={30} color='#ffffff' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Button>
                </View>
            </View>

        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '650%',
        justifyContent: 'center',
        bottom: hp('1%')
    },
});

export default FarmCrops;