import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import style from './style'

function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Text style={style.welcomeHeaderText}> Let's Explore</Text>
      <Text style={style.welcomeDescriptionText}>Your adventure starts here....</Text>
      <Image style={style.image} source={require('../../assets/buisness-picture.png')}/>

      <TouchableOpacity style={style.joinNowButton} onPress={() => navigation.navigate("CreateAccount")}>
        <Text style={style.joinNowButtonText}>Join Now</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <Text style={style.haveAccountText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={style.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Welcome  