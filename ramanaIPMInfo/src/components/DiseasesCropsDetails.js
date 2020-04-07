import React, { Component, useEffect, useState } from 'react';
import DetailsScreen from './DetailsScreen';
import * as actionCreator from "../store/actions/actions";
import Carousel from 'react-native-snap-carousel';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity, FlatList, RefreshControl, ScrollView } from 'react-native';
import reactotron from 'reactotron-react-native';
import SwipeRender from "react-native-swipe-render";


function DiseasesCropsDetails(props) {
    const [cropsDetails, setCropsDetails] = useState([]);
    useEffect(() => {
        setCropsDetails([...props.route.params]);
    }, []);
    return (
        cropsDetails[0] === undefined ? (null) : (
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
                {cropsDetails.map((data, index) => {
                    return (
                        <View style={{ flex: 1, }}>
                            <DetailsScreen cropsDetails={data} myNav={props.navigation.navigate} />
                        </View>
                    )
                })}
            </SwipeRender>
        ))
}
export default DiseasesCropsDetails;


