import React from "react"
import { Platform } from 'react-native'

import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Ionicons } from "@expo/vector-icons"

import PatternsOverviewScreen from '../screens/Program/PatternsOverviewScreen'
import RiddlesOverviewScreen from '../screens/Program/RiddlesOverviewScreen'
import AnalogiesOverviewScreen from '../screens/Program/AnalogiesOverviewScreen'

import HomeScreen from '../screens/HomeScreen'
import MediaScreen from '../screens/MediaScreen'

import Colors from '../constants/Colors'

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.bgBlue : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.bgBlue
}

const HomeNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
}, {
    defaultNavigationOptions:defaultNavOptions
})

const MediaNavigator = createStackNavigator({
    Media: {
        screen: MediaScreen
    }
}, {
    defaultNavigationOptions:defaultNavOptions
})

const PatternsNavigator = createStackNavigator({
    PatternsOverview: {
        screen: PatternsOverviewScreen
    }
}, {
    defaultNavigationOptions: defaultNavOptions
})

const RiddlesNavigator = createStackNavigator({
    RiddlesOverview: {
        screen: RiddlesOverviewScreen
    }
}, {
    defaultNavigationOptions: defaultNavOptions
})

const AnalogiesNavigator = createStackNavigator({
    AnalogiesOverview: {
        screen: AnalogiesOverviewScreen
    }
}, {
    defaultNavigationOptions: defaultNavOptions
})

const ProgramsNavigator = createBottomTabNavigator({
    Patterns: {
        screen: PatternsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons 
                        name={Platform.OS === 'android' ? 'md-calculator' : 'ios-calculator'}
                        size={25} 
                        color={tabInfo.tintColor} 
                    />
                )
            }
        }
    },
    Riddles: {
        screen: RiddlesNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons 
                        name={Platform.OS === 'android' ? 'md-calculator' : 'ios-calculator'}
                        size={25} 
                        color={tabInfo.tintColor} 
                    />
                )
            }
        }
    },
    Analogies: {
        screen: AnalogiesNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons 
                        name={Platform.OS === 'android' ? 'md-calculator' : 'ios-calculator'}
                        size={25} 
                        color={tabInfo.tintColor} 
                    />
                )
            }
        }
    },
}, {
  
  tabBarOptions: {
    activeTintColor: Colors.bgBlue,
    inactiveTintColor: 'gray',
    labelStyle: {
        fontSize: 12,
        margin: 0,
        paddingBottom: 2,
    },
  },
})

const MainNavigator = createDrawerNavigator({
    Home: HomeNavigator,
    Programs: ProgramsNavigator,
}, {
    contentOptions: {
        activeTintColor: Colors.darkBlue
    }
})

export default createAppContainer(MainNavigator);