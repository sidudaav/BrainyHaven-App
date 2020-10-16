import React, { useState, useRef } from "react"
import {View, Text, StyleSheet, Button} from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

import Carousel from 'react-native-snap-carousel';

import HeaderButton from '../components/UI/HeaderButton'

import Colors from '../constants/Colors'
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = props => {
    const [activeIndex, setActiveIndex] = useState(0)

    const ref = useRef(null);

    const carouselData = [
        {
            title: 'Technology',
            text: `Lowering barriers of access through technology is our priority. Our online environment grants anyone with internet connection access to our programs and resources.`
        },
        {
            title: 'Science',
            text: `Our methods have been studied extensively by researchers from credible research institutions around the world. No pseudoscience. No nonsense.`
        },
        {
            title: 'Puzzles',
            text: `One way to reduce risk of dementia is to keep the mind active. The puzzles in our collection have been shown to help slow memory-loss and other cognitive issues.`
        },
    ]

    const renderItem = ({item, index}) => {
        return (
            <LinearGradient style={styles.carouselItem} colors={['rgba(79, 195, 247, 0.8)', 'rgba(2, 119, 189, 0.8)']}>
                <View style={styles.carouselTitleContainer}>
                    <Text style={styles.carouselTitle}>{item.title}</Text>
                </View>
                <View style={styles.carouselTextContainer}>
                    <Text style={styles.carouselText}>{item.text}</Text>
                </View>
            </LinearGradient>
        )
    }

    return (
    <View style={styles.screen}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Welcome to Brainy Haven!</Text>
            <Text style={styles.headerSubText}>
                A group of high school students relieving dementia through problem solving
                and critical thinking.
            </Text>
        </View>
        <View style={styles.carouselContainer}>
            <Carousel
                layout={"default"}
                ref={ref}
                data={carouselData}
                sliderWidth={300}
                itemWidth={300}
                renderItem={renderItem}
                onSnapToItem = { index => setActiveIndex(index) } 
            />
        </View>
    </View>
    )
}

HomeScreen.navigationOptions = navData => {
    return {
        headerTitle: "Home",
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
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 60,
    },
    headerText: {
        color: 'black',
        fontSize: 30,
        fontWeight: '700',
        fontFamily: 'Oswald_700Bold',
        paddingBottom: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    headerSubText: {
        fontFamily: 'Oswald_400Regular',
        fontSize: 16,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    carouselContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 40,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
    },
    carouselItem: {
        alignItems: 'center',
        padding: 20,
    },
    carouselTitleContainer: {
        marginBottom: 10,
    },
    carouselTextContainer: {

    },
    carouselTitle: {
        fontWeight: '600',
        fontSize: 20,
        color: 'black',
        fontFamily: 'Oswald_700Bold',
    },
    carouselText: {
        fontFamily: 'Oswald_400Regular',
        fontSize: 16,
        textAlign: 'center',
        color: 'white'
    }
})

export default HomeScreen