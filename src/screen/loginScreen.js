import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';

const loginScreen = ({navigation}) => {
    
   console.log(navigation)
    return ( 
        <View>
            <Text style={styles.text}>
                Giriş Yap
            </Text>
            <TextInput placeholder="Email" style={styles.textInput}  marginTop={15} title="email"/>
            <TextInput placeholder="Parola" style={styles.textInput} marginTop={15} title="şifre"/>
            {/* <Text>{message}</Text> */}
            <Button style={styles.button} title="Giriş Yap" onPress={navigation.navigate}/>
            <Button style={styles.button} title="Kayıt Ol" onPress={navigation.navigate}/>
        </View>
    ); 
}; 

//const message = "@ ve en az iki nokta içermeli"

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
        width: 2,
        margin: 50,  
    }
});

export default loginScreen;

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