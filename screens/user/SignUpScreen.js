import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Button, View, Text, TextInput, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native';

import LightText from '../../components/LightText';
import ErrorText from '../../components/ErrorText';

import {signUpUser} from '../../store/actions/user';

import Colors from '../../constants/Colors';

const SignUpScreen = props => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');

    const [nameIsValid, setNameIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [ageIsValid, setAgeIsValid] = useState(false);
    const [submitIsClicked, setSubmitClicked] = useState(false);

    const dispatch = useDispatch();

    const signUpHandler = () => {

        setSubmitClicked(true);
       
        name.trim().length !== 0 ? setNameIsValid(true): setNameIsValid(false);
        email.includes('@') ? setEmailIsValid(true) : setEmailIsValid(false);
        password.trim().length > 5 ? setPasswordIsValid(true) : setPasswordIsValid(false);
        age.trim().length > 0 ? setAgeIsValid(true) : setAgeIsValid(false);
        

        if (!nameIsValid || !emailIsValid || !passwordIsValid || !ageIsValid) {
            return;
        }

        const user = {
            loggedIn: true,
            name,
            email,
            password,
            gender,
            age
        }


        dispatch(signUpUser(user));

        resetState();
        
        props.navigation.navigate({routeName: 'Home'})
    }

    const resetState = () => {
        setName('');
        setEmail('');
        setPassword('');
        setGender('');
        setAge('');

        setNameIsValid(false);
        setEmailIsValid(false);
        setPasswordIsValid(false);
        setAgeIsValid(false);
        setSubmitClicked(false);
    }

    const showError = (validInput, message) => {
        if (submitIsClicked && !validInput) {
            return <ErrorText>{message}</ErrorText>
        } else {
            return null;
        }
    }
    return (
        <KeyboardAvoidingView 
            style={styles.screen}
            behavior="padding"
            keyboardVerticalOffset={50}>
                    <View style={styles.formContainer}>

                            <View style={styles.inputControl}>
                                <LightText style={styles.label}>Name</LightText>
                                <TextInput 
                                    style={styles.input}
                                    value={name}
                                    onChangeText={text => setName(text)}
                                    keyboardType='default' 
                                />
                                {showError(nameIsValid, 'Name cannot be empty')}
                            </View>

                            <View style={styles.inputControl}>
                                <LightText style={styles.label}>Email</LightText>
                                <TextInput 
                                    style={styles.input} 
                                    value={email}
                                    onChangeText={text => setEmail(text)}
                                    keyboardType='email-address'
                                />
                                {showError(emailIsValid, 'Invalid email')}
                            </View>

                            <View style={styles.inputControl}>
                                <LightText style={styles.label}>Password</LightText>
                                <TextInput 
                                    style={styles.input} 
                                    value={password}
                                    onChangeText={text => setPassword(text)}   
                                    keyboardType='default'
                                />
                                {showError(passwordIsValid, 'Password should be more than 5 characters')}
                            </View>

                            <View style={styles.inputControl}>
                                <LightText style={styles.label}>Gender</LightText>
                                <TextInput 
                                    style={styles.input} 
                                    value={gender}
                                    onChangeText={text => setGender(text)}
                                    keyboardType='default' 
                                />
                            </View>

                            <View style={styles.inputControl}>
                                <LightText style={styles.label}>Age</LightText>
                                <TextInput 
                                    style={styles.input} 
                                    value={age}
                                    onChangeText={text => setAge(text)}
                                    keyboardType='number-pad' 
                                />
                                {showError(ageIsValid, 'Age cannot be empty')}
                            </View>

                                <Button 
                                    title="Sign Up" 
                                    color={Colors.primaryColor}
                                    onPress={signUpHandler}
                                />
                    </View>

           

        </KeyboardAvoidingView>
            
    )
}

SignUpScreen.navigationOptions = {
    headerTitle: 'Mutual Funds'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    formContainer: {
        width: '80%',
        alignItems: 'center',
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
      }
});

export default SignUpScreen;