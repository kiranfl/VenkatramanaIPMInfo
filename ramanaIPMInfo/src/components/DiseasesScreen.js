import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as actionCreator from "../store/actions/actions";
import { useSelector, useDispatch, } from "react-redux";

function DiseasesScreen() {
    const getCategories = useSelector(state => state.cropCategories);
    const selectedCrop = useSelector(state => state.selectedcropsList);
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = React.useState(false);


    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        dispatch(actionCreator.getCropCategories(selectedCrop.id));
        setRefreshing(false);
    }, [refreshing]);

    return (
        <View>
            <View style={{ justifyContent: 'center', width: wp('100%'), height: hp('5%'), marginTop: hp('2.5%') }}>
                <Text style={{ textAlign: 'center', color: '#565656', fontWeight: 'bold', fontSize: wp('6%') }}>{getCategories[0].name}</Text>
            </View>

            <View style={{ height: hp('72%') }}>
                <FlatList
                    data={getCategories[0]._subCategories}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index}>
                                <TouchableOpacity style={{ width: wp('93%'), height: hp('15%'), backgroundColor: '#fff', marginLeft: wp('4%'), borderRadius: 5, marginTop: hp('1%') }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View>
                                            <Image
                                                style={{ width: 120, height: hp('14.5%'), marginLeft: wp('0.7%'), marginTop: hp('0.3%') }}
                                                source={{
                                                    uri: 'https://ipminfo.s3.amazonaws.com/1515002423483.JPG',
                                                }}
                                            />
                                        </View>
                                        <View style={{ justifyContent: 'center', marginLeft: wp('2%') }}>
                                            <Text numberOfLines={1} style={{ textAlign: 'center', color: '#565656', fontSize: wp('4.5%') }}>{item.name}</Text>
                                        </View>

                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                    }
                />
            </View>


        </View >
    )
}

export default DiseasesScreen;