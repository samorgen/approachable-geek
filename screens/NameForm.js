import { Text, View, Image, Pressable } from 'react-native'
import UpdateButton from '../components/UpdateButton'

const NameForm = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
        What's your name?
      </Text>
      <UpdateButton />
    </View>
  )
}

export default NameForm
