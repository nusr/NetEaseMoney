import React, {Component} from 'react'
import {View, ScrollView, RefreshControl, Text, TouchableOpacity} from 'react-native'
import HomeHeader from './HomeHeader'
import CheckList from '../../components/CheckList'
import colorConfig from '../../shared/color'
import styles from './styles'

class Home extends Component {
  state = {
    loading: false
  }

  handleRefresh = () => {
    console.log('onRefresh')
    this.setState({
      loading: true,

    })
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 3000)
  };

  handleDvaClick = () => {
    const {dispatch, category} = this.props
    dispatch({
      type: 'category/editCategory',
      payload: category.count + 1
    })
  }

  handleNavigation(path) {
    const {navigation} = this.props
    // 传递参数
    navigation.navigate(path, {
      name: 'steve xu'
    })
  }

  render() {
    console.log(this.props)
    const {loading} = this.state
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
              onRefresh={this.handleRefresh}
              title="正在刷新数据"
              colors={['#2a2a50']}
              titleColor={colorConfig.white}
            />
          }
        >
          <View style={styles.header}>
            <HomeHeader />
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                onPress={() => this.handleNavigation('RecordEdit')}
                activeOpacity={colorConfig.touchOpacity}
                style={styles.record}
              >
                <Text style={{fontSize:colorConfig.baseFontSize,color:colorConfig.white}}>
                      edit
                </Text>
                <Text style={styles.recordTitle}>
                                    记一笔
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.assets}
                activeOpacity={colorConfig.touchOpacity}
                onPress={() => this.handleNavigation('AddAsset')}
              >
                <Text style={styles.assetsTitle}>添加资产</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.dateWrapper}>
            <Text style={styles.dateTitle}>
                            近三日新增账单
            </Text>
          </View>
          <CheckList />
        </ScrollView>
      </View>
    )
  }
}

export default Home
