import { Text, View, Image, Pressable } from 'react-native'
import UpdateButton from '../components/UpdateButton'

const Avatar = () => {
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

      <View style={{ width: '80%' }}>
        <UpdateButton />
      </View>
    </View>
  )
}

export default Avatar
