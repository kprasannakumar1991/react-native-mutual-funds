import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const ProfileScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>ProfileScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default ProfileScreen;