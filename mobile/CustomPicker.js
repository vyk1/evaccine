import React from 'react';
import { Picker, StyleSheet } from 'react-native';

const CustomPicker = ({ label, selectedValue, setValue, array }) => (

    <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(v, i) => setValue(i)}    >
        <Picker.Item label={label} value={null} key={null} />
        {
            array.map(g => (
                <Picker.Item label={g.nome + ' (' + g.descricao + ')'} value={g.codigo} key={g.codigo} />
            ))
        }
    </Picker>
)
export default CustomPicker

const styles = StyleSheet.create({
    picker: {
        color: "#009688",
        marginVertical: 0
    },
});