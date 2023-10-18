import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants'

const NotificationScreen = () => {
    return (
        <View style={styles.page}>
            <Text>NotificationScreen</Text>
        </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
})