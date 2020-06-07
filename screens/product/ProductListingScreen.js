import React, {useState, useRef} from 'react';
import {FlatList, View, TextInput, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import ProductItem from '../../components/ProductItem';
import LightText from '../../components/LightText';
import DarkText from '../../components/DarkText';

const ProductListingScreen = props => {
    const [searchText, setSearchText] = useState('');

    const user = useSelector(state => state.user);
    const products = useSelector(state => state.products.products.filter(p => p.title.toLowerCase().includes(searchText.toLowerCase())));

    return (
        <View>
            <DarkText style={styles.headingText}>Welcome {user.name}</DarkText>
            <TextInput
                style={styles.textInputStyle}
                onChangeText={text => setSearchText(text)}
                value={searchText}
                underlineColorAndroid="transparent"
                placeholder="Click here to search"
                autoCompleteType="off"
                
            />
            <LightText style={{marginHorizontal: 10}}>Total items: {products.length}</LightText>
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
   
    headingText: {
        margin: 10,
        fontSize: 20,
    },

    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 10,
        borderColor: '#ccc',
        backgroundColor: 'black',
        margin: 10,
        borderRadius: 20,
        color: 'white'
      }
});

export default ProductListingScreen;