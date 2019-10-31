import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Loader = () => <Text style={styles.text}>Loading...</Text>

const styles = StyleSheet.create({
    text: {
        alignSelf:"center",
        fontWeight:"700",
        fontSize: 42
    },
});

export default Loader
