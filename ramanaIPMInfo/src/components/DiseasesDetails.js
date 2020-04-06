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


class DiseasesDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cropsDetails: [],
            entries: [],
            activeSlide: 0,
        }
        this._renderItem = this._renderItem.bind(this);
        this._renderContent = this._renderContent.bind(this);
    }
    componentDidMount() {
        const _catposts = this.props.route.params._catposts;
        let getCropsDtls = [];
        _catposts.map(async (data) => {
            let getResult = await actionCreator.getCropsDetails(data._id);
            getCropsDtls.push(getResult);
            await this.setState({ cropsDetails: [...getCropsDtls] });
            await this.setState({ entries: [...this.state.cropsDetails[0].images] })
            reactotron.log('getCropsDtls', this.state.cropsDetails);
        })
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

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {
                    this.state.cropsDetails[0] === undefined ? (null) :
                        (
                            <View>
                                <Carousel
                                    data={this.state.cropsDetails[0].images}
                                    sliderWidth={450}
                                    itemWidth={500}
                                    renderItem={this._renderItem}
                                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                                />
                                {this.pagination}
                                {this._renderContent(this.state.cropsDetails[0].content)}
                            </View>


                        )
                }

            </SafeAreaView>
        )
    }
}
export default DiseasesDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
});
