import { useState } from 'react'
import { Text, View, Pressable, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../style'
import * as ImagePicker from 'expo-image-picker'

const UpdateButton = ({ name, phone, email, bio, avatar }) => {
  const navigation = useNavigation()
  const [phoneError, setPhoneError] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const handleNavigate = (newAvatar) => {
    navigation.navigate('Profile', {
      name: name,
      phone: phone,
      email: email,
      bio: bio,
      avatar: newAvatar
    })
  }

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Cameral roll permission needed')
    } else {
      const result = await ImagePicker.launchImageLibraryAsync()

      if (!result.canceled) {
        handleNavigate(result.assets[0].uri)
      }
    }
  }

  //Handle press from throughout app
  const handlePress = () => {
    let error = false

    //if pressed from avatar page, handle image picker
    if (avatar) {
      handlePickImage()
      return
    }

    //If a phone number has been entered, check for valid phone number
    else if (phone) {
      let re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/

      if (!re.test(phone)) {
        error = true
        setPhoneError(true)
      }
    }

    //If an email has been entered, check if valid
    else if (email) {
      let re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      if (!re.test(email)) {
        error = true
        setEmailError(true)
      }
    }

    //If no errors, navigate back to home screen
    if (!error) {
      handleNavigate()
    }
  }

  return (
    <View>
      {phoneError ? (
        <Text style={styles.errorText}>Please enter a valid phone number</Text>
      ) : (
        <></>
      )}
      {emailError ? (
        <Text style={styles.errorText}>Please enter a valid email address</Text>
      ) : (
        <></>
      )}
      <Pressable
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          elevation: 3,
          backgroundColor: 'black'
        }}
        onPress={handlePress}
      >
        <Text style={{ color: 'white' }}>Update</Text>
      </Pressable>
    </View>
  )
}

export default UpdateButton
