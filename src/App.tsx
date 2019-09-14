import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Root from './routes';
import AsyncStorage from '@react-native-community/async-storage';
import {APP_VERSION} from './constants/storageKeys';
import packageConfig from '../package.json';
import { initStore } from './store'
type Props = {};
const App: React.FunctionComponent<Props> = () => {
  const [initOver, setInitOver] = useState<boolean>(false);
  useEffect(() => {
    async function init() {
      const oldVersion: string =
        (await AsyncStorage.getItem(APP_VERSION)) || packageConfig.version;
      // 版本更新或者开启清除存储 都清空本地存储
      if (oldVersion !== packageConfig.version) {
        await AsyncStorage.clear();
      } else {
        await AsyncStorage.setItem(APP_VERSION, packageConfig.version);
      }
    }
    // 发生错误 也可以渲染
    try {
      init();
    } catch (error) {
      console.error(error);
    } finally {
      setInitOver(true);
      initStore()
    }
  }, []);
  if (!initOver) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  console.log('initOver');
  return <Root />;
};
export default App;
