import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colorConfig from '../constants/color'
import {showNum} from '../utils'

const styles = StyleSheet.create({
  container: colorConfig.flexBetween,
  content: {
    flex: 1,
  },
  icon: {
    backgroundColor: '#eee',
    width: 50,
    height: 50
  },
  type: {
    color: colorConfig.title,
    fontSize: 16,
  },
  money: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  moneyNum: {
    color: colorConfig.deepGreen,
    fontSize: 16
  },
  countNum: {
    color: colorConfig.subTitle,
    fontSize: 16
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingBottom: 30,
    paddingTop: 30,
  },
  more: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    backgroundColor: "#f2f2f2",
    height: 10,
    borderRadius: 5,
  }
})
type  Props = {
  data: any;
}
const ListItem: React.FunctionComponent<Props> = ({data = {}}) => {
  return (
    <View style={styles.container}>
      <View style={{paddingRight: 20}}>
        <View style={styles.icon}>
          <Text>icon</Text>
        </View>
      </View>
      
      <View style={styles.main}>
        <View style={styles.content}>
          <View style={{paddingBottom: 10}}>
            <Text style={styles.type}>{data.typeId} {data.percent}%</Text>
          </View>
          <View style={styles.bottom}>
            <View style={{backgroundColor: colorConfig.primaryColor, width: 40, flex: 1, borderRadius: 5,}}/>
          </View>
        </View>
        <View style={styles.more}>
          <View style={styles.money}>
            <Text style={styles.moneyNum}>{showNum(data.money)}</Text>
            <Text style={styles.countNum}>{data.count}笔</Text>
          </View>
          <View>
            <Text style={{
              color: '#d0d0d0',
              fontSize: 16
            }}>></Text>
          </View>
        </View>
      </View>
    
    </View>
  )
}

export default ListItem
