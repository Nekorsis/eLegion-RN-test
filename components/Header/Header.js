import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image source={require('./../../assets/baseline_menu.png')} />
        </TouchableOpacity>
        <Text style={styles.headerScreenName}>Личный кабинет</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    height: 40,
    marginTop: StatusBar.currentHeight,
  },
  headerScreenName: {
    marginLeft: 10,
    color: '#485052',
  }
});
