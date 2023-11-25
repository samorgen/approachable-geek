import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#348feb', fontWeight: 'bold', fontSize: 30 }}>
        Edit Profile
      </Text>
      <Image
        source={require('./assets/profile.jpg')}
        style={{
          height: 150,
          width: 150,
          borderRadius: 150 / 2,
          overflow: 'hidden',
          borderWidth: 3,
          borderColor: '#348feb'
        }}
      />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
