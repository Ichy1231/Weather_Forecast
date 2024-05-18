import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { s } from './App.style'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Home } from './pages/Forecast/Forecast'
import { Forecast } from './pages/Home/Home'
import backgroundImg from './assests/background.png'
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location'
import { MeteoAPI } from './api/meteo'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

export default function App() {
  const [coordinates, setCoordinates] = useState()
  const [weather, setWeather] = useState()
  const [city, setCity] = useState()
  const [isFontLoaded] = useFonts({
    'Alata-Regular': require('./assests/fonts/Alata-Regular.ttf'),
  })

  useEffect(() => {
    getUserCoordinates()
  }, [])

  useEffect(() => {
    if (coordinates) {
      fetchWeatherByCoords(coordinates)
      fetchCityByCoords(coordinates)
    }
  }, [coordinates])

  async function fetchWeatherByCoords(coords) {
    try {
      const weatherResponse = await MeteoAPI.fetchWeatherByCoords(coords)
      setWeather(weatherResponse)
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }

  async function fetchCityByCoords(coords) {
    try {
      const cityResponse = await MeteoAPI.fetchCityByCoords(coords)
      setCity(cityResponse)
    } catch (error) {
      console.error('Error fetching City data:', error)
    }
  }

  async function getUserCoordinates() {
    const { status } = await requestForegroundPermissionsAsync()
    if (status === 'granted') {
      const location = await getCurrentPositionAsync()
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      })
    } else {
      setCoordinates({ lat: '48.85', lng: '2.35' })
    }
  }
  return (
    <NavigationContainer>
      <ImageBackground
        imageStyle={s.img}
        style={s.img_background}
        source={backgroundImg}
      >
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>
            {isFontLoaded && weather && (
              <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Forecast' component={Forecast} />
              </Stack.Navigator>
            )}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  )
}
