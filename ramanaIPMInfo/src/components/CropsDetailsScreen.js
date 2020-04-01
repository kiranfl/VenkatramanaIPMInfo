



import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FarmCrops from './FarmCrops';
import Discover from './Discover';

function CustomDrawerContent(props) {
    return (
        <View style={{ backgroundColor: 'rgb(255,255,255)', flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <DrawerItem
                    label="IPMInfo"
                    style={{ backgroundColor: '#FFC300', fontWeight: 'bold', height: hp('8%') }}
                    labelStyle={{ color: '#fff', fontSize: wp('5%'), marginLeft: wp('20%') }}
                />
                <DrawerItemList {...props}
                    activeBackgroundColor={'rgb(220,220,220)'}
                    activeTintColor={'rgb(105,105,105)'}
                    labelStyle={{ fontSize: wp('4%') }}
                />
            </DrawerContentScrollView>
        </View>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Farm Crops" component={FarmCrops} />
            <Drawer.Screen name="Discover" component={Discover} />
        </Drawer.Navigator>
    );
}

export default function CropsDetailsScreen(props) {
    return (
        <View style={{ flex: 1 }}>
            <MyDrawer />
        </View>

    );
}

