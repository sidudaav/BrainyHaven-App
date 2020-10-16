import React from "react"
import {View, Text, StyleSheet} from "react-native"

import HeaderButton from '../components/UI/HeaderButton'

const MediaScreen = () => {
    return (
        <View>
            <Text>Media</Text>
        </View>
    )
}

MediaScreen.navigationOptions = navData => {
    return {
        headerTitle: "Media",
        headerLeft: () => (
            <HeaderButton
                name={Platform.OS === 'android' ? 'md-menu' : 'ios-menu' }
                onPress={() => {navData.navigation.toggleDrawer()}}
            />
        )
    }
}

export default MediaScreen