import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import Colors from '../../../utils/colors'
import styles from './style'
export interface LoaderProps {
  }
const Loader: React.FC<LoaderProps> = (props: LoaderProps) =>  {
  return (
    <View style={styles.mainCon} >
      <ActivityIndicator   size="large" color={Colors.PrimaryColor}  />
    </View>
  )
}

export default Loader