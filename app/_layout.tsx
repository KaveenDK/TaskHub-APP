import { Slot } from 'expo-router'
import React from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

const RootLayout = () => {
  const insets = useSafeAreaInsets()
  console.log('Safe Area Insets:', insets)
  return (
    <SafeAreaView className="flex-1" style={{ marginTop: insets.top }}>
      <Slot />
    </SafeAreaView>
  )
}

export default RootLayout