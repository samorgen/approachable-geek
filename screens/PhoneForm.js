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

const PhoneForm = ({ route }) => {
  const [phone, setPhone] = useState(route.params.info)

  //Format phone number
  const onTextChange = (text) => {
    let cleaned = ('' + text).replace(/\D/g, '')
    let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)

    if (match) {
      let intlCode = match[1] ? '+1 ' : '',
        number = [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join(
          ''
        )
      setPhone(number)

      return
    }

    setPhone(text)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>What's your phone number?</Text>

        <View style={styles.box}>
          <Text style={styles.boxTitle}>Your phone number</Text>
          <TextInput
            placeholder='(###)###-####'
            value={phone}
            onChangeText={onTextChange}
            style={styles.boxText}
            keyboardType='phone-pad'
            textContentType='telephoneNumber'
            dataDetectorTypes='phoneNumber'
            maxLength={14}
          />
        </View>

        <View style={styles.updateButton}>
          <UpdateButton phone={phone} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default PhoneForm
