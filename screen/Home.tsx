import { View, Text, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import "react-native-gesture-handler";
import { FAB, Portal, Provider as PaperProvider } from 'react-native-paper';

const Home: React.FC = () => {

    const [state, setState] = React.useState({ open: false });
    const [pressedIcon, setPressedIcon] = React.useState('');

    const onStateChage = ({ open }: { open: boolean }) => {
        if (open) {
            setPressedIcon('');
        }
        setState({ open });
    };
    const { open } = state;

    return (
        <PaperProvider>
            <Portal>
                <FAB.Group
                    style={styles.Fab}
                    open={open}
                    visible
                    icon={open ? 'calendar-today' : 'plus'}
                    actions={[
                        { icon: 'plus', onPress: () => alert('New Tab') },
                        {
                            icon: 'folder',
                            label: 'New Folder',
                            onPress: () => alert('New folder')
                        },
                        {
                            icon: 'share',
                            label: 'Share directly',
                            onPress: () => alert('Share')
                        }
                    ]}
                    onStateChange={onStateChage}
                    onPress={() => {
                        switch (pressedIcon) {
                            case 'plus':
                                break;
                            case 'folder':
                                break;
                            case 'share':
                                break;
                            default:
                        }
                    }}
                />
            </Portal>
        </PaperProvider>
    )
}


const styles = StyleSheet.create({
    Fab: {
        marginBottom: 62,
        position: 'absolute',

    }
})

export default Home;