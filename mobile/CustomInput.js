import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const CustomInput = ({ placeholder, value, setValue, type }) => {
    return (
        <TextInput
            keyboardType={type}
            style={styles.input}
            onChangeText={setValue}
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#f0f0f0"
        />
    );
}

CustomInput.defaultProps = {
    type: 'default'
}

const styles = StyleSheet.create({
    input: {
        alignItems: 'center',
        margin: 8,
        padding: 8,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#0dc6f0',
        fontSize: 18,
        color: '#fff',
        backgroundColor: '#0dc6f0'
    },
});

export default CustomInput