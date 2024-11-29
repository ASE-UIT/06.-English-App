import React from 'react';
import { View,StyleSheet } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { GrammarScreenRouteProp } from '../../type';

export default function GrammarDetail() {
  const route = useRoute<GrammarScreenRouteProp>();
  const { grammarmodel } = route.params;
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <RenderHTML
        contentWidth={width}
        source={{ html: grammarmodel.content }}
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
