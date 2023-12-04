import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import style from './style';
import * as ImagePicker from 'expo-image-picker';
import { addUserPicture } from '../../api/UserAPI';

function VerifyCard() {
  const [image, setImage] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { username } = route.params;

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.01,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onDone = () => {
    if (image) {
      // FileSystem.readAsStringAsync(image, {encoding: FileSystem.EncodingType.Base64})
      // .then(res => {
      //   addUserPicture(username, 'data:image/png;base64,' + res)
      //   .then(res => {
      //     navigation.navigate("Login")
      //   }).catch(error => console.log(error))
      // })
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.textHeader}>Upload your student card for verification</Text>
      <Text style={style.textDescription}>We want to make sure you are a legit student for a safe experience.</Text>
      {image ? (
        <Image source={{ uri: image }} style={style.profileImage} />
      ) : (
        <Image source={require('../../assets/default-profile.png')} style={style.profileImage} />
      )}
      <View style={style.uploadPictureButton}>
        <TouchableOpacity onPress={pickImage} style={style.innerUploadPictureButton}>
          <Feather name="upload" size={80} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', gap: 100, marginTop: 50 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left-circle" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.button, !image && { opacity: 0.5 }]}
          onPress={() => onDone()}
          disabled={!image}
        >
          <Text style={style.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default VerifyCard;
