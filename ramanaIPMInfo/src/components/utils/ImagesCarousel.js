import React, { useEffect, useState, useCallback, Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    RefreshControl,
    ScrollView,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as actionCreator from '../../store/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import { SimpleAnimation } from 'react-native-simple-animations';
import reactotron from 'reactotron-react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import HTML from 'react-native-render-html';
import Icon from 'react-native-vector-icons/FontAwesome';

class ImagesCarusel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesData: [],
        };
        this._closeIcon = this._closeIcon.bind(this);
        this._renderItem = this._renderItem.bind(this);
    }
    async componentDidMount() {
        await this.setState({ imagesData: [...this.props.route.params.images] });
    }
    _closeIcon() {
        this.props.navigation.goBack()
    }
    _renderItem(item) {
        return (
            <View>
                <Image
                    style={{ width: wp('100%'), height: 200 }}
                    source={{
                        uri: item.item,
                    }}
                />
            </View>
        )
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={this._closeIcon} style={{ position: 'relative', left: wp('90%'), top: hp('3%') }}>
                    <Icon name="close" size={30} color="#565656" />
                </TouchableOpacity>

                <View style={{ justifyContent: 'center', position: 'relative', top: hp('25%') }}>
                    <Carousel
                        data={this.state.imagesData}
                        sliderWidth={450}
                        itemWidth={500}
                        renderItem={this._renderItem}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
export default ImagesCarusel;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
});