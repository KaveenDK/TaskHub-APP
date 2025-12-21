import { MaterialIcons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import React from "react"
import { Text, TouchableOpacity, View } from "react-native"

const Tasks = () => {
  const router = useRouter()
  return (
    <View className="flex-1 bg-gray-50">
      <TouchableOpacity
        className="bg-blue-600/80 rounded-full shadow-lg absolute bottom-0 right-0 m-6 p-2"
        onPress={() => router.push("/tasks/form")}
      >
        <MaterialIcons name="add" size={40} color="#fff" />
      </TouchableOpacity>
      <View>
        <Text className="font-semibold text-2xl">Task List</Text>
      </View>
    </View>
  )
}

export default Tasks