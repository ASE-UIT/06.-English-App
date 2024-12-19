import React from 'react';
import { View, Dimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import colors from '../../colors';

const { width } = Dimensions.get('window');

const cleanHtmlContent = (html: string) => {
  return html
    .replace(/\\n/g, '') // Remove escaped newlines
    .replace(/&nbsp;/g, ' ') // Replace &nbsp; with regular spaces
    .replace(/\s+/g, ' ') // Normalize multiple spaces
    .trim();
};

interface HtmlReaderProps {
  html: string;
}

const HtmlReader: React.FC<HtmlReaderProps> = ({ html }) => {
  const cleanedHtml = cleanHtmlContent(html);

  return (
    <View style={{ width: '100%', marginTop: 0 }}>
      <RenderHtml
        contentWidth={width}
        source={{ html: cleanedHtml }}
        tagsStyles={{
          div: { 
            padding: 10,
            marginBottom: 10 
          },
          h3: { 
            fontSize: 20,
            fontWeight: 'bold',
            marginVertical: 10,
            color: colors.blue1
          },
          p: { 
            marginVertical: 5,
            fontSize: 16,
            lineHeight: 24
          },
          strong: { 
            fontWeight: 'bold' 
          },
          input: {
            borderWidth: 1,
            borderColor: colors.pink1,
            borderRadius: 4,
            padding: 5,
            marginHorizontal: 5,
            minWidth: 100
          },
          ul: {
            marginLeft: 20
          },
          li: {
            marginVertical: 5
          }
        }}
        systemFonts={['Arial', 'sans-serif']}
        defaultTextProps={{
          selectable: true
        }}
        renderersProps={{
          img: {
            enableExperimentalPercentWidth: true
          }
        }}
      />
    </View>
  );
};

export default HtmlReader;
