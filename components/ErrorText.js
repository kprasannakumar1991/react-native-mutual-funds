import React from 'react';
import {Text, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';

const ErrorText = props => {
    return <Text style={{...styles.content, ...props.style}}>{props.children}</Text>
}

const styles = StyleSheet.create({
    content: {
        color: 'red',
        fontSize: 10
    }
});

export default ErrorText;