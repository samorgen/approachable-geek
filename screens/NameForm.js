import { Text, View, Image, Pressable, TextInput } from 'react-native'
import UpdateButton from '../components/UpdateButton'

const NameForm = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
        What's your name?
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '75%',
          justifyContent: 'space-between'
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            minWidth: 100,
            minHeight: 50
          }}
        >
          <Text style={{ color: 'gray', fontWeight: 'bold' }}>First Name</Text>
          <TextInput placeholder='John' />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            minWidth: 100,
            minHeight: 50
          }}
        >
          <Text style={{ color: 'gray', fontWeight: 'bold' }}>Last Name</Text>
          <TextInput placeholder='Doe' />
        </View>
      </View>

      <UpdateButton />
    </View>
  )
}

export default NameForm
