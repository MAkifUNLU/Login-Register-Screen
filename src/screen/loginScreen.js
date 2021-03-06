import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const loginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        if (password.length < 6 || !email.includes("." || "@")) {
            setErrorMessage("1-)Email formatlı olmalı \n 2-) Parola en az 6 hane olmalı !!!")
        } else {
            setErrorMessage(null)
        }
    }, [password, email])

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
                    : ( <TouchableOpacity onPress={() => navigation.navigate('Profile')} >
                            <View style={styles.button} >
                                <Text style={styles.buttonText} >GİR</Text>
                            </View>
                        </TouchableOpacity>
                      )
            }
            <TouchableOpacity onPress={() => navigation.navigate('Register')} >
                <View style={styles.button} >
                    <Text style={styles.buttonText} >Kayıt Ol</Text>
                </View>
            </TouchableOpacity>

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