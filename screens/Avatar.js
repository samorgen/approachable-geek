import { Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Avatar = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
        Upload a photo of yourself
      </Text>
      <Image
        source={require('../assets/profile.jpg')}
        style={{
          width: '80%',
          margin: 40
        }}
      />
      {/* <Button title='Update' color='#f194ff' /> */}
      <Pressable
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          elevation: 3,
          backgroundColor: 'black',
          width: '80%'
        }}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={{ color: 'white' }}>Update</Text>
      </Pressable>
    </View>
  )
}

export default Avatar
