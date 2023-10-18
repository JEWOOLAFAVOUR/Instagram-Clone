import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants'

const ReelScreen = () => {
    return (
        <View style={styles.page}>
            <Text>ReelScreen</Text>
        </View>
    )
}

export default ReelScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
})