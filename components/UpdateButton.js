import { useState } from 'react'
import { Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../style'

const UpdateButton = ({ name, phone, email, bio }) => {
  const navigation = useNavigation()
  const [phoneError, setPhoneError] = useState(false)
  const [emailError, setEmailError] = useState(false)

  //Error checking
  const handlePress = () => {
    let error = false

    //If a phone number has been entered, check for valid phone number
    if (phone) {
      let re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/

      if (!re.test(phone)) {
        error = true
        setPhoneError(true)
      }
    } else if (email) {
      let re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      if (!re.test(email)) {
        error = true
        setEmailError(true)
      }
    }

    if (!error) {
      navigation.navigate('Profile', {
        name: name,
        phone: phone,
        email: email,
        bio: bio
      })
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
