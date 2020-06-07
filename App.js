import React from 'react';
import {View, Text} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import productsReducer from './store/reducers/products';
import userReducer from './store/reducers/user';
import ProductNavigator from './navigation/ProductNavigator';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
        <ProductNavigator />
    </Provider>
    
  );
}


