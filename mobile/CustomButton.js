import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ onPress, title }) => (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

export default CustomButton

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        marginTop: 10
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});