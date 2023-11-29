import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import Avatar from './screens/Avatar'
import NameForm from './screens/NameForm'
import PhoneForm from './screens/PhoneForm'
import EmailForm from './screens/EmailForm'
import BioForm from './screens/BioForm'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Profile'>
        <Stack.Screen name='Profile' component={HomeScreen} />
        <Stack.Screen name='Edit Avatar' component={Avatar} />
        <Stack.Screen name='Edit Name' component={NameForm} />
        <Stack.Screen name='Edit Phone' component={PhoneForm} />
        <Stack.Screen name='Edit Email' component={EmailForm} />
        <Stack.Screen name='Edit Bio' component={BioForm} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
