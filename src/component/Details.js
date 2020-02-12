import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { COLOR_PRIMARY } from '../styles/common';

export function DetailsScreen({ route }) {
  const { title, body } = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Text h2 style={styles.title}>
          {title}
        </Text>
        <Text h4 style={styles.body}>
          {' '}
          {body}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 20
  },
  title: {
    marginBottom: 20
  },
  body: {
    color: COLOR_PRIMARY
  }
});
