import { useState } from 'react'
import {
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import UpdateButton from '../components/UpdateButton'
import { styles } from '../style'

const BioForm = ({ route }) => {
  const [bio, setBio] = useState(route.params.info)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>What type of passenger are you?</Text>

        <View style={styles.box}>
          <TextInput
            placeholder='Write a little bit about yourself. Do you like chatting? Are you a
          smoker? Do you bring pets with you? Etc.'
            value={bio}
            onChangeText={setBio}
            multiline
            style={styles.boxText}
          />
        </View>

        <View style={styles.updateButton}>
          <UpdateButton bio={bio} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default BioForm
