import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, SafeAreaView } from 'react-native';
import { NavigationEvents } from 'react-navigation';

const registerScreen = ({navigation}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        //console.warn("Çalıştı")
        if(name.length < 5 ) {
            setErrorMessage("İsim en az 5 hane olmalı !!!")
        } else {
            setErrorMessage(null)
        }
    }, [name,errorMessage])

    return (
        <SafeAreaView> 
            <Text style={styles.text}>
                Kayıt Ol
            </Text>
            <TextInput placeholder="Ad Soyad" style={styles.textInput} value={name} onChangeText={setName}/>
            <TextInput placeholder="Email" style={styles.textInput} value={email} onChangeText={setEmail}/>
            <TextInput placeholder="Parola" style={styles.textInput} value={password} onChangeText={setPassword}/>
            {
                errorMessage
                 ? (<Text style={styles.errorMessage}>{errorMessage}</Text>)
                 : (<Button style={styles.button} title="KAYDOL" onPress={navigation.navigate}/>)
            }
            <Button title="Giriş Yap" onPress={() => navigation.navigate('Login')} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textInput: {
        paddingVertical: 5,
        backgroundColor: "orange",
        width: 250,
        marginHorizontal: 85,
        borderRadius: 25,
        textAlign: 'center',
        marginTop: 15
    },
    text: {
        textAlign: 'center',
        fontSize: 50,
        justifyContent: "flex-start",
        margin: 30
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15,
        textAlign: 'center'
    },
    button: {
     color: 'orange'   
    }
});

export default registerScreen;

  // useEffect(() => {
    //     console.warn("Çalıştı")
    //     if(chackName) {
    //         errorMessage;
    //     }
    // }, [name,errorMessage])

    // const chackName = () => {
    //     if(name === null || name.length < 5) {
    //         setErrorMessage('en az 5 hane olmalı')
    //         return true;
    //     } else {
    //         setErrorMessage(null)
    //         return false;
    //     }
    // }