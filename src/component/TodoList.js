import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLOR_PRIMARY, BORDER_COLOR } from '../styles/common';

export const TodoList = ({ getDetails, handleDelete, list }) => {
  const handleGetDetails = id => {
    getDetails(id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={todo => todo.id.toString()}
        data={list}
        renderItem={({ item }) => {
          return (
            <View style={styles.subContainer}>
              <TouchableOpacity
                onPress={() => handleGetDetails(item.id)}
                style={styles.rowStyle}
              >
                <View style={styles.idContainer}>
                  <Text style={styles.textStyle}>{`${item.id}.`}</Text>
                </View>
                <View style={styles.titleContainer}>
                  <Text style={styles.textStyle}>{item.title}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(item.id)}
              >
                <Icon name='delete' size={30} color={COLOR_PRIMARY} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: BORDER_COLOR,
    marginHorizontal: 10,
    marginTop: 10
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: 1
  },
  rowStyle: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 5,
    alignItems: 'center',
    height: 50
  },
  idContainer: { flex: 0.15 },
  textStyle: { fontSize: 15 },
  titleContainer: { flex: 2 },
  deleteButton: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
    alignSelf: 'center'
  }
});
