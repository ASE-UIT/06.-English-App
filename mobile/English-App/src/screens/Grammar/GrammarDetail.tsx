import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import GrammarModel from '../../models/GrammarModel';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GrammarDetailScreenNavigationProp, GrammarScreenRouteProp } from '../../type';

export default function GrammarDetail() {
  const navigation = useNavigation<GrammarDetailScreenNavigationProp>();
  const route = useRoute<GrammarScreenRouteProp>();
  const { grammar } = route.params;
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <RenderHTML
        contentWidth={width}
        source={{ html: grammar.content }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});
