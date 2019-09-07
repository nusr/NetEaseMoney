import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ReportItem from './ReportItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 20,
    paddingLeft: 20
  }
})


export default function ReportList(props) {
  const {
    data = [
      {
        money: 12323,
        count: 12,
        percent: 12,
        typeId: 'tes12',
        id: '73238',
      },
      {
        money: 12323,
        count: 12,
        percent: 12,
        typeId: 'test',
        id: '738',
      }
    ]
  } = props
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id || index}
        renderItem={({item}) => (<ReportItem data={item} />)}
      />
    </View>
  );

}

