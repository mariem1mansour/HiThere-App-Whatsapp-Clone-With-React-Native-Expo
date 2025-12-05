import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Auth = () => {
  return (
    <View style={{marginTop:20}}>
      <Text>Auth</Text>
      <Link href={"/login"}>Login</Link>
    </View>
  )
}

export default Auth