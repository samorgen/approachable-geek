import { Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const UpdateButton = () => {
  const navigation = useNavigation()
  return (
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
  )
}

export default UpdateButton
