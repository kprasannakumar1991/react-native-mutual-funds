import React, {useState} from 'react';
import {
    View, 
    StyleSheet,
} from 'react-native';

import {useSelector} from 'react-redux';

import Chart from '../../components/Chart';
import LightText from '../../components/LightText';
import DarkText from '../../components/DarkText';
import ChartTab from '../../components/ChartTab';

const ProductDetailScreen = props => {
    const [chartIndex, setChartIndex] = useState(0);

    const productId = props.navigation.getParam('productId');

    const selectedProduct = useSelector(state => 
        state.products.products.find(prod => prod.id === productId));

    const onChartTabSelected = (index) => {
        setChartIndex(index);
    }    

    let chartData;
    if (chartIndex === 0) {
        chartData = selectedProduct.growth1;
    } else if (chartIndex === 1) {
        chartData = selectedProduct.growth2;
    } else if (chartIndex === 2) {
        chartData = selectedProduct.growth3;
    } else {
        chartData = selectedProduct.growth4;
    }
   
    return <View style={styles.screen}>
        <View style={styles.headingContainer}>
            <DarkText>{selectedProduct.risk}</DarkText>
            <DarkText>{selectedProduct.cap}</DarkText>
        </View>

        <Chart data={chartData}/>
        <View style={styles.analyticsContianer}>
            <DarkText style={{fontSize: 10}}>Min.  {Math.min.apply(Math, chartData)}%</DarkText>
            <DarkText style={{fontSize: 10}}>Max.  {Math.max.apply(Math, chartData)}%</DarkText>
        </View>

        <ChartTab onChartTabSelected={onChartTabSelected}/>
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

    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
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