import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Button from './Button';
import colorConfig from '../constants/color';
import Icon from '../iconfont/Icon';
const styles = StyleSheet.create({
  container: {
    paddingBottom: 12,
    paddingTop: 12,
    ...colorConfig.flexBetween,
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
    minWidth: 80,
  },
});

type Props = {
  handleBack: () => void;
  tabList: any[];
};
const HeaderTab: React.FunctionComponent<Props> = ({
  handleBack,
  tabList,
  children,
}) => {
  const [activeTab, setActiveTab] = useState<string>(tabList[0].value);

  function handleTab(value: string) {
    setActiveTab(value);
  }

  function buttonStyle(value: string) {
    const result = Object.assign({}, styles.item);
    if (value === activeTab) {
      result.backgroundColor = colorConfig.tabColor;
    }
    return result;
  }
  return (
    <View style={styles.container}>
      <Button onPress={handleBack}>
        <Icon name="close" size={50}></Icon>
      </Button>

      <View style={styles.main}>
        {tabList.map(item => (
          <Button
            style={buttonStyle(item.value)}
            key={item.value}
            onPress={() => handleTab(item.value)}>
            <Text
              style={{
                fontSize: 16,
                textAlign: 'center',
                color:
                  item.value === activeTab
                    ? colorConfig.white
                    : colorConfig.title,
              }}>
              {item.label}
            </Text>
          </Button>
        ))}
      </View>
      <View>{children}</View>
    </View>
  );
};

export default HeaderTab;
