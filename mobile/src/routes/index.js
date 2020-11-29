import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/Theme';

import CreateAdvert from '../pages/CreateAdvert';
import Home from '../pages/Home';
import ListAdverts from '../pages/ListAdverts';
import Search from '../pages/Search';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import LogoMedium from '../assets/logo/Medium';

const Stack = createStackNavigator();

const Router = () => (
    <ThemeProvider theme={theme}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerStyle: { elevation: 0 } }}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerTitle: () => <LogoMedium /> }}
                />
                <Stack.Screen
                    name="Search"
                    component={Search}
                    options={{ title: 'Filtrar anúncios' }}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{ title: 'Entre com seu login' }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ title: 'Cadastrar' }}
                />
                <Stack.Screen
                    name="CreateAdvert"
                    component={CreateAdvert}
                    options={{ title: 'Criar Anúncio' }}
                />
                <Stack.Screen
                    name="ListAdverts"
                    component={ListAdverts}
                    options={{ title: 'Anúncios' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </ThemeProvider>
);

export default Router;
