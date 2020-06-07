import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Platform} from 'react-native';

import ProductListingScreen from '../screens/product/ProductListingScreen';
import ProductDetailsScreen from '../screens/product/ProductDetailsScreen';
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

const SignUpNavigator = createStackNavigator({
    SignUp: SignUpScreen
}, {
    defaultNavigationOptions: defaultOptions
});

const MainNavigator = createSwitchNavigator({
    SignUp: SignUpNavigator,
    Home: ProductsStackNavigator
})

export default createAppContainer(MainNavigator);