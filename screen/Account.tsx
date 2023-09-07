import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image,
    StatusBar,
} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, } from '@expo/vector-icons'
import { Avatar, Card, IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

interface CardData {
    title: string;
    subtitle: string;
    icon: string;
    iconButton: string;
};

const Account: React.FC = () => {
    StatusBar.setBarStyle('dark-content');


    const data: CardData[] = [
        {
            title: 'My Account',
            subtitle: 'Subtitle 1',
            icon: 'account',
            iconButton: 'arrow-right',

        },
        {
            title: 'Notification',
            subtitle: 'Subtitle 2',
            icon: 'bell-badge',
            iconButton: 'arrow-right',
        },

        {
            title: 'Settings',
            subtitle: 'Subtitle 3',
            icon: 'cog',
            iconButton: 'arrow-right',
        },

        {
            title: 'Help Center',
            subtitle: 'Subtitle 4',
            icon: 'help',
            iconButton: 'arrow-right',
        },

    ];

    return (
        <ScrollView style={styles.scrolview}>
            <StatusBar backgroundColor='transparent' />
            <LinearGradient colors={['#9370DB', '#DAC8F6', 'transparent']} locations={[0, 0.3, 0.5]} style={styles.pageTop}>
                <View style={styles.view_icon}>
                    <MaterialCommunityIcons name='camera-outline' size={30} color={'white'} />
                </View>
                <View style={styles.view_Image}>
                    <View style={styles.view_image}>
                        <TouchableOpacity style={styles.Toc_image}>
                            <Image
                                style={styles.image}
                                source={require('../assets/gambar.jpeg')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view_khai}>
                        <Text style={styles.My_text}>Prof. Dr. Khairuddin, M.Sc., Ph.D.</Text>
                    </View>
                </View>
            </LinearGradient>
            <View style={styles.view_data}>
                {data.map((item, index) => (
                    <Card.Title
                        key={index}
                        titleStyle={styles.titleStyle}
                        title={item.title}
                        style={styles.cardTitle}
                        left={(props) => <Avatar.Icon {...props} icon={item.icon} />}
                        right={(props) => <IconButton {...props} icon={item.iconButton} onPress={() => alert('belum ada fungsi')} />}
                    />
                ))}
            </View>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    scrolview: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: 'white',
    },
    pageTop: {
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 20,
    },
    view_icon: {
        bottom: 10,
        paddingHorizontal: 10,
    },
    My_text: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    view_Image: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,

    },
    view_image: {
        width: 185,
        height: 185,
        borderRadius: 95,
        backgroundColor: '#DAC8F6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Toc_image: {
        width: 170,
        height: 170,
        borderRadius: 87.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        width: 160,
        height: 160,
        borderRadius: 80,
    },
    view_khai: {
        paddingVertical: 15,
    },
    view_data: {
        marginTop: 20,
    },
    cardTitle: {
        backgroundColor: '#DAC8F6',
        borderRadius: 15,
        marginVertical: 5,
        // elevation: 5,
        // shadowColor: '#9370DB',
        // shadowOffset: { width: 0, height: 12 },
        // shadowRadius: 50,
    },
    titleStyle: {
        fontWeight: 'bold',
    }
})

export default Account;