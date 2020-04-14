import React, { useEffect, useState, useCallback } from 'react';
import { Button, TouchableOpacity, ScrollView, StyleSheet, Image, Linking, Alert, FlatList, RefreshControl } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from './utils/Header';
import * as actionCreator from "../store/actions/actions";
import { useSelector, useDispatch, } from "react-redux";
import { Container, Content, Card, CardItem, Body, View, Text } from 'native-base';
import { WebView } from 'react-native-webview';
import Loader from './utils/Loader';
import reactotron from 'reactotron-react-native';

function VideosScreen({ navigation }) {
    const cropsVideos = useSelector(state => state.cropsVideos);
    const [refreshing, setRefreshing] = useState(false);
    const [getVideos, setVideos] = useState({});
    const [loader, setLoader] = useState(false);

    const dispatch = useDispatch();
    useEffect(async () => {
        setLoader(true);
        let result = await dispatch(actionCreator.getCropsVideosList());
        setLoader(false);
        setVideos(result);
    }, []);
    const navigateToWebViewScreen = async (item) => {
        //navigation.navigate('WebViewScreen', item);
        setLoader(true);
        const supported = await Linking.canOpenURL(item.url);
        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(item.url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${item.url}`);
        }
        setLoader(false);
    }
    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        setLoader(true);
        let result = await dispatch(actionCreator.getCropsVideosList());
        setVideos(result);
        setRefreshing(false);
        setLoader(false);
    }, [refreshing]);
    const _formatImageString = (item) => {
        const splitItem = item.split('?');
        return `https://img.youtube.com/vi/${splitItem[1].replace('v=', '')}/default.jpg`
    }
    return (
        <Container>
            <Header navigation={navigation} />
            <View style={{ justifyContent: 'center', marginTop: hp('2.5%') }}>
                <Text style={{ justifyContent: 'center', textAlign: 'center', color: '#565656', fontWeight: 'bold', fontSize: wp('6%') }}>Videos</Text>
            </View>
            <Content>
                {
                    loader ? (<Loader />) : (null)
                }

                <View style={{ height: hp('77%') }}>
                    {
                        getVideos.payload === undefined ? (null) : (
                            <FlatList
                                data={getVideos.payload.value}
                                refreshControl={
                                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                                }
                                renderItem={({ item, index }) => {
                                    return (
                                        <Card>
                                            <CardItem cardBody>
                                                <Body>
                                                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigateToWebViewScreen(item)}>
                                                        <View style={{ flex: 1, height: hp('18%') }}>
                                                            <Image style={{ width: wp('30%'), height: hp('18%') }} source={{ uri: _formatImageString(item.url) }} />
                                                        </View>
                                                        <View style={{ width: wp('65%'), justifyContent: 'center' }}>
                                                            <Text numberOfLines={3} style={{
                                                                flexShrink: 1,
                                                                color: '#565656', fontSize: wp('3.4%'), justifyContent: 'center', textAlign: 'center', textAlignVertical: 'center'
                                                            }}>{item.article}</Text>
                                                        </View>
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
                </View>
                {/* {
                    getVideos.payload === undefined ? (null) : (
                        getVideos.payload.value.map((data, index) => {
                            return (
                                <Card>
                                    <CardItem cardBody>
                                        <Body>
                                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigateToWebViewScreen(data)}>
                                                <View style={{ flex: 1, height: hp('18%') }}>
                                                    <WebView source={{ uri: data.url }} />
                                                </View>
                                                <View style={{ width: wp('65%'), justifyContent: 'center' }}>
                                                    <Text numberOfLines={3} style={{
                                                        flexShrink: 1,
                                                        color: '#565656', fontSize: wp('3.4%'), justifyContent: 'center', textAlign: 'center', textAlignVertical: 'center'
                                                    }}>{data.article}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </Body>
                                    </CardItem>
                                </Card>
                            )
                        })
                    )
                } */}

            </Content>
        </Container >
    )
}

export default VideosScreen;

// Later on in your styles..
var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});