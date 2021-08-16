import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const loginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [disabled, setDisabled] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        if(password.length < 6) {
            setErrorMessage("Parola en az 6 hane olmalı !!!")
        } else {
            setErrorMessage(null)
        }
    }, [errorMessage, password]) 

    // const formValidation = () => {
    //     if (password === "") {
    //       setNameError('Name cant be blank!')
    //       return true
    //     } else {
    //       setNameError(null)
    //       return false
    //     }
    //   }
    return (
        <View>
            <Text style={styles.text}>
                Giriş Yap
            </Text>
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                style={styles.textInput}
                value={email}
                onChangeText={(text) => { setEmail({ email: text }) }}
            />
            <TextInput
                placeholder="Parola"
                style={styles.textInput}
                value={password}
                onChangeText={setPassword}
            />
            {
                errorMessage 
                    ? (<Text style={styles.errorMessage}>{errorMessage}</Text>)
                    : (<Button style={styles.button} title="GİR" onPress={() => navigation.navigate('Profile')} />)
            }
            <Button style={styles.button} title="Kayıt Ol" onPress={() => navigation.navigate('Register')} />
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
        marginTop: 15
    },
    text: {
        textAlign: 'center',
        fontSize: 50,
        justifyContent: "flex-start",
        margin: 30
    },
    button: {
        width: 200,
        margin: 50,
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15,
        textAlign: 'center'
    }
});

export default loginScreen;


//console.log(navigation)

// "alignContent",
// "alignItems",
// "alignSelf",
// "aspectRatio",
// "backfaceVisibility",
// "backgroundColor",
// "borderBottomColor",
// "borderBottomEndRadius",
// "borderBottomLeftRadius",
// "borderBottomRightRadius",
// "borderBottomStartRadius",
// "borderBottomWidth",
// "borderColor",
// "borderEndColor",
// "borderEndWidth",
// "borderLeftColor",
// "borderLeftWidth",
// "borderRadius",
// "borderRightColor",
// "borderRightWidth",
// "borderStartColor",
// "borderStartWidth",
// "borderStyle",
// "borderTopColor",
// "borderTopEndRadius",
// "borderTopLeftRadius",
// "borderTopRightRadius",
// "borderTopStartRadius",
// "borderTopWidth",
// "borderWidth",
// "bottom",
// "color",
// "decomposedMatrix",
// "direction",
// "display",
// "elevation",
// "end",
// "flex",
// "flexBasis",
// "flexDirection",
// "flexGrow",
// "flexShrink",
// "flexWrap",
// "fontFamily",
// "fontSize",
// "fontStyle",
// "fontVariant",
// "fontWeight",
// "height",
// "includeFontPadding",
// "justifyContent",
// "left",
// "letterSpacing",
// "lineHeight",
// "margin",
// "marginBottom",
// "marginEnd",
// "marginHorizontal",
// "marginLeft",
// "marginRight",
// "marginStart",
// "marginTop",
// "marginVertical",
// "maxHeight",
// "maxWidth",
// "minHeight",
// "minWidth",
// "opacity",
// "overflow",
// "overlayColor",
// "padding",
// "paddingBottom",
// "paddingEnd",
// "paddingHorizontal",
// "paddingLeft",
// "paddingRight",
// "paddingStart",
// "paddingTop",
// "paddingVertical",
// "position",
// "resizeMode",
// "right",
// "rotation",
// "scaleX",
// "scaleY",
// "shadowColor",
// "shadowOffset",
// "shadowOpacity",
// "shadowRadius",
// "start",
// "textAlign",
// "textAlignVertical",
// "textDecorationColor",
// "textDecorationLine",
// "textDecorationStyle",
// "textShadowColor",
// "textShadowOffset",
// "textShadowRadius",
// "textTransform",
// "tintColor",
// "top",
// "transform",
// "transformMatrix",
// "translateX",
// "translateY",
// "width",
// "writingDirection",
// "zIndex"