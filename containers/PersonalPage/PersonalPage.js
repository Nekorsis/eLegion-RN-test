import React from 'react';
import { StyleSheet, View, FlatList, Text, Dimensions, StatusBar, Animated } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import Header from './../../components/Header/Header';
import Tabs from './../../components/Tabs/Tabs';
import CarInfo from './../../components/CarInfo/CarInfo';
import PersonalData from './../../components/PersonalData/PersonalData';
import Trailer from './../../components/Trailer/Trailer';
import UpdateCarInfo from './../../components/UpdateCarInfo/UpdateCarInfo';

const { height, width } = Dimensions.get('window');
const TopBarHeight = 37 + 40 + StatusBar.currentHeight;

export default class PersonalPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeTabId: 1,
      topAnim: new Animated.Value(height - TopBarHeight),
    }
  }

  static navigationOptions = {
    header: null,
  };

  selectTab = (id) => {
    this.setState({activeTabId: id})
  }

  onCarClick = () => {
    Animated.timing(                  
      this.state.topAnim,            
      {
        toValue: 0,                   
        duration: 350,              
      }
    ).start();                        
  }

  renderContents = () => {
    const { activeTabId } = this.state;
    if (activeTabId === 0) {
      return <PersonalData />
    } else if (activeTabId === 1) {
      return <FlatList
        data={[
          {key: 'item1'},
          {key: 'item2'},
          {key: 'item3'},
          {key: 'item4'},
          {key: 'item5'},
          {key: 'item6'},
          {key: 'item7'},
        ]}
        renderItem={() => <CarInfo onCarClick={this.onCarClick}/>}
    />
    } else {
      return <Trailer />
    }
  }

  onSwipeDown = () => {
    Animated.timing(                  
      this.state.topAnim,            
      {
        toValue: height - TopBarHeight,   
        duration: 350,              
      }
    ).start();                        
  }

  render() {
    const { activeTabId, topAnim } = this.state;
    return (
      <View style={styles.container}>
        <Header />
        <Tabs activeTabId={activeTabId} selectTab={this.selectTab}/>
        <View>
          {this.renderContents()}
          <Animated.View
            style={{ position: 'absolute', top: topAnim, width: width, height: height - TopBarHeight}}
          >
            <GestureRecognizer
              style={{flex: 1}}
              onSwipeDown={(state) => this.onSwipeDown(state)}
            >
              <UpdateCarInfo />
            </GestureRecognizer>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});