/* eslint-disable camelcase */
import React from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
} from '@expo-google-fonts/poppins';

import { store } from './src/store';

import Router from './src/routes';

export default () => {
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        Poppins_900Black,
    });

    if (!fontsLoaded) return <AppLoading />;
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
};
