import React, { useState, useEffect} from "react"
import { View, StyleSheet, FlatList } from "react-native"

import axios from "axios"

import PatternItem from '../../components/PatternItem'
import HeaderButton from '../../components/UI/HeaderButton'

import Colors from "../../constants/Colors"

const AnalogiesOverviewScreen = () => {
    const [analogies, setAnalogies] = useState([])

    useEffect(() => {
        const getAnalogies = async () => {
            const res = await axios.get('http://www.brainyhaven.org/api/analogies/?format=json')
            setAnalogies(res.data)
        }
        getAnalogies()
    }, [])

    return (
        <View style={styles.screen}>
            <FlatList
                data={analogies}
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

AnalogiesOverviewScreen.navigationOptions = navData => {
    return {
        headerTitle: "Analogies",
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

export default AnalogiesOverviewScreen