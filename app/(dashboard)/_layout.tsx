import { MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const tabs = [
  {name: 'home', title: 'Home', icon: 'home-filled'},
  {name: 'tasks', title: 'Task', icon: 'list'},
  {name: 'news', title: 'News', icon: 'article'},
  {name: 'profile', title: 'Profile', icon: 'person'},
]

const DashboardLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        }}
        >
      {tabs.map(({name, title, icon}: any) => (
        <Tabs.Screen
          name={name}
          options={{
            title: title,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name={icon}
                color={color}
                size={size}
              />
            ),
          }}
        />
      ))}


      {/* <Tabs.Screen name="home" 
        options={{ 
          title: 'Home', 
          tabBarIcon: ({ color, size}) => (
            <MaterialIcons 
              name="home-filled"
              color = {color}
              size={size}
            />
          )
          }} />
      <Tabs.Screen name="task" 
        options={{ 
          title: 'Task' 
          }} />
      <Tabs.Screen name="news" 
        options={{ 
          title: 'News' 
          }} />
      <Tabs.Screen name="profile" 
        options={{ 
          title: 'Profile' 
          }} /> */}
    </Tabs>
  )
}

export default DashboardLayout