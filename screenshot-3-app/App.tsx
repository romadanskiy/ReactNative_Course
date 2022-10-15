import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, StatusBar, View, SafeAreaView } from 'react-native';
import { CallWindow } from './components/CallWindow';

export default function App() {
  return (
    <View style={styles.container}>
      <ExpoStatusBar style='light' backgroundColor='#00786c' />

      <SafeAreaView style={{flex: 1}}>
        <CallWindow 
          contactName={'Michael Scott'} 
          contactAvatarImagePath={'https://miro.medium.com/max/979/1*YRZAmLMn6wUiuAIhsTWQ8Q.jpeg'} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00786c',
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
  },
});