import React from 'react'
import { Image, View } from 'react-native'
import imagePath from '../constants/imagePath'

const Home = () => {
  return (
    <View>
      <Image source={imagePath.react_logo}/>
    </View>
  )
}

export default Home 