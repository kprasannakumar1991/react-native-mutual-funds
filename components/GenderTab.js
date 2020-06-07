import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import DarkText from './DarkText';
import LightText from './LightText';
import Colors from '../constants/Colors';

const GenderTab = props => {
    const [activeIndex, setActiveIndex] = useState(0)

    const tabSelected = index => {
        setActiveIndex(index);
        let gender;
        if (index === 0) {
            gender = 'Male';
        } else if (index === 1) {
            gender = 'Female';
        } else {
            gender = 'Others';
        }

        props.onTabSelected(gender);
    }

    const displayText = (text, index) => {
        if (index === activeIndex) {
            return <DarkText>{text}</DarkText>
        } else {
            return <LightText>{text}</LightText>
        }

    }
    const dividerStyle = (index) => {
        if (index === activeIndex) {
            return styles.dividerActive;
        } else {
            return styles.dividerInActive;
        }
    }

    return (
        <View style={styles.content}>

            <TouchableOpacity style={styles.textContainer} onPress={() => tabSelected(0)}>
                {displayText('Male', 0)}
                <View style={dividerStyle(0)}></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textContainer} onPress={() => tabSelected(1)}>
                {displayText('Female', 1)}
                <View style={dividerStyle(1)}></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textContainer} onPress={() => tabSelected(2)}>
                {displayText('Others', 2)}
                <View style={dividerStyle(2)}></View>
            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    content:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20
    },
    textContainer: {
        flexDirection: 'column'
    },
    dividerActive: {
        borderBottomColor: Colors.primaryColor,
        borderBottomWidth: 5,
        borderRadius: 10
    },
    dividerInActive: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 5
    },
});

export default GenderTab;