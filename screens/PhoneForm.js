import { useState, useEffect } from 'react'
import { Text, View, Image, Pressable, TextInput } from 'react-native'
import UpdateButton from '../components/UpdateButton'
import { styles } from '../style'

const PhoneForm = ({ route }) => {
  const [phone, setPhone] = useState(route.params.info)

  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>What's your phone number?</Text>

      <View style={styles.box}>
        <Text style={styles.boxTitle}>Your phone number</Text>
        <TextInput
          placeholder='###-###-####'
          value={phone}
          onChangeText={setPhone}
          style={styles.boxText}
        />
      </View>

      <View style={styles.updateButton}>
        <UpdateButton phone={phone} />
      </View>
    </View>
  )
}

export default PhoneForm
