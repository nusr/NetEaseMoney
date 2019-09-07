import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import CheckItem from './CheckItem'
import colorConfig from '../shared/color'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20
  },
  sectionHeader: {
    fontSize: 12,
    color: colorConfig.subTitle,
    paddingTop: 14

  },
})


function CheckList() {
  const data = [
    {
      createTime: '2019-4-14', key: '2019-4-14', data: [{
        money: 123,
        desc: 'test42',
        typeId: '4343',
        id: '3434',
      }, {
        money: 123,
        desc: 'test1',
        typeId: '4343',
        id: '12',
      }]
    },
    {
      createTime: '2019-4-15', key: '2019-4-15', data: [{
        money: 123,
        typeId: '4343',
        id: '56',

      }, {
        money: 12323,
        desc: 'test32',
        typeId: '4343',
        id: '7328',
      }, {
        money: 12323,
        desc: 'test32',
        typeId: '4343',
        id: '728',
      }, {
        money: 12323,
        desc: 'test32',
        typeId: '4343',
        id: '73238',
      }]
    },
  ]
  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        renderItem={((item) => <CheckItem data={item} />)}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.createTime}</Text>}
        keyExtractor={(item, index) => item.id || index}
      />
    </View>
  );
}

export default CheckList
