import React from 'react';
import {TouchableOpacity, View,Text, Image, StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import LightText from '../components/LightText';

const ProductItem = props => {
    const {title, logo, returns, nav, rating, fundSize} = props.product;

    return (
        <TouchableOpacity onPress={props.onViewDetails}>
            <View style={styles.content}>
        
                <View style={styles.header}>
                    <View style={styles.imageContainer}>
                        <Image source={{uri: logo}} style={styles.image}/>
                    </View>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={{fontSize: 20}}>
                        {returns}
                    </Text>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.footer}>
                    <LightText>{'\u20B9'}{nav}</LightText>
                    <LightText>{rating} {'\u2605'}</LightText>
                    <LightText>{fundSize} Cr.</LightText>
                </View>

            </View>

        </TouchableOpacity>
                

    );
        
}

const styles = StyleSheet.create({
    content: {
        width: '100%',
        height: 150,
        backgroundColor: 'white',
        margin: 15,
        borderColor: 'black',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 2,
        borderRadius: 10
    },
    
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 20
    },
    imageContainer: {
        flex: 2,
        height: 44,
        width: 44,
        overflow: 'hidden'
    },
    image : {
       width: '100%',
       height: '100%'
    },
    title: {
        flex: 8,
        marginHorizontal: 10,
        fontSize: 15
    },
    divider: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    }
})

export default ProductItem;