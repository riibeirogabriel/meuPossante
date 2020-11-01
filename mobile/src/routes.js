import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme';

import Home from './pages/Home';

const Stack = createStackNavigator();

const Router = () => (
    <ThemeProvider theme={Theme}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerStyle: { elevation: 0 } }}>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    </ThemeProvider>
);

export default Router;
