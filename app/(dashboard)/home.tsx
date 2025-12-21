import React from "react"
import { Text, View } from "react-native"

const Home = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl text-center">Home</Text>
      <View className="flex-1 justify-center items-center">
        <Text className="text-4xl text-center font-bold mb-4">Dashboard Home</Text>
        <Text className="text-2xl text-center">Welcome To Home Page</Text>
      </View>
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl text-center">Profile Page</Text>
      </View>
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl text-center">News Page</Text>
      </View>
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl text-center">Task Page</Text>
      </View>
    </View>
  )
}

export default Home