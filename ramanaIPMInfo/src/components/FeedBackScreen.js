import React, { useEffect, useState, useCallback } from 'react';
import { TouchableOpacity, ScrollView, StyleSheet, Image, Linking, Alert, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from './utils/Header';
import * as actionCreator from '../store/actions/actions';
import { useSelector, useDispatch, } from 'react-redux';
import { Container, Content, Card, CardItem, Body, View, Text, Input, Item, Footer, FooterTab, Button } from 'native-base';
import { exp } from 'react-native-reanimated';
import reactotron from 'reactotron-react-native';
import { SimpleAnimation } from 'react-native-simple-animations';

function FeedBackScreen({ navigation }) {
    const [emojisImages, setEmojisImages] = useState([]);
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');
    const images = [
        { id: 1, title: 'Terrible', selected: false, 'displayImage': require('../../assets/images/surprised.png') },
        { id: 2, title: 'Bad', selected: false, 'displayImage': require('../../assets/images/worried.png') },
        { id: 3, title: 'Okay', selected: false, 'displayImage': require('../../assets/images/sad.png') },
        { id: 4, title: 'Good', selected: false, 'displayImage': require('../../assets/images/ambitious.png') },
        { id: 5, title: 'Great', selected: false, 'displayImage': require('../../assets/images/smile.png') },
    ];
    useEffect(() => {
        setEmojisImages([...images]);
    }, []);
    const selectImage = (data, index) => {
        const getSelectedImage = [...emojisImages];
        for (let i = 0; i < getSelectedImage.length; i++) {
            let setSelectImage = '';
            if (i === index) {
                getSelectedImage[i].selected = true;
                switch (getSelectedImage[i].title) {
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
                getSelectedImage[i].displayImage = setSelectImage;
            } else {
                getSelectedImage[i].selected = false;
                switch (getSelectedImage[i].title) {
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
                getSelectedImage[i].displayImage = setSelectImage;
            }
        }
        setEmojisImages([...getSelectedImage]);
    }
    const submitFeedback = async () => {
        let isValid = true;
        const emojiSelection = emojisImages.filter((data) => {
            return data.selected === true;
        });
        if (email === '' || email === null) {
            isValid = false;
            Alert.alert('Please Enter email');
        }
        if (email) {
            if (!emailIsValid(email)) {
                isValid = false;
                Alert.alert('Please Enter Valid Email');
            }
        }
        if (comments === '' || comments === null) {
            isValid = false;
            Alert.alert('Please Enter comment');
        }
        if (emojiSelection.length === 0) {
            isValid = false;
            Alert.alert('Please Select Emotions');
        }
        if (isValid) {
            const feedbackObj = {
                'rating': emojiSelection[0].id.toString(),
                'comments': comments,
                'email': email
            }
            await actionCreator.postFeedbacks(feedbackObj);
            setEmojisImages([...images]);
            setEmail('');
            setComments('');
            Alert.alert('Thank you for your feedback');
        }
    }
    const changeEmail = (data) => {
        setEmail(data);
    }
    const changeComments = (data) => {
        setComments(data);
    }
    const emailIsValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    return (
        <Container>
            <Header navigation={navigation} />
            <View style={{ justifyContent: 'center', marginTop: hp('2.5%') }}>
                <Text style={{ justifyContent: 'center', textAlign: 'center', color: '#565656', fontWeight: 'bold', fontSize: wp('6%') }}>Give your feedback</Text>
            </View>
            <Content>
                <View style={{ marginTop: hp('8%') }}>
                    <Item>
                        <Input placeholder='Enter your email' value={email} onChangeText={changeEmail} />
                    </Item>
                    <Item>
                        <Input placeholder='Comments' value={comments} onChangeText={changeComments} />
                    </Item>
                </View>
                <Item>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: hp('10%'), justifyContent: 'space-between' }}>
                        {
                            emojisImages.map((data, index) => {
                                return (

                                    <View style={{ flexDirection: 'column' }}>
                                        <SimpleAnimation movementType='spring' animateOnUpdate={true} duration={5000} fade staticType='bounce' direction='down'>
                                            <TouchableOpacity key={index} onPress={() => selectImage(data, index)}>
                                                <Image style={{ width: 50, height: 50 }} source={data.displayImage} />
                                            </TouchableOpacity>
                                        </SimpleAnimation>
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
                            marginTop: hp('29%')
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