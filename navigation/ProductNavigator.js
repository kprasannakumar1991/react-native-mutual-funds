import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Platform} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

import ProductListingScreen from '../screens/product/ProductListingScreen';
import ProductDetailsScreen from '../screens/product/ProductDetailsScreen';
import ProfileScreen from '../screens/user/ProfileScreen';
import SignUpScreen from '../screens/user/SignUpScreen';

import Colors from '../constants/Colors';

const defaultOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor: 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const ProductsStackNavigator = createStackNavigator({
    ProductsListing: ProductListingScreen,
    ProductDetail: ProductDetailsScreen
}, {
    defaultNavigationOptions: defaultOptions
});


const HomeTabNavigator = createBottomTabNavigator({
    Home:{
        screen: ProductsStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: (tabInfo) => (
                <FontAwesome name="home" size={25} color={tabInfo.tintColor} />
            )
        }
    },
    Profile:{
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: (tabInfo) => (
                <FontAwesome name="user" size={25} color={tabInfo.tintColor} />
            )
        },
    }
}, {
    tabBarOptions: {
        activeTintColor: Colors.primaryColor
    }
});


const SignUpNavigator = createStackNavigator({
    SignUp: SignUpScreen
}, {
    defaultNavigationOptions: defaultOptions
});

const MainNavigator = createSwitchNavigator({
    SignUp: SignUpNavigator,
    Home: HomeTabNavigator
})

export default createAppContainer(MainNavigator);
