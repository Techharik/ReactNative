import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import React from 'react'

const AppPro = () => {
  return (
    <View>
      <Text style={styles.headText}>AppPro</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headText:{
        fontSize:24,
        
    }
})

export default AppPro