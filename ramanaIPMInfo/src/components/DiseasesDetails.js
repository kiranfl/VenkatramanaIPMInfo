import React, { Component } from 'react';
import DetailsScreen from './DetailsScreen';
import * as actionCreator from "../store/actions/actions";
import Carousel from 'react-native-snap-carousel';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity, FlatList, RefreshControl, ScrollView } from 'react-native';
import reactotron from 'reactotron-react-native';

class DiseasesDetails extends Component {
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
            this.state.cropsDetails[0] === undefined ? (null) : (<DetailsScreen cropsDetails={this.state.cropsDetails[0]} myNav={this.props.navigation.navigate} />)
        )
    }
}
export default DiseasesDetails;
