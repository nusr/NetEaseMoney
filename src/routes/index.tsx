import { createAppContainer} from "react-navigation"
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react'
import { Text } from 'react-native'
import colorConfig from '../shared/color'
import Home from "../pages/Home"
import Check from "../pages/Check"
import Report from "../pages/Report"
import User from "../pages/User"
import RecordEdit from '../pages/RecordEdit'
import AddAsset from '../pages/AddAsset'
import Setting from '../pages/Setting'
import Category from '../pages/Category'
import CategoryEdit from '../pages/CategoryEdit'
// TODO: 配置状态栏

const BottomTab = createBottomTabNavigator(
  {

    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
        title: '首页'
      }
    },


    Check: {
      screen: Check,
      navigationOptions: {
        title: '账单',
        header: null
      }
    },
    Report: {
      screen: Report,
      navigationOptions: {
        title: '报表',
        header: null
      }
    },

    User: {
      screen: User,
      navigationOptions: {
        title: '我',
        header: null
      }
    },

  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: (config) => {
        const {tintColor} = config
        const {routeName} = navigation.state;
        let iconName
        if (routeName === 'Home') {
          iconName = `record`;
        } else if (routeName === 'User') {
          iconName = `user-alt`;
        } else if (routeName === 'Report') {
          iconName = `pie-chart`;
        } else {
          iconName = 'list-alt'
        }

        // You can return any component that you like here!
        return <Text style={{fontSize:25,color:tintColor}}>{iconName}</Text>
      },
    }),
    tabBarOptions: {
      activeTintColor: colorConfig.primaryColor,
      inactiveTintColor: colorConfig.subTitle
    },
  }
)
const getStaticNav = ({title}) => {
  return {
    title,
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center',
      fontWeight: '500',
      fontSize: 16
    },
  }
}
const Root = createStackNavigator(
  {
    BottomTab: {
      screen: BottomTab,
      navigationOptions: {
        header: null
      }
    },
    RecordEdit: {
      screen: RecordEdit,
    },

    CategoryEdit:{
      screen: CategoryEdit,
      navigationOptions: getStaticNav({
        title: '设置'
      })
    },
    Category: {
      screen: Category
    },


    Setting: {
      screen: Setting,
      navigationOptions: getStaticNav({
        title: '设置'
      })
    },


    AddAsset: {
      screen: AddAsset,
    },


  }
);

export default createAppContainer(Root)
