import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ReportItem from './ReportItem'
import { ReportItemType } from '../type'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 20,
    paddingLeft: 20
  }
})
type Props = {
  data: ReportItemType[];
}

const ReportList: React.FunctionComponent<Props> = (props: Props) => {
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
        renderItem={({item}) => (<ReportItem data={item}/>)}
      />
    </View>
  );
  
}

export default ReportList;
