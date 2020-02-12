import * as React from 'react';
import { View } from 'react-native';

export function DetailsScreen({ route }) {
  const { title, body } = route.params;
  return (
    <View>
      <View>
        <Text h1>{title}</Text>
        <Text h4> {body}</Text>
      </View>
    </View>
  );
}
