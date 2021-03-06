import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { View, TextInput, StyleSheet, KeyboardAvoidingView} from 'react-native';

import LightText from '../../components/LightText';
import ErrorText from '../../components/ErrorText';
import MainButton from '../../components/MainButton';
import GenderTab from '../../components/GenderTab';

import {saveUser} from '../../store/actions/user';

const SignUpScreen = props => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState('');

    const [nameIsValid, setNameIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [ageIsValid, setAgeIsValid] = useState(false);
    const [submitIsClicked, setSubmitClicked] = useState(false);

    const dispatch = useDispatch();

    const onGenderTabSelected = (gender) => {
        setGender(gender);
    }    


    if (nameIsValid && emailIsValid && passwordIsValid  && ageIsValid) {
        const user = {
            loggedIn: true,
            name: name,
            email: email,
            password: password,
            gender: gender,
            age: age
        }
        dispatch(saveUser(user));
        props.navigation.navigate({routeName: 'Home'})
    }

    const signUpHandler = () => {

        setSubmitClicked(true);
   
        name.trim().length !== 0 ? setNameIsValid(true): setNameIsValid(false);
        email.includes('@') ? setEmailIsValid(true) : setEmailIsValid(false);
        password.trim().length > 5 ? setPasswordIsValid(true) : setPasswordIsValid(false);
        age.trim().length > 0 ? setAgeIsValid(true) : setAgeIsValid(false);
    
    };

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
                                    secureTextEntry={true}
                                />
                                {showError(passwordIsValid, 'Password should be more than 5 characters')}
                            </View>

                            <View style={styles.inputControl}>
                                <LightText style={styles.label}>Gender</LightText>
                                <GenderTab onTabSelected={onGenderTabSelected} />
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

                            <MainButton onPress={() => signUpHandler()}>
                                Sign Up
                            </MainButton>   
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
        borderBottomWidth: 1,
        margin: 10
      }
});

export default SignUpScreen;