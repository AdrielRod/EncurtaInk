import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../screens/Login/Login'

const Stack = createStackNavigator()

export default function RoutesLogin(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                
            }}
        >
            <Stack.Screen
                name='Login'
                component={Login}
            />
        </Stack.Navigator>
    )
}