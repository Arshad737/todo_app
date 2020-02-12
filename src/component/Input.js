import * as React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { COLOR_PRIMARY } from '../styles/common';

export const Input = ({ placeholder, onChange, value, onBlur }) => (
  <TextInput
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    underlineColorAndroid={COLOR_PRIMARY}
    style={style.input}
    onBlur={onBlur}
    onFocus={onBlur}
  />
);

const style = StyleSheet.create({
  input: { height: 40, paddingLeft: 6 }
});
