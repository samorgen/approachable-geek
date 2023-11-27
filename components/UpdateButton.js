import { Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const UpdateButton = ({ name, phone, email, bio }) => {
  const navigation = useNavigation()
  return (
    <Pressable
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
        backgroundColor: 'black'
      }}
      onPress={() =>
        navigation.navigate('Profile', {
          name: name,
          phone: phone,
          email: email,
          bio: bio
        })
      }
    >
      <Text style={{ color: 'white' }}>Update</Text>
    </Pressable>
  )
}

export default UpdateButton
