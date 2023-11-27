import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  TextInput
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { IconButton } from 'react-native-paper'
import ProfileInfo from '../components/ProfileInfo'

const HomeScreen = ({ route }) => {
  const navigation = useNavigation()

  const [name, setName] = useState('Sam Morgen')
  const [phone, setPhone] = useState('000-000-0000')
  const [email, setEmail] = useState('test@test.com')
  const [bio, setBio] = useState(
    'Hello, my name is Sam Morgen. I live in Rancho Mirage, CA. I am the type of passenger who loves to be in control of the music.'
  )

  useEffect(() => {
    if (route?.params?.name) {
      setName(route.params.name)
    } else if (route?.params?.phone) {
      setPhone(route.params.phone)
    } else if (route?.params?.email) {
      setEmail(route.params.email)
    } else if (route?.params?.bio) {
      setBio(route.params.bio)
    }
  }, [route.params])

  return (
    <View style={styles.container}>
      <Text style={{ color: '#348feb', fontWeight: 'bold', fontSize: 30 }}>
        Edit Profile
      </Text>
      <View>
        <Image
          source={require('../assets/profile.jpg')}
          style={{
            height: 150,
            width: 150,
            borderRadius: 150 / 2,
            overflow: 'hidden',
            borderWidth: 3,
            borderColor: '#348feb'
          }}
        />
        <IconButton
          icon='pencil'
          onPress={() => navigation.navigate('Edit Avatar')}
          containerColor='#FFFFFF'
          iconColor='#348feb'
          mode='contained'
          style={{ position: 'absolute', top: 2, right: 2 }}
        />
      </View>

      <ProfileInfo
        infoTitle={'Name'}
        infoValue={name}
        viewDestination={'Edit Name'}
      />
      <ProfileInfo
        infoTitle={'Phone'}
        infoValue={phone}
        viewDestination={'Edit Phone'}
      />
      <ProfileInfo
        infoTitle={'Email'}
        infoValue={email}
        viewDestination={'Edit Email'}
      />
      <ProfileInfo
        infoTitle={'Tell us about yourself'}
        infoValue={bio}
        numOfLines={4}
        enableMultiLine={true}
        viewDestination={'Edit Bio'}
      />

      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede9e8',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default HomeScreen
