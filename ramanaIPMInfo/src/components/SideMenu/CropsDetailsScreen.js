



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
import FarmCrops from './FarmCrops/FarmCrops';
import VideosScreen from '../SideMenu/Videos/VideosScreen';
import FeedBackScreen from '../SideMenu/Feedback/FeedBackScreen';
import StrawberryAndVegetables from '../SideMenu/StrawberryAndVegetables/StrawberryAndVegetables';
import PestNews from '../SideMenu/PestNews/PestNews';
import I18n from '../../i18n/i18n';
import Icon from 'react-native-vector-icons/FontAwesome';

function CustomDrawerContent(props) {
    return (
        <View style={{ backgroundColor: 'rgb(255,255,255)', flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <DrawerItem
                    label={I18n.t('IPMINFO')}
                    style={{ backgroundColor: '#FFC300', fontWeight: 'bold', height: hp('8%'), width: wp('83%'), position: 'relative', bottom: hp('1.4%'), right: wp('3%') }}
                    labelStyle={{ color: '#fff', fontSize: wp('5%'), marginLeft: wp('30%'), marginTop: hp('0.5%') }}
                />
                <DrawerItem
                    label={'-'}
                    style={{ backgroundColor: 'rgb(220,220,220)', height: hp('0.3%'), position: 'relative', top: hp('23%') }}
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

function FARMCROPSLABEL() {
    return I18n.t('FARMCROPS');
}

function MyDrawer() {
    return (
        <Drawer.Navigator drawerStyle={{
            width: wp('80%'),
        }} drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name={FARMCROPSLABEL()} component={FarmCrops}
                options={{
                    drawerIcon: config => <Icon
                        size={23}
                        name={'tree'}></Icon>
                }}
            />
            <Drawer.Screen name={I18n.t('VIDEOS')} component={VideosScreen}
                options={{
                    drawerIcon: config => <Icon
                        size={23}
                        name={'video-camera'}></Icon>
                }}
            />
            <Drawer.Screen name={I18n.t('FEEDBACK')} component={FeedBackScreen}
                options={{
                    drawerIcon: config => <Icon
                        size={23}
                        name={'comment'}></Icon>
                }}
            />
            <Drawer.Screen name={I18n.t('STRAWBERRIES_AND_VEGETABLES')} component={StrawberryAndVegetables}
                options={{
                    drawerIcon: config => <Icon
                        size={23}
                        name={'windows'}></Icon>
                }}
            />
            <Drawer.Screen name={I18n.t('PESTNEWS')} component={PestNews}
                options={{
                    drawerIcon: config => <Icon
                        size={23}
                        name={'windows'}></Icon>
                }}
            />
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

