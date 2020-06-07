import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, View, Text, TextInput, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native';

import LightText from '../../components/LightText';
import ErrorText from '../../components/ErrorText';
import MainButtom from '../../components/MainButton';
import TransparentButton from '../../components/TransparentButton';

import {saveUser} from '../../store/actions/user';

import Colors from '../../constants/Colors';
import DarkText from '../../components/DarkText';
import MainButton from '../../components/MainButton';

const ProfileScreen = props => {
    const user = useSelector(state => state.user);

    const [name, setName] = useState(user.name);

    const dispatch = useDispatch();

    const logoutHandler = () => {
        const updatedUser = {
            loggedIn: false,
        }

        dispatch(saveUser(updatedUser));
        props.navigation.navigate({routeName: 'SignUp'})
    }

    const saveHandler = () => {

        const updatedUser = {
            name: name,
        }

        dispatch(saveUser(updatedUser));

        props.navigation.navigate({routeName: 'Home'})
    }

    return (
        
            <View style={styles.screen}>

                    <View style={styles.labelContainer}>
                        <LightText>Email: </LightText>
                        <DarkText>{user.email}</DarkText>
                    </View>
                    <View style={styles.labelContainer}>
                        <LightText>Gender: </LightText>
                        <DarkText>{user.gender}</DarkText>
                    </View>
                    <View style={styles.labelContainer}>
                        <LightText>Age: </LightText>
                        <DarkText>{user.age}</DarkText>
                    </View>

                    <View style={styles.inputControl}>
                        <LightText style={styles.label}>Edit username</LightText>
                        <TextInput 
                            style={styles.input}
                            value={name}
                            onChangeText={text => setName(text)}
                            keyboardType='default' 
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <MainButton onPress={saveHandler}>
                            Save
                        </MainButton>
                        <TransparentButton onPress={logoutHandler}>
                            Logout
                        </TransparentButton>
                    </View>

                    
            </View>            
    )
}

ProfileScreen.navigationOptions = {
    headerTitle: 'Profile'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50
    },
    labelContainer: {
        width: '100%',
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputControl: {
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginVertical: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 10,
        margin: 10,
        borderRadius: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 20,
        justifyContent: 'space-around'
    }
});

export default ProfileScreen;