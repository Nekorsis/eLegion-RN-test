import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AddCar extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <View>
          <Text>Фото</Text>
          <Text>Добавить фото</Text>
        </View>
        <View>
          <Text>Фамилия</Text>
          <Text>Имя</Text>
          <Text>E-mail</Text>
          <Text>Телефон</Text>
        </View>
        <View>
          <Text>Паспорт</Text>
          <Text>Добавить фото</Text>
        </View>
        <View>
          <Text>Водительское удостоверение</Text>
          <Text>Добавить фото</Text>
        </View>
        <View>
          <Text>Права доступа</Text>
          <Text>Изменение личных данных компании</Text>
          <Text>Работа с запросами на партнёрство</Text>
        </View>
        <View>
          <Text>Управление перевозками</Text>
          <Text>Только своими</Text>
          <Text>Всеми заявками</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
