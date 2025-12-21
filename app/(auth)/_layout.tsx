import { Stack } from "expo-router"
import React from "react"

const AuthLayout = () => {
  return (
    <Stack 
        screenOptions={{
            headerShown: false,
            animation: "ios_from_right"
    }}>
        <Stack.Screen 
            name="login" 
            options={{
                title: "Hello Form Login"
            }}
        />
        <Stack.Screen 
            name="register"
            options={{
                title: "Hello Form Register"
            }}
        />
    </Stack>
  )
}

export default AuthLayout