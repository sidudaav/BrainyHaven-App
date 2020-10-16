import React, { useState, useEffect} from "react"
import { View, StyleSheet, FlatList } from "react-native"

import axios from "axios"

import PatternItem from '../../components/PatternItem'
import HeaderButton from '../../components/UI/HeaderButton'

import Colors from "../../constants/Colors"

const RiddlesOverviewScreen = () => {
    const [riddles, setRiddles] = useState([])

    useEffect(() => {
        const getRiddles = async () => {
            const res = await axios.get('http://www.brainyhaven.org/api/riddles/?format=json')
            setRiddles(res.data)
        }
        getRiddles()
    }, [])

    return (
        <View style={styles.screen}>
            <FlatList
                data={riddles}
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

RiddlesOverviewScreen.navigationOptions = navData => {
    return {
        headerTitle: "Riddles",
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

export default RiddlesOverviewScreen