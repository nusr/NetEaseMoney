import React from "react"
import {StyleSheet, View, ScrollView} from "react-native"
import PieChart from './PieChart'
import CommonHeader from '../../components/CommonHeader'
import ReportList from '../../components/ReportList'

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
  list: {
    paddingTop: 40
  },
})
type Props = {}

const Report: React.FunctionComponent<Props> = () => {
  return (
    <View style={styles.container}>
      <CommonHeader noScroll/>
      <ScrollView
        automaticallyAdjustContentInsets={false}
        horizontal={false}
        style={styles.scroll}
      >
        <PieChart/>
        <View style={styles.list}>
          <ReportList/>
        </View>
      </ScrollView>
    
    </View>
  )
}


export default Report;

