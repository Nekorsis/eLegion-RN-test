import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class UpdateCarInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      secondName: '',
      nickName: '',
      email: '',
    }
  }

  nameInputHandler = (t) => {
    this.setState({name: t});
  }

  secondNameInputHandler = (t) => {
    this.setState({secondName: t});
  }

  nickNameInputHandler = (t) => {
    this.setState({nickName: t});
  }

  emailInputHandler = (t) => {
    this.setState({email: t});
  }

  render() {
    return (
      <View style={styles.updateCarInfoContainer}>
        <View style={styles.updatePhotoContainer}>
          <View>
            <Image style={styles.updatePhotoImg} source={require('./../../assets/truck.jpg')} />
          </View>
          <Text style={styles.updatePhotoText}>Добавить новое фото</Text>
        </View>
        <View style={styles.inputsContainer}>
          <View style={styles.updateNameContainer}>
            <Text style={styles.inputLabel}>Имя</Text>
            <TextInput placeholderTextColor={'#000000'} placeholder="Имя" onChangeText={(text) => { this.nameInputHandler(text) }}/>
          </View>
          <View style={styles.updateSecondNameContainer}>
            <Text style={styles.inputLabel}>Фамилия</Text>
            <TextInput placeholderTextColor={'#000000'} placeholder="Фамилия" onChangeText={(text) => { this.secondNameInputHandler(text) }}/>
          </View>
          <View style={styles.updateNickNameContainer}>
            <Text style={styles.inputLabel}>Ник</Text>
            <TextInput placeholderTextColor={'#000000'} placeholder="Ник" onChangeText={(text) => { this.nickNameInputHandler(text) }}/>
          </View>
          <View style={styles.updateMailContainer}>
            <Text style={styles.inputLabel}>Почтa</Text>
            <TextInput placeholderTextColor={'#000000'} placeholder="Почтa" onChangeText={(text) => { this.emailInputHandler(text) }}/>
          </View>
          <View styles={styles.footerWarningContainer}>
            <Text>Что-то там про подтверждение почты</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  updateCarInfoContainer: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  inputsContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  updatePhotoContainer: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#D8DCDF',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  updatePhotoImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  updatePhotoText: {
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: 15,
  },
  updateNameContainer: {
    marginTop: 10,
  },
  updateSecondNameContainer: {
    marginTop: 10,
  },
  updateNickNameContainer: {
    marginTop: 10,
  },
  updateMailContainer: {
    marginTop: 10,
  },
  inputLabel: {
    color: '#A6AAAD',
    fontSize: 11,
  },
});
