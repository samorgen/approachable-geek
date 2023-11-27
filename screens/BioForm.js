import { useState, useEffect } from 'react'
import { Text, View, Image, Pressable, TextInput } from 'react-native'
import UpdateButton from '../components/UpdateButton'
import { styles } from '../style'

const BioForm = ({ route }) => {
  const [bio, setBio] = useState(route.params.info)

  return (
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
  )
}

export default BioForm
