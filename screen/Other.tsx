import React from 'react'
import { FAB, Badge, IconButton } from 'react-native-paper'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    StatusBar,
} from 'react-native'

interface interfaceData {
    id: number;
    icon: string;
    title: string;
    routeName: string;
    color: string;
}

const konpersi: interfaceData[] = [
    {

        id: 1,
        icon: 'microsoft-word',
        title: 'To Word',
        color: 'blue',
        routeName: '',
    },
    {
        id: 2,
        icon: 'microsoft-excel',
        title: 'To Excel',
        color: 'green',
        routeName: '',
    },
    {
        id: 3,
        icon: 'microsoft-powerpoint',
        title: 'To PPT',
        color: 'orange',
        routeName: '',
    },
    {
        id: 4,
        icon: 'hexagon-multiple',
        title: 'CountCam',
        color: 'aqua',
        routeName: '',
    },
    {
        id: 5,
        icon: 'eraser',
        title: 'Smart Delete',
        color: 'blue',
        routeName: '',
    },
    {
        id: 6,
        icon: 'image',
        title: 'PDF To Image',
        color: 'green',
        routeName: '',
    },
    {
        id: 7,
        icon: 'image-album',
        title: 'PDF To Long Image',
        color: 'orange',
        routeName: '',
    },
];


const Edit: interfaceData[] = [
    {
        id: 8,
        icon: 'file-import',
        title: 'Import',
        color: 'blue',
        routeName: '',
    },
    {
        id: 9,
        icon: 'draw',
        title: 'Signature',
        color: 'green',
        routeName: '',
    },
    {
        id: 10,
        icon: 'watermark',
        title: 'Watermark',
        color: 'orange',
        routeName: '',
    },
    {
        id: 11,
        icon: 'table-merge-cells',
        title: 'Merge PDF',
        color: 'aqua',
        routeName: '',
    },
    {
        id: 12,
        icon: 'table-split-cell',
        title: 'Split PDF ',
        color: 'blue',
        routeName: '',
    },
    {
        id: 13,
        icon: 'file-cog',
        title: 'Organize PDF',
        color: 'green',
        routeName: '',
    },
    {
        id: 14,
        icon: 'shield-sun',
        title: 'PDF Protection',
        color: 'green',
        routeName: '',
    },
];
const scan: interfaceData[] = [
    {
        id: 15,
        icon: 'card-account-details',
        title: 'IDCard ',
        color: 'blue',
        routeName: '',
    },
    {
        id: 16,
        icon: 'text-recognition',
        title: 'OCR ',
        color: 'green',
        routeName: '',
    },
    {
        id: 17,
        icon: 'badge-account',
        title: 'Passport photo',
        color: 'orange',
        routeName: '',
    },
    {
        id: 18,
        icon: 'file-document-edit',
        title: 'Exercise',
        color: 'aqua',
        routeName: '',
    },
    {
        id: 19,
        icon: 'book-open-variant',
        title: 'Book',
        color: 'blue',
        routeName: '',
    },
    {
        id: 20,
        icon: 'projector-screen',
        title: 'PPT',
        color: 'green',
        routeName: '',
    },
    {
        id: 21,
        icon: 'image-plus',
        title: 'Import Images',
        color: 'green',
        routeName: '',
    },
    {
        id: 22,
        icon: 'presentation',
        title: 'Whiteboard Photo',
        color: 'green',
        routeName: '',
    },
];

const other: interfaceData[] = [
    {
        id: 23,
        icon: 'qrcode-scan',
        title: 'QR Code',
        color: 'green',
        routeName: '',
    }
];



const Other: React.FC = () => {
    return (
        <ScrollView>
            <StatusBar backgroundColor='transparent' />
            <View style={styles.scroll}>
                {/* ---------------------- Conversion ----------  */}

                <Text style={styles.tex}>Conversion</Text>
                <View style={styles.viewkonpersi}>
                    {konpersi.map((item) => (
                        <View style={styles.viewIconButton}>
                            <IconButton
                                key={item.id}
                                icon={item.icon}
                                size={30}
                                iconColor={item.color}
                                mode='contained-tonal'
                                onPress={() => alert('belum selesai')}
                            />
                            <Text style={styles.teks}>{item.title}</Text>
                        </View>
                    ))}

                </View>

                {/* ---------------------- edit ----------  */}

                <Text style={styles.tex}>Edit</Text>
                <View style={styles.viewkonpersi}>
                    {Edit.map((item) => (
                        <View style={styles.viewIconButton}>
                            <IconButton
                                key={item.id}
                                icon={item.icon}
                                size={30}
                                iconColor={item.color}
                                mode='contained-tonal'
                                onPress={() => alert('belum selesai')}
                            />
                            <Text style={styles.teks}>{item.title}</Text>
                        </View>
                    ))}

                </View>

                {/* ---------------------- scan----------  */}

                <Text style={styles.tex}>Scan</Text>
                <View style={styles.viewkonpersi}>
                    {scan.map((item) => (
                        <View style={styles.viewIconButton}>
                            <IconButton
                                key={item.id}
                                icon={item.icon}
                                size={30}
                                iconColor={item.color}
                                mode='contained-tonal'
                                onPress={() => alert('belum selesai')}
                            />
                            <Text style={styles.teks}>{item.title}</Text>
                        </View>
                    ))}

                </View>

                {/* ---------------------- Other ----------  */}

                <Text style={styles.tex}>Other</Text>
                <View style={styles.viewkonpersi}>
                    {other.map((item) => (
                        <View style={styles.viewIconButton}>
                            <IconButton
                                key={item.id}
                                icon={item.icon}
                                size={30}
                                iconColor={item.color}
                                mode='contained-tonal'
                                onPress={() => alert('belum selesai')}
                            />
                            <Text style={styles.teks}>{item.title}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 90,
        backgroundColor: 'white'
    },
    tex: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    teks: {
        width: 50,
        textAlign: 'center',
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