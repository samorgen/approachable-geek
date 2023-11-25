import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import Avatar from './screens/Avatar'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Profile'>
        <Stack.Screen name='Profile' component={HomeScreen} />
        <Stack.Screen name='Edit Avatar' component={Avatar} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
