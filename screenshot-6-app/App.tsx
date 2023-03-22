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
          <Text style={styles.headerText}>Lorem ispum dolor</Text>
        </View>

        <View style={{ padding: 30 }}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
          </View>

          <View style={styles.mainTextContainer}>
            <Text style={styles.mainText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>

          <View style={styles.keywordsContainer}>
            <Text style={styles.keywordsText}>lorem, ipsum, dolor, sit, amet, consectetur, adipiscing, elit, sed, do</Text>
          </View>

          <View style={styles.dateTimeContainer}>
            <Text style={styles.dateTimeText}>2017-11-27 13:30</Text>
          </View>

          <View style={styles.userDataContainer}>
            <View style={styles.userAvatarContainer}>
              <Image
                style={styles.userAvatarImage}
                source={{ uri: userData.avatarImagePath }} />
            </View>

            <View>
              <Text style={styles.userName}>{userData.name}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Like</Text>
          </TouchableOpacity>
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
    padding: 30,
  },
  headerText: {
    color: 'white',
    fontSize: 32,
  },
  titleContainer: {
    marginBottom: 15,
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  mainTextContainer: {
    marginBottom: 15,
  },
  mainText: {
    fontSize: 20,
    textAlign: 'justify',
  },
  keywordsContainer: {
    marginBottom: 15,
  },
  keywordsText: {
    color: '#44a4ec',
    fontSize: 18,
    textAlign: 'justify',
  },
  dateTimeContainer: {
    marginBottom: 15,
  },
  dateTimeText: {
    fontSize: 18,
  },
  userDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  userAvatarContainer: {
    backgroundColor: '#44a4ec',
    borderRadius: 106 / 2,
    marginRight: 15,
    padding: 3,
  },
  userAvatarImage: {
    padding: 3,
    width: 90,
    height: 90,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 90 / 2,
  },
  userName: {
    color: '#44a4ec',
    fontSize: 26,
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#44a4ec',
    width: '100%',
    height: 56,
    borderRadius: 28,
  },
  buttonText: {
    color: 'white',
    fontSize: 26,
  },
});