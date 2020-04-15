import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as actionCreator from "../store/actions/actions";
import { useSelector, useDispatch, } from "react-redux";
import { SimpleAnimation } from 'react-native-simple-animations';
import Header from './utils/Header';
import { Container, Content, Card, CardItem, Body } from 'native-base';
import Loader from './utils/Loader';
import I18n from '../i18n/i18n';

function PestNews({ navigation }) {
    const [refreshing, setRefreshing] = useState(false);
    const pestNews = useSelector(state => state.pestNews);
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        setLoader(true);
        dispatch(actionCreator.getPestsNews());
        setTimeout(() => {
            setLoader(false);
        }, 2000);

    }, []);
    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await dispatch(actionCreator.getPestsNews());
        setRefreshing(false);
    }, [refreshing]);
    const navigateToWebViewScreen = (item) => {
        setLoader(true);
        navigation.navigate('WebViewScreen', item);
        setLoader(false);
    }
    return (
        <Container>
            <Header navigation={navigation} />
            <View style={{ justifyContent: 'center', marginTop: hp('2.5%') }}>
                <Text style={{ justifyContent: 'center', textAlign: 'center', color: '#565656', fontWeight: 'bold', fontSize: wp('6%') }}>{I18n.t('PESTNEWS')}</Text>
            </View>
            <Content>
                {
                    loader ? (<Loader />) : (null)
                }
                <View style={{ height: hp('78%') }}>
                    <SimpleAnimation movementType='spring' delay={500} duration={6000} fade staticType='zoom' direction='left'>
                        {
                            pestNews === undefined ? (null) : (
                                <FlatList
                                    data={pestNews.value}
                                    refreshControl={
                                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                                    }
                                    renderItem={({ item, index }) => {
                                        return (
                                            <Card>
                                                <CardItem>
                                                    <Body>
                                                        <TouchableOpacity onPress={() => navigateToWebViewScreen(item)}>
                                                            <Text>
                                                                {item.article}
                                                            </Text>
                                                        </TouchableOpacity>
                                                    </Body>
                                                </CardItem>
                                            </Card>
                                        )
                                    }
                                    }
                                />
                            )
                        }
                    </SimpleAnimation>

                </View>


            </Content>
        </Container>
    )
}

export default PestNews;