import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class CarInfo extends React.Component {
  render() {
    const { onCarClick } = this.props;
    return (
      <TouchableOpacity style={styles.carInfoContainer} onPress={() => { onCarClick(); }}>
        <Image style={styles.carInfoImage} source={require('./../../assets/truck.jpg')} />
        <View style={styles.carInfoTextContainer}>
          <Text style={styles.carInfoText}>Car name</Text>
          <Text style={styles.carInfoText}>Car info</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  carInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 90,
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  carInfoTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    paddingLeft: 10,
  },
  carInfoText: {
    color: '#A6AAAD',
  },
  carInfoImage: {
    width: 89,
    height: 89,
    borderTopLeftRadius: 5, 
    borderBottomLeftRadius: 5,
  }
});
