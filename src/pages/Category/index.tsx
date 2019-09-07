import React from "react";
import {Text} from 'react-native'
import CategoryContent from './CategoryContent'
import HeaderTab from '../../components/HeaderTab'
import Button from '../../components/Button'
import colorConfig from '../../shared/color'

const tabList = [
  {
    label: '支出分类',
    value: 0,
  },
  {
    label: '收入分类',
    value: 1,
  }
]

function RecordEdit(props) {
  console.log(props)
  // 获取参数
  // console.log(props.navigation.getParam('name'))
  const {navigation} = props

  function handleBack() {
    console.log('handleBack')
  }

  return (
    <CategoryContent handleBack={handleBack} navigation={navigation} />
  );

}

RecordEdit.navigationOptions = {
  header: (props) => {

    function back() {
      const {navigation} = props
      navigation.navigate('Setting')
    }

    function sortItem() {
      console.log('sort')
    }

    return (
      <HeaderTab handleBack={back} tabList={tabList}>
        <Button
          onPress={sortItem}
          style={{
            borderWidth: 1, borderColor: colorConfig.tabColor, padding: 6, marginRight: 20
          }}
        >
          <Text style={{color: colorConfig.title, fontSize: colorConfig.baseFontSize}}>排序</Text>
        </Button>
      </HeaderTab>)
  }
}

export default RecordEdit
