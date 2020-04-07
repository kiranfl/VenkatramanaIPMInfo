import React, { Component } from 'react';
import DetailsScreen from './DetailsScreen';
import * as actionCreator from "../store/actions/actions";
import Carousel from 'react-native-snap-carousel';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity, FlatList, RefreshControl, ScrollView } from 'react-native';
import reactotron from 'reactotron-react-native';
import SwipeRender from "react-native-swipe-render";


class DiseasesCropsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cropsDetails: [],
            activeSlide: 0,
        }
    }
    async componentDidMount() {
        await this.setState({ cropsDetails: [...this.props.route.params] });
    }
    render() {
        return (
            this.state.cropsDetails[0] === undefined ? (null) : (
                <SwipeRender
                    // OPTIONAL PROP USAGE.
                    index={0} // default 0
                    loop={false} // default false
                    loadMinimal={true} // default false
                    loadMinimalSize={2}
                    autoplay={false} // default false
                    horizontal={true} // default true
                    enableAndroidViewPager={false} // default ScrollView                
                >
                    {this.state.cropsDetails.map((data, index) => {
                        return (
                            <View style={{ flex: 1, }}>
                                <DetailsScreen cropsDetails={data} myNav={this.props.navigation.navigate} />
                            </View>
                        )
                    })}
                </SwipeRender>
            )
        )
    }
}
export default DiseasesCropsDetails;
