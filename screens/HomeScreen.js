import React from 'react'
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

const HomeScreen = () => {
  const navigation = useNavigation()
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

      <ProfileInfo infoTitle={'Name'} infoValue={'Sam Morgen'} />
      <ProfileInfo infoTitle={'Phone'} infoValue={'000-000-0000'} />
      <ProfileInfo infoTitle={'Email'} infoValue={'test@test.com'} />
      <ProfileInfo
        infoTitle={'Tell us about yourself'}
        infoValue={
          'asdf adsf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf '
        }
        numOfLines={4}
        enableMultiLine={true}
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
