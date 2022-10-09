import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { PostList } from './components/PostList';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <SafeAreaView>
        <PostList />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6d6d6',
  },
});
