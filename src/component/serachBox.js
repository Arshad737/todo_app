import * as React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from './Input';
import { COLOR_PRIMARY } from '../styles/common';

export const SearchBox = ({ handleChange, search, value }) => {
  const handleSearchPress = () => {
    search();
  };
  const handleValueChange = e => {
    const value = e.nativeEvent.text;
    handleChange(value);
  };
  return (
    <View style={style.container}>
      <View style={style.subContainer}>
        <Input
          placeholder='Enter Todos Id, Title or Body'
          value={value}
          onChange={handleValueChange}
        />
      </View>
      <TouchableOpacity style={style.searchIcon} onPress={handleSearchPress}>
        <Icon name='search' size={25} color={COLOR_PRIMARY} />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: { flexDirection: 'row', marginHorizontal: 10, marginBottom: 10 },
  subContainer: { flex: 0.8, width: '80%' },
  searchIcon: { flex: 0.15, alignItems: 'flex-end', justifyContent: 'center' }
});
