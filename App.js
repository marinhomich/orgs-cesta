import React, { useEffect, useCallback } from 'react';

import {StatusBar, SafeAreaView, View} from 'react-native';
import Cesta from "./src/pages/Cesta";
import mock from './src/mocks/cesta';
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        MontserratRegular: Montserrat_400Regular,
        MontserratBold: Montserrat_700Bold,
    });

    useEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync();
            } catch (e) {
                console.warn(e);
            }
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={{flex: 1}} onLayout={onLayoutRootView}>
            <View>
                <StatusBar/>
                <Cesta {...mock}/>
            </View>
        </SafeAreaView>
    );
}
