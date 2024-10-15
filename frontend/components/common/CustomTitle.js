import React from 'react'
import { StyleSheet, Text } from 'react-native'

function CustomTitle({text ,align='center'}) {
  let width
  (align==='left')?width='70%':null
  const styles=StyleSheet.create({
    title: {
        fontSize: 28,
        textAlign: align,
        fontWeight: 'bold',
        marginBottom: 30,
        width:width
      },
})
  return (
    <Text style={styles.title}>{text}</Text>
  )
}

export default CustomTitle
