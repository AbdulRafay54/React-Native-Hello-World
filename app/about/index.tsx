import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#333', marginBottom: 10 }}>About Us</Text>
      <Text style={{ fontSize: 16, color: '#666', marginBottom: 20 }}>
        We are a company dedicated to providing the best services to our customers.
      </Text>
      
      {/* Back to Home Button */}
      <Link href="/" style={{ backgroundColor: '#1e90ff', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: '#fff', fontSize: 16 }}>Back to Home Page</Text>
      </Link>
    </View>
  )
}

export default About
