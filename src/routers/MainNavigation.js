import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Dashboard } from '../pages/dashboard';

const Stack = createStackNavigator();

export default function MainNavigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Dashboard'>
                <Stack.Screen 
                name='Dashboard'
                component={Dashboard}
                option={{
                    headerShown: false
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}