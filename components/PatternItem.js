import React from "react"
import { View, Text, Button, StyleSheet, Alert } from "react-native"

import Colors from '../constants/Colors'

const PatternItem = props => {
    return (
        <View style={styles.card}>
            <View style={styles.contentContainer}>
                <Text style={styles.contentText}>{props.content}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    title="ANSWER"
                    onPress={() => (
                        Alert.alert(
                            props.answer,
                            `The answer is ${props.answer}`,
                            [
                                {
                                    text: 'OK'
                                }
                            ]

                        )
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: Colors.darkBlue,
        shadowOpacity: 1,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 10,
        borderRadius: 10,
        backgroundColor: 'white',

        margin: 20,
        padding: 20,

        alignItems: 'center',
    },
    contentContainer: {
        marginVertical: 20, 
    },
    buttonContainer: {
        marginBottom: 10,
        width: '80%'
    },
    contentText: {
        fontSize: 24,
    }
})

export default PatternItem