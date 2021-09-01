import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

const registerScreen = ({navigation}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if(name.length < 5 || name.includes(" ") || password.length < 6 || !email.includes("."||"@")) {
            setErrorMessage( "1-)İsim boşluk içermemeli en az 5 hane olmalı \n 2-) Parola en az 6 hane olmalı \n 3-)Email formatlı olmalı ")
        } else {
            setErrorMessage(null)
        }
    }, [name, password, email])

    return (
        <SafeAreaView> 
            <Text style={styles.text}>
                Kayıt Ol
            </Text>
            <TextInput 
                placeholder="Ad Soyad" 
                style={styles.textInput} 
                value={name} 
                onChangeText={text => setName(text)}
            />
            <TextInput 
                placeholder="Email" 
                style={styles.textInput} 
                value={email} 
                onChangeText={text => setEmail(text)}
            />
            <TextInput 
                placeholder="Parola" 
                style={styles.textInput} 
                value={password}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
            />
            {
                errorMessage
                 ? (<Text style={styles.errorMessage}>{errorMessage}</Text>)
                 : ( <TouchableOpacity onPress={() => navigation.navigate} >
                        <View style={styles.button} >
                            <Text style={styles.buttonText} >KAYDOL</Text>
                        </View>
                     </TouchableOpacity>
                    )
            }
            <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                <View style={styles.button} >
                    <Text style={styles.buttonText} >Giriş Yap</Text>
                </View>
            </TouchableOpacity>

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
        display: 'flex',
        height: 40,
        width: 250,
        marginHorizontal: 85,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,

        backgroundColor: 'turquoise',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },
    buttonText: {
        color: '#ffffff',
        textTransform: 'uppercase',
        textAlign: 'center',
    }
});

export default registerScreen;

// <TouchableOpacity style={styles.button} title="KAYDOL" onPress={navigation.navigate}/>