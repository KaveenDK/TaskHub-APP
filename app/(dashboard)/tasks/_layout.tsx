import { Stack } from 'expo-router'
import React from 'react'

const TaskLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
        <Stack.Screen name="index" 
            options={{ 
            title: 'Task List' 
            }} />
        <Stack.Screen name="form" 
            options={{ 
            title: 'Task Form' 
            }} />
    </Stack>
  )
}

export default TaskLayout