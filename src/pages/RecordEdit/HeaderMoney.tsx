import React from "react"
import {StyleSheet, View, Text} from "react-native"
import colorConfig from '../../constants/color'

const styles = StyleSheet.create({
  container: {
    paddingTop: 34,
    paddingBottom: 34,
    paddingLeft: 20,
    paddingRight: 20
  }
})
type Props = {}
const Report: React.FunctionComponent<Props> = () => {
  return (
    <View style={styles.container}>
      <View style={colorConfig.flexBetween}>
        <View>
          <Text style={{color: colorConfig.title, fontSize: colorConfig.baseFontSize}}>账单金额</Text>
        </View>
        <View>
          <Text style={{fontSize: 30, color: colorConfig.deepGreen}}>¥39</Text>
        </View>
      </View>
    </View>
  )
}

export default Report;


