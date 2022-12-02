import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Text, Image, TouchableOpacity } from 'react-native';

const userData = {
  name: 'John Doe',
  avatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_7.png',
}

export default function App() {
  return (
    <View style={styles.container}>
      <ExpoStatusBar style='light' backgroundColor='#44a4ec' />

      <SafeAreaView style={styles.topSafeArea} />

      <SafeAreaView style={styles.bottomSafeArea}>
        <View style={styles.headerContainer}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatarImage}
              source={{ uri: userData.avatarImagePath }} />
          </View>

          <View style={styles.userNameContainer}>
            <Text style={styles.userNameText}>{userData.name}</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: '#44a4ec',
  },
  bottomSafeArea: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#44a4ec',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  avatarContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  avatarImage: {
    width: 140,
    height: 140,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 140 / 2,
  },
  userNameContainer: {
    marginBottom: 30,
  },
  userNameText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
  },
});