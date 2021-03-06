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
type Props = {}
const RecordEdit: React.FunctionComponent<Props> = () => {
  // console.log(props.navigation.getParam('name'))
  return (
    <RecordContent/>
  );
  
}

RecordEdit.navigationOptions = {
  header: (props: { navigation: any }) => {
    function back() {
      const {navigation} = props
      navigation.goBack()
    }
    
    return (<HeaderTab handleBack={back} tabList={tabList}/>)
  }
}

export default RecordEdit
