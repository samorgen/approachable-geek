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
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
      }}
    >
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          marginBottom: 10,
          width: '90%'
        }}
      >
        What's your name?
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '75%',
          justifyContent: 'center'
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: 'rgba(187, 190, 191, .5)',
            minWidth: '30%',
            minHeight: 50,
            padding: 10,
            margin: 10
          }}
        >
          <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 20 }}>
            First Name
          </Text>
          <TextInput
            placeholder='John'
            value={firstName}
            onChangeText={setFirstName}
            style={{ fontSize: 20, fontWeight: 'bold' }}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'rgba(187, 190, 191, .5)',
            minWidth: '30%',
            minHeight: 50,
            padding: 10,
            margin: 10
          }}
        >
          <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 20 }}>
            Last Name
          </Text>
          <TextInput
            placeholder='Doe'
            value={lastName}
            onChangeText={setLastName}
            style={{ fontSize: 20, fontWeight: 'bold' }}
          />
        </View>
      </View>

      <View
        style={{
          width: '80%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: 30
        }}
      >
        <UpdateButton name={`${firstName} ${lastName}`} />
      </View>
    </View>
  )
}

export default NameForm
