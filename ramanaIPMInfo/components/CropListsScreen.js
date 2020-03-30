import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import I18n from '../i18n/i18n';
import { getCrops } from '../store/actions/actions';
import { connect, useSelector, useDispatch } from "react-redux";


class CropListsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cropsList: []
        }
        this.selectCrop = this.selectCrop.bind(this);
    }
    async componentDidMount() {
        let result = await this.props.dispatch(getCrops());
        this.setState({ cropsList: result.payload });
    }
    selectCrop(index) {
        let getCrops = [...this.state.cropsList];
        getCrops[index].selected = !this.state.cropsList[index].selected;
        this.setState({ cropsList: getCrops });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ marginLeft: wp('5%'), marginTop: hp('3%') }}>
                    <View>
                        <Text style={styles.titleText}>{I18n.t('PICK_CROP_INTEREST')}</Text>
                    </View>
                    <View>
                        <Text style={styles.titleLang}>{I18n.t('CROP')}(s)</Text>
                    </View>
                </View>
                <FlatList
                    data={this.state.cropsList}
                    style={{ marginTop: hp('2.5%') }}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={{
                                justifyContent: 'space-between',
                                marginLeft: wp('3.5%')
                            }} onPress={() => this.selectCrop(index)}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Image
                                        style={{ width: wp('45%'), height: hp('15%') }}
                                        source={{
                                            uri: item.image,
                                        }}
                                    />
                                    <View style={item.selected ? (styles.cropSelectedStyle) : (styles.cropStyle)}>
                                        <Text style={item.selected ? (styles.cropTextSelected) : (styles.cropText)}>{item.name}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item => item.id}
                />
                <View style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    borderTopColor: 'rgb(211,211,211)',
                    borderTopWidth: wp('0.2%'),
                }}>
                    <TouchableOpacity onPress={() => alert('asf')}>
                        <View style={{ width: wp('20%'), height: hp('10%'), borderWidth: wp('0.5%'), borderColor: 'rgb(211,211,211)' }}>
                            <Text style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'Bold', fontSize: hp('3%'), marginTop: hp('2%') }}>Next</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    titleText: {
        fontWeight: 'bold', color: 'rgb(26, 25, 24)', fontSize: hp('5%')
    },
    titleLang: {
        fontWeight: 'bold', color: 'rgb(66, 245, 173)', fontSize: hp('5%')
    },
    cropStyle: {
        width: wp('45%'),
        height: hp('6%'),
        backgroundColor: 'rgb(220,220,220)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cropSelectedStyle: {
        width: wp('45%'),
        height: hp('6%'),
        backgroundColor: 'rgb(0, 0, 102)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cropText: {
        justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: hp('2.8%'), color: 'rgb(0, 51, 0)'
    },
    cropTextSelected: {
        justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: hp('2.8%'), color: 'rgb(255, 255, 255)'
    },
})
export default connect()(CropListsScreen);