import { useState, useEffect } from 'react'
import { Text, View, Image, Pressable, TextInput } from 'react-native'
import UpdateButton from '../components/UpdateButton'

const EmailForm = ({ route }) => {
  const [email, setEmail] = useState(route.params.info)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
        What's your phone number?
      </Text>

      <View
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          minWidth: 100,
          minHeight: 50
        }}
      >
        <Text style={{ color: 'gray', fontWeight: 'bold' }}>
          Your email address
        </Text>
        <TextInput
          placeholder='###-###-####'
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <UpdateButton email={email} />
    </View>
  )
}

export default EmailForm
