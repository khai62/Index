import React from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Home, Explorer, Other, Account } from '../screen';


const Tab = createBottomTabNavigator();


const screenOptions = {
    tabBarShowLabel: true,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        height: 63,
        backgroundColor: '#DAC8F6'
    }
} as const;

const styles = StyleSheet.create({
    tabBarLabelStyle: {
        fontSize: 13,
        bottom: 10,
        color: 'black',
        width: 50,
    },
    iconStyle: {
        paddingHorizontal: 18,
        borderRadius: 20,
    },
    focusedIcon: {
        backgroundColor: '#D4A3F4',
    },
    unfocusedIcon: {
        backgroundColor: 'transparent',
    },

})

const Navigation: React.FC = () => {

    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'home' : 'home-outline'}
                            size={27}
                            color={focused ? 'black' : '#1B1E23'}
                            style={[
                                styles.iconStyle,
                                focused ? styles.focusedIcon : styles.unfocusedIcon,
                            ]}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Explorer'
                component={Explorer}
                options={{
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'folder-table' : 'folder-table-outline'}
                            size={27}
                            color={focused ? 'black' : '#1B1E23'}
                            style={[
                                styles.iconStyle,
                                focused ? styles.focusedIcon : styles.unfocusedIcon,
                            ]}
                        />
                    )
                }}
            />

            <Tab.Screen
                name='Other'
                component={Other}
                options={{
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'widgets' : 'widgets-outline'}
                            size={27}
                            color={focused ? 'black' : '#1B1E23'}
                            style={[
                                styles.iconStyle,
                                focused ? styles.focusedIcon : styles.unfocusedIcon,
                            ]}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Account'
                component={Account}
                options={{
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'account' : 'account-outline'}
                            size={27}
                            color={focused ? 'black' : '#1B1E23'}
                            style={[
                                styles.iconStyle,
                                focused ? styles.focusedIcon : styles.unfocusedIcon,
                            ]}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Navigation;