import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import{ useNavigation } from '@react-navigation/native'


export default function Home(){
    const navigation = useNavigation();
    return(
        <View>
            <Text>tela inicial</Text>
        </View>
    )
}