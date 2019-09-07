import React from "react"
import {StyleSheet, View, Text} from "react-native"
import colorConfig from '../../constants/color'

const styles = StyleSheet.create({
  container: {
    padding: 20,
    zIndex: 4,
    backgroundColor: colorConfig.checkHeader,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  more: {
    right: 0,
    position: 'absolute'
  },
  main: {
    paddingTop: 20,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  scroll: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  filter: {
    display: 'flex',
    flexDirection: 'row'
  }
})

export default function CheckHeader(props) {
  const {noScroll = false} = props
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <View>
          <Text style={{color: colorConfig.white, fontSize: colorConfig.baseFontSize}}>账单</Text>
        </View>
        <View style={styles.more}>
          <Text style={{color: colorConfig.white}}>icon</Text>

        </View>
      </View>
      <View style={styles.main}>
        <View><Text style={{color: colorConfig.white}}>2019</Text></View>
        <View style={styles.scroll}>
          {!noScroll && (<Text style={{color: '#8c80ac'}}>月份</Text>)}

        </View>
        <View style={styles.filter}>
          <Text style={{color: colorConfig.white}}>筛选</Text>
          <Text style={{
            fontSize:16,
            color: colorConfig.white
          }}>filter</Text>
        </View>
      </View>
    </View>
  )
}



