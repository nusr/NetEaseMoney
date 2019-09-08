import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from '../../iconfont/Icon'
import HomeHeader from './HomeHeader';
import CheckList from '../../components/CheckList';
import colorConfig from '../../constants/color';
import styles from './styles';

type Props = {
  navigation: any;
};
const Home: React.FunctionComponent<Props> = ({navigation}) => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  function handleRefresh() {
    console.log('onRefresh');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  function handleNavigation(path: string) {
    // 传递参数
    navigation.navigate(path, {
      name: 'steve xu',
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView
        automaticallyAdjustContentInsets={false}
        horizontal={false}
        style={styles.scroll}
        refreshControl={
          <RefreshControl
            enabled
            refreshing={loading}
            onRefresh={handleRefresh}
            title="正在刷新数据"
            colors={['#2a2a50']}
            titleColor={colorConfig.white}
          />
        }>
        <View style={styles.header}>
          <HomeHeader />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              onPress={() => handleNavigation('RecordEdit')}
              activeOpacity={colorConfig.touchOpacity}
              style={styles.record}>
              <Icon name="edit" color={colorConfig.white}></Icon>
              <Text style={styles.recordTitle}>记一笔</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.assets}
              activeOpacity={colorConfig.touchOpacity}
              onPress={() => handleNavigation('AddAsset')}>
              <Text style={styles.assetsTitle}>添加资产</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.dateWrapper}>
          <Text style={styles.dateTitle}>近三日新增账单</Text>
        </View>
        <CheckList />
      </ScrollView>
    </View>
  );
};

export default Home;
