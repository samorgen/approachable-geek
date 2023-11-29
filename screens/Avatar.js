import { useEffect, useState } from 'react'
import { Text, View, Image } from 'react-native'
import UpdateButton from '../components/UpdateButton'

const Avatar = ({ route }) => {
  const [avatar, setAvatar] = useState(null)

  useEffect(() => {
    if (route?.params?.avatar) {
      setAvatar(route?.params?.avatar)
    }
  }, [route.params])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
        Upload a photo of yourself
      </Text>
      <Image
        source={avatar ? { uri: avatar } : require('../assets/profile.jpg')}
        style={{
          width: '80%',
          height: '50%',
          margin: 40
        }}
      />

      <View style={{ width: '80%' }}>
        <UpdateButton avatar={true} />
      </View>
    </View>
  )
}

export default Avatar
