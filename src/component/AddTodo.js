import * as React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { Input } from './Input';
import { COLOR_PRIMARY } from '../styles/common';

export const AddTodo = ({
  valueTitle,
  valueBody,
  handleBody,
  handleTitle,
  onBlur,
  handleAdd
}) => {
  const handleBodyChange = e => {
    const value = e.nativeEvent.text;
    handleBody(value);
  };

  const handleTitleChange = e => {
    const value = e.nativeEvent.text;
    handleTitle(value);
  };

  return (
    <Card containerStyle={style.card}>
      <Input
        placeholder='Title'
        onChange={handleTitleChange}
        value={valueTitle}
        onBlur={onBlur}
      />
      <Input
        placeholder='Body'
        onChange={handleBodyChange}
        value={valueBody}
        onBlur={onBlur}
      />
      <View style={style.icon}>
        <TouchableOpacity onPress={handleAdd}>
          <Icon name='ios-add-circle' size={50} color={COLOR_PRIMARY} />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const style = StyleSheet.create({
  card: { borderRadius: 10, width: '85%', alignSelf: 'center' },
  icon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8
  }
});
