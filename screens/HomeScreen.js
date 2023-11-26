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

      <View style={{ width: '75%', marginTop: 20 }}>
        <View
          style={{
            borderBottomColor: '#000000',
            borderBottomWidth: 1
          }}
        >
          <Text style={{ marginBottom: -10, color: 'gray' }}>Name</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <TextInput
              // editable
              // multiline
              // numberOfLines={4}
              maxLength={40}
              //onChangeText={(text) => onChangeText(text)}
              value={'Sam Morgen'}
              style={{ fontWeight: 'bold' }}
            />
            <IconButton
              icon='chevron-right'
              onPress={() => navigation.navigate('Edit Avatar')}
            />
          </View>
        </View>
      </View>

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
