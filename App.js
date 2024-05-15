import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'
import { s } from './App.style'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Home } from './pages/Home/Home'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
