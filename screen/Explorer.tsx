import { View, Text, StyleSheet } from 'react-native'
import "react-native-gesture-handler"
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    createDrawerNavigator,
    DrawerItemList,
    DrawerContentComponentProps
} from '@react-navigation/drawer'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Beranda from '../components/Beranda'
import OneDrive from '../components/OneDrive'
import Downloads from '../components/Downloads'
import Documents from '../components/Documents'
import Pictures from '../components/Pictures'
import Music from '../components/Music'
import Video from '../components/Video'

const Drawer = createDrawerNavigator();

interface PropsDrawer extends DrawerContentComponentProps { }

const ContentDrawer: React.FC<PropsDrawer> = (props) => {
    return (
        <SafeAreaView>
            <View style={styles.viucontentdrawer}>
                <View style={styles.ViewExpoler}>
                    <Text style={styles.teksContent}>
                        EXPLORER
                    </Text>
                </View>
            </View>
            <DrawerItemList {...props} />
        </SafeAreaView>
    )
};

const Explorer: React.FC = () => {
    return (
        <View style={styles.page}>
            <Drawer.Navigator
                drawerContent={(props) => <ContentDrawer {...props} />}
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: '#DAC8F6',
                        width: 250,
                    },
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    drawerLabelStyle: {
                        color: 'black',
                        fontWeight: 'bold'
                    },
                }}
            >
                <Drawer.Screen
                    name='Home'
                    options={{
                        drawerLabel: 'Home',
                        title: 'Home',
                        drawerIcon: () => (
                            <MaterialCommunityIcons name='home' size={20} color='grey' />
                        ),
                    }}
                    component={Beranda}
                />
                <Drawer.Screen
                    name='OneDrive'
                    component={OneDrive}
                    options={{
                        drawerLabel: 'OneDrive',
                        title: 'OneDrive',
                        drawerIcon: () => (
                            <MaterialCommunityIcons name='cloud' size={20} color='blue' />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Downloads'
                    component={Downloads}
                    options={{
                        drawerLabel: 'Downloads',
                        title: 'Downloads',
                        drawerIcon: () => (
                            <MaterialCommunityIcons name='arrow-down-bold' size={20} color='blue' />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Documents'
                    component={Documents}
                    options={{
                        drawerLabel: 'Documents',
                        title: 'Documents',
                        drawerIcon: () => (
                            <MaterialCommunityIcons name='text-box' size={20} color='grey' />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Music'
                    component={Music}
                    options={{
                        drawerLabel: 'Music',
                        title: 'Music',
                        drawerIcon: () => (
                            <MaterialCommunityIcons name='music-circle' size={20} color='red' />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Pictures'
                    component={Pictures}
                    options={{
                        drawerLabel: 'Pictures',
                        title: 'Pictures',
                        drawerIcon: () => (
                            <MaterialCommunityIcons name='image-area' size={20} color='blue' />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Video'
                    component={Video}
                    options={{
                        drawerLabel: 'Video',
                        title: 'Video',
                        drawerIcon: () => (
                            <MaterialCommunityIcons name='youtube' size={20} color='purple' />
                        )
                    }}
                />
            </Drawer.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    viucontentdrawer: {
        height: 200,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D4A3F4',
        borderBottomWidth: 1,
    },
    page: {
        flex: 1,
    },
    teksContent: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },
    ViewExpoler: {
        height: 150,
        width: 150,
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})

export default Explorer