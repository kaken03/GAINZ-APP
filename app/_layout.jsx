import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync();

const MainLayout = () => {

  const [fontsLoaded, error] = useFonts({
    "NanumMyeongjo-Bold": require("../assets/fonts/NanumMyeongjo-Bold.ttf"),
    "NanumMyeongjo-ExtraBold": require("../assets/fonts/NanumMyeongjo-ExtraBold.ttf"),
    "NanumMyeongjo-Regular": require("../assets/fonts/NanumMyeongjo-Regular.ttf"),
  });
  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }
  
  return (
    <Stack>
        <Stack.Screen 
        name="index"
        options={{
            headerShown:false
        }}
        />
    </Stack>

    // <>
    // header
    // <Slot></Slot>
    // footer
    // </>
  )
}

export default MainLayout
