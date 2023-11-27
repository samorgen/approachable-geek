import { useState, useEffect } from 'react'
import { Text, View, Image, Pressable, TextInput } from 'react-native'
import UpdateButton from '../components/UpdateButton'

const NameForm = ({ route }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  //Split username into fist and last name
  useEffect(() => {
    let tmpName = route.params.info.split(' ')
    setFirstName(tmpName[0])
    setLastName(tmpName[1])
  }, [])
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
          <TextInput
            placeholder='John'
            value={firstName}
            onChangeText={setFirstName}
          />
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
          <TextInput
            placeholder='Doe'
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
      </View>

      <UpdateButton name={`${firstName} ${lastName}`} />
    </View>
  )
}

export default NameForm
