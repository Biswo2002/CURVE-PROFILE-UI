import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from './src/Profile'
import { NativeBaseProvider } from 'native-base'

const App = () => {
  return (
    <NativeBaseProvider>
      <Profile />
    </NativeBaseProvider>
  )
}

export default App

const styles = StyleSheet.create({})