import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import _ from 'lodash'
import colorConfig from '../shared/color'
import {showNum} from '../utils'

const styles = StyleSheet.create({
    container: colorConfig.flexBetween,
    main: {
        flex: 1,
        ...colorConfig.flexBetween,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingTop: 25,
        paddingBottom: 25,
        paddingRight: 20
    },
    content: {
        flex: 1
    },
    icon: {
        width: 50,
        height: 50,
        backgroundColor: '#eee'
    },
    type: {
        color: colorConfig.title,
        fontSize: 16,
        paddingBottom: 10
    },
    desc: {
        color: colorConfig.subTitle,
        fontSize: 16
    },
    moneyNum: {
        color: colorConfig.deepGreen,
        fontSize: 16
    }
})

function CheckItem(props) {
    const item = _.get(props, 'data.item', {})
    return (
      <View style={styles.container}>
        <View style={{paddingRight: 20}}>
          <View style={styles.icon}>
            <Text>icon</Text>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.content}>
            <Text style={styles.type}>{item.typeId}</Text>
            {item.desc && (<Text style={styles.desc}>{item.desc}</Text>)}
          </View>
          <View style={styles.money}>
            <Text style={styles.moneyNum}>{showNum(item.money)}</Text>
          </View>
        </View>
      </View>
    )
}

export default CheckItem
