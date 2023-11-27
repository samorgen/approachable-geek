import { useState, useEffect } from 'react'
import { Text, View, Image, Pressable, TextInput } from 'react-native'
import UpdateButton from '../components/UpdateButton'

const BioForm = ({ route }) => {
  const [bio, setBio] = useState(route.params.info)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
        What type of passenger are you?
      </Text>

      <View
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          minWidth: 100,
          minHeight: 50
        }}
      >
        <TextInput
          placeholder='Write a little bit about yourself. Do you like chatting? Are you a
          smoker? Do you bring pets with you? Etc.'
          value={bio}
          onChangeText={setBio}
          multiline
        />
      </View>

      <UpdateButton bio={bio} />
    </View>
  )
}

export default BioForm
