import React from "react"
import {StyleSheet, View, Text, ScrollView} from "react-native"
import CommonHeader from '../../components/CommonHeader'
import BarChart from "./BarChart"
import CheckList from '../../components/CheckList'
import colorConfig from '../../constants/color'

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colorConfig.white
    
  },
  chart: {
    paddingLeft: 20,
    paddingRight: 20
  },
  dateWrapper: {
    ...colorConfig.flexBetween,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50
  },
  dateTitle: {
    fontSize: colorConfig.baseFontSize,
    color: colorConfig.title,
    fontWeight: '700'
  },
})
type Props = {}
const Check: React.FunctionComponent<Props> = () => {
  return (
    <View style={styles.container}>
      <CommonHeader/>
      <ScrollView
        automaticallyAdjustContentInsets={false}
        horizontal={false}
        style={styles.scroll}
      >
        <BarChart/>
        <View style={styles.dateWrapper}>
          <View>
            <Text style={styles.dateTitle}>
              账单明细
            </Text>
          </View>
          <View>
            <Text>按时间</Text>
          </View>
        </View>
        
        <CheckList/>
      </ScrollView>
    
    </View>
  )
}


export default Check;
