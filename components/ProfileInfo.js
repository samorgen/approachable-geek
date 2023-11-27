import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  TextInput,
  Pressable
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { IconButton } from 'react-native-paper'

const ProfileInfo = ({
  infoTitle,
  infoValue,
  enableMultiLine,
  numOfLines,
  viewDestination
}) => {
  const navigation = useNavigation()

  return (
    <View style={{ width: '75%', marginTop: 20 }}>
      <View
        style={{
          borderBottomColor: '#000000',
          borderBottomWidth: 1
        }}
      >
        <Text
          style={
            enableMultiLine
              ? { marginBottom: 0, color: 'gray' }
              : { marginBottom: -10, color: 'gray' }
          }
        >
          {infoTitle}
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate(viewDestination, { info: infoValue })
          }
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <TextInput
              multiline={enableMultiLine}
              numberOfLines={numOfLines}
              maxLength={40}
              value={infoValue}
              style={{ fontWeight: 'bold', maxWidth: '75%' }}
              pointerEvents='none'
            />

            <IconButton icon='chevron-right' />
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default ProfileInfo
