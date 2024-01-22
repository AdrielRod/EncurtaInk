import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { AuthProvider } from './src/contexts/AuthContext';
import { theme } from './src/theme/theme';
import Routes from './src/routes';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  // async function donwload(){
  //   const response = await api.post('create/', {
  //       url: link,
  //       ttl: 600,
  //   })
  //   console.log(response.data.link_url)
  // }

  return (
    <AuthProvider >
      <NavigationContainer >
        <ThemeProvider theme={theme} >
          <StatusBar style='light' />
          <Routes />
        </ThemeProvider>
      </NavigationContainer>
    </AuthProvider>
  );



}

