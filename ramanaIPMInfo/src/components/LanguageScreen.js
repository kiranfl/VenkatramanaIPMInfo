import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect, useSelector, useDispatch } from "react-redux";
import * as actionCreator from "../store/actions/actions";
import I18n from 'react-native-i18n';
import reactotron from 'reactotron-react-native';

function LanguageScreen({ navigation }) {
    const langtype = useSelector(state => state.langType);
    const dispatch = useDispatch();

    const langSelect = async (type) => {
        if (type === 'English') {
            I18n.locale = 'en';
            dispatch(actionCreator.saveLangType({ englishLangSelect: true, spanishLangSelect: false }));
        } else {
            I18n.locale = 'es';
            dispatch(actionCreator.saveLangType({ englishLangSelect: false, spanishLangSelect: true }));
        }
        await AsyncStorage.setItem('languageScreen', 'selected');
        setTimeout(async () => {
            reactotron.log('languageScreen', await AsyncStorage.getItem('languageScreen'))
        }, 500);
    };
    navigateToNextScreen = () => {
        if (langtype.englishLangSelect || langtype.spanishLangSelect) {
            navigation.navigate('Home');
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginLeft: wp('5%'), marginTop: hp('3%') }}>
                <View>
                    <Text style={styles.titleText}>Pick Your</Text>
                </View>
                <View>
                    <Text style={styles.titleLang}>Language</Text>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'flex-end',
                marginTop: hp('5%')
            }}>
                <TouchableOpacity style={langtype.englishLangSelect ? (styles.langTypeSelect) : (styles.langType)} onPress={() => langSelect('English')}>
                    <Text style={langtype.englishLangSelect ? (styles.langTextSelect) : (styles.langText)}>English</Text>
                </TouchableOpacity>
                <TouchableOpacity style={langtype.spanishLangSelect ? (styles.langTypeSelect) : (styles.langType)} onPress={() => langSelect('Spanish')}>
                    <Text style={langtype.spanishLangSelect ? (styles.langTextSelect) : (styles.langText)}>Spanish</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                borderTopColor: 'rgb(211,211,211)',
                borderTopWidth: wp('0.2%'),
                marginTop: hp('45%')
            }}>
                <TouchableOpacity onPress={() => navigateToNextScreen()}>
                    <View style={{ width: wp('20%'), height: hp('30%'), borderWidth: wp('0.5%'), borderColor: 'rgb(211,211,211)' }}>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'Bold', fontSize: hp('3%'), marginTop: hp('2%') }}>Next</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    titleText: {
        fontWeight: 'bold', color: 'rgb(26, 25, 24)', fontSize: hp('5%')
    },
    titleLang: {
        fontWeight: 'bold', color: 'rgb(66, 245, 173)', fontSize: hp('5%')
    },
    langType: {
        width: wp('42%'),
        height: hp('12%'),
        backgroundColor: 'rgb(211,211,211)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    langTypeSelect: {
        width: wp('42%'),
        height: hp('12%'),
        backgroundColor: 'rgb(0, 0, 102)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    langText: {
        justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: hp('2.8%'), color: 'rgb(0, 51, 0)'
    },
    langTextSelect: {
        justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: hp('2.8%'), color: 'rgb(255, 255, 255)'
    }
})
export default LanguageScreen;