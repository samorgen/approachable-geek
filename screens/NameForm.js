import { useState, useEffect } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import UpdateButton from '../components/UpdateButton'
import { styles } from '../style'

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>What's your name?</Text>
        <View style={styles.boxContainer}>
          <View style={styles.nameBox}>
            <Text style={styles.boxTitle}>First Name</Text>
            <TextInput
              placeholder='John'
              value={firstName}
              onChangeText={setFirstName}
              style={styles.boxText}
            />
          </View>
          <View style={styles.nameBox}>
            <Text style={styles.boxTitle}>Last Name</Text>
            <TextInput
              placeholder='Doe'
              value={lastName}
              onChangeText={setLastName}
              style={styles.boxText}
            />
          </View>
        </View>

        <View style={styles.updateButton}>
          <UpdateButton name={`${firstName} ${lastName}`} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default NameForm
