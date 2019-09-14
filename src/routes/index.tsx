import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Icon, {IconNames} from '../iconfont/Icon';
import colorConfig from '../constants/color';
import Home from '../pages/Home';
import Check from '../pages/Check';
import Report from '../pages/Report';
import User from '../pages/User';
import RecordEdit from '../pages/RecordEdit';
import AddAsset from '../pages/AddAsset';
import Setting from '../pages/Setting';
import Category from '../pages/Category';
import CategoryEdit from '../pages/CategoryEdit';
// TODO: 配置状态栏
const headerTitleStyle = {
  flex: 1,
  textAlign: 'center',
  fontWeight: '500',
  fontSize: 16,
};
const iconMap: {
  [key: string]: IconNames;
} = {
  Home: 'record',
  User: 'user',
  Report: 'pie-chart',
  default: 'list',
};
const BottomTab = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
        title: '首页',
      },
    },

    Check: {
      screen: Check,
      navigationOptions: {
        title: '账单',
        header: null,
      },
    },
    Report: {
      screen: Report,
      navigationOptions: {
        title: '报表',
        header: null,
      },
    },

    User: {
      screen: User,
      navigationOptions: {
        title: '我',
        header: null,
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: config => {
        const {tintColor} = config;
        const {routeName} = navigation.state;

        const iconName: IconNames = iconMap[routeName] || iconMap.default;

        return <Icon size={25} color={tintColor} name={iconName} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: colorConfig.primaryColor,
      inactiveTintColor: colorConfig.subTitle,
    },
  },
);
const Root = createStackNavigator({
  RecordEdit: {
    screen: RecordEdit,
  },
  BottomTab: {
    screen: BottomTab,
    navigationOptions: {
      header: null,
    },
  },

  CategoryEdit: {
    screen: CategoryEdit,
    navigationOptions() {
      return {
        title: '设置',
        headerTitleStyle,
      };
    },
  },
  Category: {
    screen: Category,
  },

  Setting: {
    screen: Setting,
    navigationOptions() {
      return {
        title: '设置',
        headerTitleStyle,
      };
    },
  },
  AddAsset: {
    screen: AddAsset,
  },
});

export default createAppContainer(Root);
