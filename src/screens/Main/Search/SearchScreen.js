import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants'

const SearchScreen = () => {
    return (
        <View style={styles.page}>
            <Text>SearchScreen</Text>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
})