import React, { useState, useEffect} from "react"
import { View, StyleSheet, FlatList } from "react-native"

import axios from "axios"

import PatternItem from '../../components/PatternItem'
import HeaderButton from '../../components/UI/HeaderButton'

import Colors from "../../constants/Colors"

const PatternsOverviewScreen = () => {
    const [patterns, setPatterns] = useState([])

    useEffect(() => {
        const getPatterns = async () => {
            const res = await axios.get('http://www.brainyhaven.org/api/patterns/?format=json')
            setPatterns(res.data)
        }
        getPatterns()
    }, [])

    return (
        <View style={styles.screen}>
            <FlatList
                data={patterns}
                keyExtractor = {(item, index) => item.id.toString()} 
                showsVerticalScrollIndicator={false}
                renderItem={itemData => (
                    <PatternItem
                        content={itemData.item.content}
                        answer={itemData.item.answer}
                    />
                )}
            />
        </View>
    )
}

PatternsOverviewScreen.navigationOptions = navData => {
    return {
        headerTitle: "Patterns",
        headerLeft: () => (
            <HeaderButton
                name={Platform.OS === 'android' ? 'md-menu' : 'ios-menu' }
                onPress={() => {navData.navigation.toggleDrawer()}}
            />
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        backgroundColor: Colors.bgBlue,
    },
})

export default PatternsOverviewScreen