import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import DarkText from './DarkText';
import LightText from './LightText';
import Colors from '../constants/Colors';

const ChartTab = props => {
    const [activeIndex, setActiveIndex] = useState(0)

    const tabSelected = index => {
        setActiveIndex(index);
        props.onChartTabSelected(index);
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
                {displayText('1 Year', 0)}
                <View style={dividerStyle(0)}></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textContainer} onPress={() => tabSelected(1)}>
                {displayText('3 Years', 1)}
                <View style={dividerStyle(1)}></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textContainer} onPress={() => tabSelected(2)}>
                {displayText('5 Years', 2)}
                <View style={dividerStyle(2)}></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textContainer} onPress={() => tabSelected(3)}>
                {displayText('All', 3)}
                <View style={dividerStyle(3)}></View>
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

export default ChartTab;