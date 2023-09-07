import React from 'react'
import { FAB, Badge, IconButton } from 'react-native-paper'
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native'

interface interfaceData {
    icon: string;
    title: string;
    routeName: string;
    color: string;
}

const konpersi: interfaceData[] = [
    {
        icon: 'microsoft-word',
        title: 'To Word',
        color: 'blue',
        routeName: '',
    },
    {
        icon: 'microsoft-excel',
        title: 'To Excel',
        color: 'green',
        routeName: '',
    },
    {
        icon: 'microsoft-powerpoint',
        title: 'To PPT',
        color: 'orange',
        routeName: '',
    },
    {
        icon: 'hexagon-multiple',
        title: 'CountCam',
        color: 'aqua',
        routeName: '',
    },
    {
        icon: 'eraser',
        title: 'Smart Delete',
        color: 'blue',
        routeName: '',
    },
    {
        icon: 'image',
        title: 'PDF To Image',
        color: 'green',
        routeName: '',
    },
    {
        icon: 'image-album',
        title: 'PDF To Long Image',
        color: 'orange',
        routeName: '',
    },
];


const Edit: interfaceData[] = [
    {
        icon: 'file-import',
        title: 'Import',
        color: 'blue',
        routeName: '',
    },
    {
        icon: 'draw',
        title: 'Signature',
        color: 'green',
        routeName: '',
    },
    {
        icon: 'watermark',
        title: 'Watermark',
        color: 'orange',
        routeName: '',
    },
    {
        icon: 'table-merge-cells',
        title: 'Merge PDF',
        color: 'aqua',
        routeName: '',
    },
    {
        icon: 'table-split-cell',
        title: 'Split PDF ',
        color: 'blue',
        routeName: '',
    },
    {
        icon: 'file-cog',
        title: 'Organize PDF',
        color: 'green',
        routeName: '',
    },
    {
        icon: 'shield-sun',
        title: 'PDF Protection',
        color: 'green',
        routeName: '',
    },
];



const Other: React.FC = () => {
    return (
        <ScrollView style={styles.scroll}>
            <Text style={styles.tex}>Conversion</Text>
            <View style={styles.viewkonpersi}>
                {konpersi.map((item, konfersi) => (
                    <View style={styles.viewIconButton}>
                        <IconButton
                            key={konfersi}
                            icon={item.icon}
                            size={30}
                            iconColor={item.color}
                            mode='contained-tonal'
                            onPress={() => alert('belum selesai')}
                        />
                        <Text>{item.title}</Text>
                    </View>
                ))}

            </View>
            <Text style={styles.tex}>Edit</Text>
            <View style={styles.viewkonpersi}>
                {Edit.map((item, edit) => (
                    <View style={styles.viewIconButton}>
                        <IconButton
                            key={edit}
                            icon={item.icon}
                            size={30}
                            iconColor={item.color}
                            mode='contained-tonal'
                            onPress={() => alert('belum selesai')}
                        />
                        <Text>{item.title}</Text>
                    </View>
                ))}

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: 'white'
    },
    tex: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    viewkonpersi: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    viewIconButton: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        width: 58,

    },
    fab: {
        // position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})

export default Other