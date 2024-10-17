import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../theme';

function CustomedButton({ title, isprimar = true, margin = 10, onPress, outline = false, ingroup = false, disabled = false }) {
    let buttonStyle;
    const widthButton = ingroup ? '40%' : 'auto';

    const styles = StyleSheet.create({
        button: {
            borderRadius: 40,
            backgroundColor: colors.Primarybutton,
            alignItems: 'center',
            height: 40,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: margin,
            width: widthButton,
        },
        button2: {
            borderRadius: 40,
            backgroundColor: colors.secondarybutton,
            alignItems: 'center',
            height: 40,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: margin,
            width: widthButton,
        },
        button3: {
            borderRadius: 40,
            backgroundColor: colors.outlineButton,
            alignItems: 'center',
            height: 40,
            width: widthButton,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: margin,
        },
        buttonText: {
            color: "#fff",
        },
        buttonText1: {
            color: colors.secondaryTextButton,
        },
        buttonText2: {
            color: colors.Primarybutton,
        },
    });

    // Determine button style based on props
    if (outline) {
        buttonStyle = [styles.button3, styles.buttonText2];
    } else if (isprimar) {
        buttonStyle = [styles.button, styles.buttonText];
    } else {
        buttonStyle = [styles.button2, styles.buttonText1];
    }

    return (
        <TouchableOpacity style={buttonStyle[0]} onPress={!disabled ? onPress : null} disabled={disabled}>
            <Text style={buttonStyle[1]}>{title}</Text>
        </TouchableOpacity>
    );
}

export default CustomedButton;
