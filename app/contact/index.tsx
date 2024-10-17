import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#333', marginBottom: 10 }}>Contact Us</Text>
      <Text style={{ fontSize: 16, color: '#666', marginBottom: 20 }}>We would love to hear from you! Feel free to reach out.</Text>
      
      <Link href="/" style={{ backgroundColor: '#1e90ff', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: '#fff', fontSize: 16 }}>Back to Home Page</Text>
      </Link>
    </View>
  )
}

export default Contact
