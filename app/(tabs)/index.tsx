import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', fontStyle: 'italic', color: '#333', marginBottom: 30 }}>Hello World</Text>
      <Link href={"about"} style={{ fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', color: '#1e90ff', marginBottom: 15, textDecorationLine: 'underline' }}>About</Link>
      <Link href={"contact"} style={{ fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', color: '#1e90ff', marginBottom: 15, textDecorationLine: 'underline' }}>Contact</Link>
    </View>
  )
}

export default Home
