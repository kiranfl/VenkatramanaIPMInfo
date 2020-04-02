import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from './utils/Header';

import Carousel from 'react-native-snap-carousel';



function FarmCrops({ navigation }) {

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
        console.log("snapped to ", index)
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <View>
                <View style={{ position: 'absolute', top: hp('3%'), left: wp('17%') }}>
                    <Text style={{ color: '#565656', fontWeight: 'bold', fontSize: wp('6%') }}>Strawberry</Text>
                </View>
            </View>
            <Carousel
                data={[
                    {
                        title: "Item 1",
                        image: 'https://ipminfo.s3.amazonaws.com/1515002423483.JPG',
                        selected: true
                    },
                    {
                        title: "Item 2",
                        image: 'https://ipminfo.s3.amazonaws.com/1530790083310.jpg',
                        selected: false
                    },
                ]}
                sliderWidth={300}
                itemWidth={150}
                renderItem={_renderItem}
                onSnapToItem={(index) => handleSnapToItem(index)}
            />
            <View style={{ position: 'absolute', top: hp('45%'), left: wp('17%') }}>
                <Text style={{ color: '#565656', fontSize: wp('5%') }}>Fragaria X Anananassa</Text>
                <Text style={{ color: '#565656', fontSize: wp('3.5%'), marginBottom: hp('0.5%') }}>Red juicy, aromatic,sweet and tangy fruit</Text>
            </View>
            <View>
                <Image
                    style={{ width: wp('100%'), height: hp('34%') }}
                    source={{
                        uri: 'https://ipminfo.s3.amazonaws.com/1530790083310.jpg',
                    }}
                />
            </View>
            <View style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                borderTopColor: 'rgb(211,211,211)',
                borderTopWidth: wp('0.2%'),
            }}>
                <TouchableOpacity>
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