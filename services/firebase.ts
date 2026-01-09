// firebaseConfig.ts
// lib/firebaseConfig.ts

import AsyncStorage from "@react-native-async-storage/async-storage"
import { initializeApp } from "firebase/app"
// @ts-ignore
import { getReactNativePersistence, initializeAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBIl7JXHqbOAIx_283SqGYltAB666nCCWw",
  authDomain: "taskhub-app-kaveen.firebaseapp.com",
  projectId: "taskhub-app-kaveen",
  storageBucket: "taskhub-app-kaveen.firebasestorage.app",
  messagingSenderId: "88574279904",
  appId: "1:88574279904:web:c8af3e172860aa2c4c5085"
}

const app = initializeApp(firebaseConfig)

// for authentication
// only need for before firebase v9.9.0
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

// for firestore database
export const db = getFirestore(app)