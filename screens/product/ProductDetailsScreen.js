import React from 'react';
import {
    View, 
    Text, 
    StyleSheet
} from 'react-native';

import {useSelector} from 'react-redux';

import Chart from '../../components/Chart';
import DarkText from '../../components/DarkText';

const ProductDetailScreen = props => {
    const productId = props.navigation.getParam('productId');

    console.log(productId);

    const selectedProduct = useSelector(state => 
        state.products.products.find(prod => prod.id === productId));

    return <View style={styles.screen}>
        <Chart data={selectedProduct.growth}/>
        <View style={styles.analyticsContianer}>
            <DarkText>Min.  {Math.min.apply(Math, selectedProduct.growth)}%</DarkText>
            <DarkText>Max.  {Math.max.apply(Math, selectedProduct.growth)}%</DarkText>
        </View>
        <View style={styles.divider}></View>

    </View>
}

ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    }
}

const styles = StyleSheet.create({

    screen: {
        flex: 1
    },

    analyticsContianer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    divider: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },

});

export default ProductDetailScreen;