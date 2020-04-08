import React, { useEffect, useState, useCallback } from 'react';
import { Button, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from './utils/Header';
import * as actionCreator from "../store/actions/actions";
import { useSelector, useDispatch, } from "react-redux";
import { Container, Content, Card, CardItem, Body, View, Text } from 'native-base';


function VideosScreen({ navigation }) {
    const cropsVideos = useSelector(state => state.cropsVideos);
    const [getVideos, setVideos] = useState({});
    const dispatch = useDispatch();
    useEffect(async () => {
        let result = await dispatch(actionCreator.getCropsVideosList());
        setVideos(result);
    }, []);
    const navigateToWebViewScreen = (item) => {
        navigation.navigate('WebViewScreen', item);
    }
    return (
        <Container>
            <Header navigation={navigation} />
            <View style={{ justifyContent: 'center', marginTop: hp('2.5%') }}>
                <Text style={{ justifyContent: 'center', textAlign: 'center', color: '#565656', fontWeight: 'bold', fontSize: wp('6%') }}>Videos</Text>
            </View>
            <Content>
                {
                    getVideos.payload === undefined ? (null) : (
                        getVideos.payload.value.map((data, index) => {
                            return (
                                <Card>
                                    <CardItem cardBody>
                                        <Body>
                                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigateToWebViewScreen(data)}>
                                                <View>
                                                    <Image style={{ flex: 1, width: wp('30%'), height: hp('20%') }} source={{ uri: 'https://ipminfo.s3.amazonaws.com/1530790083310.jpg' }} />
                                                </View>
                                                <View style={{ justifyContent: 'center', marginLeft: wp('2%') }}>
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
                }

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