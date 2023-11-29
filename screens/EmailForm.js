import { useState } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import UpdateButton from '../components/UpdateButton'
import { styles } from '../style'

const EmailForm = ({ route }) => {
  const [email, setEmail] = useState(route.params.info)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>What's your email?</Text>

        <View style={styles.box}>
          <Text style={styles.boxTitle}>Your email address</Text>
          <TextInput
            placeholder='name@email.com'
            value={email}
            onChangeText={setEmail}
            style={styles.boxText}
          />
        </View>

        <View style={styles.updateButton}>
          <UpdateButton email={email} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default EmailForm
