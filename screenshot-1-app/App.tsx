import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, StatusBar, View, SafeAreaView } from 'react-native';
import { PostList } from './components/PostList';

export default function App() {
  return (
    <View style={styles.container}>
      <ExpoStatusBar style="auto" backgroundColor='#e3d5ca' />

      <SafeAreaView>
        <PostList />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3d5ca',
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
  },
});
