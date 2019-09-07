import React from "react";
import RecordContent from './RecordContent'
import HeaderTab from '../../components/HeaderTab'

const tabList = [
  {
    label: '流入',
    value: 0,
  },
  {
    label: '流出',
    value: 1,
  }, {
    label: '内部转账',
    value: 2,
  },
]

function RecordEdit(props) {
  console.log(props)
  // 获取参数
  // console.log(props.navigation.getParam('name'))

  function handleBack() {
    console.log('handleBack')
  }

  return (
    <RecordContent handleBack={handleBack} />
  );

}

RecordEdit.navigationOptions = {
  header: (props) => {
    console.log(props)

    function back() {
      const {navigation} = props
      navigation.navigate('Home')
      console.log('navigationOptions')
    }

    return (<HeaderTab handleBack={back} tabList={tabList} />)
  }
}

export default RecordEdit
