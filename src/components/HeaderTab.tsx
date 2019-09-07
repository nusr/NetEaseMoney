import React, {useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  
} from "react-native";
import Button from './Button'
import colorConfig from '../constants/color'

const styles = StyleSheet.create({
  container: {
    ...colorConfig.flexBetween,
    paddingBottom: 12,
    paddingTop: 12
  },
  main: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: colorConfig.tabColor,
    borderRadius: 10,
  },
  item: {
    padding: 14,
    backgroundColor: colorConfig.white,
    minWidth: 80
  }
});

type Props = {
  handleBack: Function;
  tabList: any[];
}
const HeaderTab: React.FunctionComponent<Props> = ({handleBack, tabList, children}) => {
  const [activeTab, setActiveTab] = useState<string>(tabList[0].value)
  
  function handleTab(value: string) {
    setActiveTab(value)
  }
  
  function buttonStyle(value: string) {
    const result = Object.assign({}, styles.item)
    if (value === activeTab) {
      result.backgroundColor = colorConfig.tabColor
    }
    return result;
  }
  
  function textStyle(value: string) {
    const common = {
      fontSize: 16,
      textAlign: 'center'
    }
    if (value === activeTab) {
      return {
        ...common,
        color: colorConfig.white
      }
    }
    return {
      ...common,
      color: colorConfig.title
    }
    
  }
  
  return (
    <View style={styles.container}>
      <Button onPress={handleBack}>
        <Text style={{fontSize: 50}}>X</Text>
      </Button>
      
      <View style={styles.main}>
        
        {
          tabList.map(item => (
            <Button style={buttonStyle(item.value)} key={item.value} onPress={() => handleTab(item.value)}>
              <Text style={textStyle(item.value)}>
                {item.label}
              </Text>
            </Button>))
        }
      </View>
      <View>
        {children}
      </View>
    </View>
  )
}


export default HeaderTab
