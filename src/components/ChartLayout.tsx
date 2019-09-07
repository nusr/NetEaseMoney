import React from 'react'
import {View, StyleSheet} from "react-native"
import colorConfig from "../constants/color";

const tiger = {
  backgroundColor: colorConfig.checkHeader,
  width: 20,
  position: 'absolute',
  height: 50
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    position: 'relative'
  },
  left: {
    ...tiger,
    left: 0
  },
  right: {
    ...tiger,
    right: 0
  },
  main: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    paddingLeft: 20,
    paddingRight: 20
  }
})
type Props = {}
const ChartLayout: React.FunctionComponent<Props> = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}/>
      <View style={styles.right}/>
      <View style={styles.main}>
        {children}
      </View>
    
    </View>
  
  )
  
}
export default ChartLayout
