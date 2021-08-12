import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { NavigationEvents } from 'react-navigation';

const registerScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.text}>
                Kayıt Ol
            </Text>
            <TextInput placeholder="Ad Soyad" style={styles.textInput}  marginTop={15} title="name"/>
            <TextInput placeholder="Email" style={styles.textInput}  marginTop={15} title="email"/>
            <TextInput placeholder="Parola" style={styles.textInput} marginTop={15} title="şifre"/>
            <Button title="Kayıt Ol" onPress={navigation.navigate}/>
        </View>
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
    },
    text: {
        textAlign: 'center',
        fontSize: 50,
        justifyContent: "flex-start",
        margin: 80
    },
    button: {
        
    }
});

export default registerScreen;