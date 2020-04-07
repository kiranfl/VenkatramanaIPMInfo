import React, { useEffect, useState, useCallback, Component } from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity, FlatList, RefreshControl, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as actionCreator from "../store/actions/actions";
import { useSelector, useDispatch, } from "react-redux";
import { SimpleAnimation } from 'react-native-simple-animations';
import reactotron from 'reactotron-react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import HTML from 'react-native-render-html';
import Icon from 'react-native-vector-icons/FontAwesome';


class DetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cropsDetails: {},
            entries: [],
            activeSlide: 0,
        }
        this._renderItem = this._renderItem.bind(this);
        this._renderContent = this._renderContent.bind(this);
        this._closeIcon = this._closeIcon.bind(this);
        this._goToImages = this._goToImages.bind(this);
    }
    componentDidMount() {
        this.setState({ cropsDetails: { ...this.props.cropsDetails } });
        this.setState({ entries: [...this.props.cropsDetails.images] })
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
    _renderContent(item) {
        return (
            <ScrollView>
                <View>
                    <HTML html={item} />
                </View>
            </ScrollView>
        )
    }

    get pagination() {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={entries.length}
                activeDotIndex={activeSlide}
                containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }
    _closeIcon() {
        this.props.myNav('SelectedCropsDetailsScreen');
    }
    _goToImages(item) {
        this.props.myNav('ImagesCarousel', item);
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {
                    this.props.cropsDetails === undefined ? (null) :
                        (
                            <View>
                                <Carousel
                                    data={this.props.cropsDetails.images}
                                    sliderWidth={450}
                                    itemWidth={500}
                                    renderItem={this._renderItem}
                                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                                />

                                <TouchableOpacity onPress={this._closeIcon} style={{ position: 'relative', bottom: hp('21%'), left: wp('90%') }}>
                                    <Icon name="close" size={30} color="#fff" />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ position: 'relative', bottom: hp('7%'), left: wp('85%') }} onPress={() => this._goToImages(this.props.cropsDetails)}>
                                    <Icon name="image" size={30} color="red" />
                                </TouchableOpacity>
                                {this._renderContent(this.props.cropsDetails.content)}
                            </View>


                        )
                }

            </SafeAreaView>
        )
    }
}
export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
});
