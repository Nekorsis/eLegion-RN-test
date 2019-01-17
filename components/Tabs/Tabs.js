import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Tabs extends React.Component {
  render() {
    const { activeTabId, selectTab } = this.props;
    return (
      <View style={styles.tabsContainer}>
        <TouchableOpacity onPress={() => selectTab(0)}>
          <Text style={[styles.tabText, activeTabId !== 0 ? styles.inactiveTab : styles.activeTab]}>Личный данные</Text>
          {activeTabId === 0 && <View style={styles.tabTextBorder} />}
        </TouchableOpacity >
        <TouchableOpacity onPress={() => selectTab(1)}>
          <Text style={[styles.tabText, activeTabId !== 1 ? styles.inactiveTab : styles.activeTab]}>Автомобили</Text>
          {activeTabId === 1 && <View style={styles.tabTextBorder} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => selectTab(2)}>
          <Text style={[styles.tabText, activeTabId !== 2 ? styles.inactiveTab : styles.activeTab]}>Прицепы</Text>
          {activeTabId === 2 && <View style={styles.tabTextBorder} />}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  tabText: {
    color: '#8D9B9D'
  },
  activeTab: {
    paddingBottom: 10,
  },
  inactiveTab: {
    paddingBottom: 15,
  },
  tabTextBorder: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0548A1',
    backgroundColor: '#0548A1',
  }
});
