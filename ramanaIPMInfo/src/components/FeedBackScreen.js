import React, { useEffect, useState, useCallback } from 'react';
import { TouchableOpacity, ScrollView, StyleSheet, Image, Linking, Alert, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from './utils/Header';
import * as actionCreator from "../store/actions/actions";
import { useSelector, useDispatch, } from "react-redux";
import { Container, Content, Card, CardItem, Body, View, Text, Input, Item, Footer, FooterTab, Button } from 'native-base';
import { exp } from 'react-native-reanimated';
import reactotron from 'reactotron-react-native';

function FeedBackScreen({ navigation }) {
    const [emojisImages, setEmojisImages] = useState([]);
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');
    useEffect(() => {
        images = [
            { id: 1, title: 'Terrible', selected: false, 'displayImage': require('../../assets/images/surprised.png') },
            { id: 2, title: 'Bad', selected: false, 'displayImage': require('../../assets/images/worried.png') },
            { id: 3, title: 'Okay', selected: false, 'displayImage': require('../../assets/images/sad.png') },
            { id: 4, title: 'Good', selected: false, 'displayImage': require('../../assets/images/ambitious.png') },
            { id: 5, title: 'Great', selected: false, 'displayImage': require('../../assets/images/smile.png') },


        ];
        setEmojisImages([...images]);
    }, []);
    const selectImage = (data, index) => {
        const getSelectedImage = [...emojisImages];
        getSelectedImage[index].selected = !emojisImages[index].selected;
        let setSelectImage = '';
        if (getSelectedImage[index].selected) {
            switch (data.title) {
                case 'Good':
                    setSelectImage = require(`../../assets/images/ambitious_big.png`);
                    break;
                case 'Great':
                    setSelectImage = require(`../../assets/images/smile_big.png`);
                    break;
                case 'Okay':
                    setSelectImage = require(`../../assets/images/sad_big.png`);
                    break;
                case 'Terrible':
                    setSelectImage = require(`../../assets/images/surprised_big.png`);
                    break;
                case 'Bad':
                    setSelectImage = require(`../../assets/images/worried_big.png`);
                    break;
            }
            getSelectedImage[index].displayImage = setSelectImage;

        } else {
            switch (data.title) {
                case 'Good':
                    setSelectImage = require(`../../assets/images/ambitious.png`);
                    break;
                case 'Great':
                    setSelectImage = require(`../../assets/images/smile.png`);
                    break;
                case 'Okay':
                    setSelectImage = require(`../../assets/images/sad.png`);
                    break;
                case 'Terrible':
                    setSelectImage = require(`../../assets/images/surprised.png`);
                    break;
                case 'Bad':
                    setSelectImage = require(`../../assets/images/worried.png`);
                    break;
            }
            getSelectedImage[index].displayImage = setSelectImage;
        }
        setEmojisImages([...getSelectedImage]);
    }
    const submitFeedback = () => {
        alert('submit');
    }
    const changeEmail = (data) => {
        setEmail(data);
    }
    const changeComments = (data) => {
        setComments(data);
    }

    return (
        <Container>
            <Header navigation={navigation} />
            <View style={{ justifyContent: 'center', marginTop: hp('2.5%') }}>
                <Text style={{ justifyContent: 'center', textAlign: 'center', color: '#565656', fontWeight: 'bold', fontSize: wp('6%') }}>Give your feedback</Text>
            </View>
            <Content>
                <Item>
                    <Input placeholder="Enter your email" onChangeText={changeEmail} />
                </Item>
                <Item>
                    <Input placeholder="Comments" onChangeText={changeComments} />
                </Item>
                <Item>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: hp('10%'), justifyContent: 'space-between' }}>
                        {
                            emojisImages.map((data, index) => {
                                return (
                                    <View style={{ flexDirection: 'column' }}>
                                        <TouchableOpacity key={index} onPress={() => selectImage(data, index)}>
                                            <Image style={{ width: 50, height: 50 }} source={data.displayImage} />
                                        </TouchableOpacity>
                                        <View style={{ marginTop: hp('2%') }}>
                                            <Text style={{ color: '#000000', opacity: data.selected ? (0.9) : (0.3), fontWeight: 'bold' }}>{data.title}</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </View>
                </Item>
                <Item>
                    <View style={{ flex: 1 }}>
                        <View style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            borderTopColor: 'rgb(211,211,211)',
                            borderTopWidth: wp('0.2%'),
                            marginTop: hp('37%')
                        }}>
                            <TouchableOpacity onPress={() => submitFeedback()}>
                                <View style={{ width: wp('20%'), height: hp('10%'), borderWidth: wp('0.1%'), borderColor: 'rgb(211,211,211)' }}>
                                    <Text style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'Bold', fontSize: hp('3%'), marginTop: hp('2%') }}>Submit</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Item>
            </Content>
        </Container>
    )
}

export default FeedBackScreen;