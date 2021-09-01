import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const profileScreen = ({}) => {


    return(
        <View>
            <Text style={styles.text}>
                Profil Ekranı
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 50,
        justifyContent: "flex-start",
        margin: 30
    }
});

export default profileScreen;