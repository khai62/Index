import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect } from 'react'
import Navigation from './Navigation';
import Beranda from '../components/Beranda';
import OneDrive from '../components/OneDrive';
import Downloads from "../components/Downloads";
import Documents from "../components/Documents";
import Music from "../components/Music";
import Pictures from "../components/Pictures";
import Video from "../components/Video";

const Stack = createNativeStackNavigator();


const Stacks: React.FC = () => {

  useEffect(() => {
    async function mulaiApp() {
      await SplashScreen.preventAutoHideAsync();
    }
    mulaiApp();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Navigation'>
        <Stack.Screen
          name='Navigation'
          component={Navigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Beranda'
          component={Beranda}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={OneDrive}
          name='OneDrive'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Downloads}
          name='Downloads'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Documents}
          name='Documents'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Music}
          name='Music'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Pictures}
          name='Pictures'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Video}
          name='Video'
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Stacks;