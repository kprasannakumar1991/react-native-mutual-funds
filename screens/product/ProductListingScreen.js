import React, {useState, useRef} from 'react';
import {FlatList, View, TextInput, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import ProductItem from '../../components/ProductItem';
import LightText from '../../components/LightText';
import DarkText from '../../components/DarkText';

import Colors from '../../constants/Colors';

const ProductListingScreen = props => {
    const [searchText, setSearchText] = useState('');

    const user = useSelector(state => state.user);
    const products = useSelector(state => state.products.products.filter(p => p.title.toLowerCase().includes(searchText.toLowerCase())));

    const headerView = () => {
        return (
            <View>
                <DarkText style={styles.headingText}>Welcome, {user.name}</DarkText>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={text => setSearchText(text)}
                    value={searchText}
                    placeholder="Click here to search"
                    autoCompleteType="off"
                    
                />
                <LightText style={{marginHorizontal: 10}}>Total items: {products.length}</LightText>
                <View style={styles.divider}></View>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            {headerView()}
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={itemData => <ProductItem product={itemData.item} onViewDetails={() => {
                    props.navigation.navigate({
                        routeName: 'ProductDetail',
                        params: {
                            productId: itemData.item.id,
                            productTitle: itemData.item.title
                    }
                });
            }}/>}

            />
    </View>
    )
}

ProductListingScreen.navigationOptions = {
    headerTitle: "Home"
}

const styles = StyleSheet.create({

    screen: {
        flex: 1
    },
   
    headingText: {
        margin: 10,
        fontSize: 20,
    },

    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 10,
        borderColor: Colors.primaryColor,
        margin: 10,
        borderRadius: 20
    },
    divider: {
        borderBottomColor: Colors.primaryColor,
        borderBottomWidth: 2
    },
});

export default ProductListingScreen;