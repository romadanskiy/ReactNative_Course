import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image, 
  ScrollView, 
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

export default function App() {
  const deafualtTrackName = 'Тесно'
  const [trackName, setTrackName] = React.useState(deafualtTrackName);
  const setTrackNameOrDefault = (newValue: string) => {
    if (!newValue) {
      newValue = deafualtTrackName
    }
    setTrackName(newValue)
  }

  const deafualtTrackAuthors = 'Aarne, BUSHIDO ZHO, ANIKV'
  const [trackAuthors, setTrackAuthors] = React.useState(deafualtTrackAuthors);
  const setTrackAuthorsOrDefault = (newValue: string) => {
    if (!newValue) {
      newValue = deafualtTrackAuthors
    }
    setTrackAuthors(newValue)
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View>
          <View style={styles.shadow}>
            <Image 
              style={styles.img} 
              source={{
                uri: 'https://sun7.userapi.com/sun7-7/s/v1/ig2/tSc6z_uP5AM1zluHWUQa1mMNEKZBEH8h8GHHAcyfmqYu--tCx0ceSFIMlHOkrAoFXdPt_xnxaf56DqAwm-GXPtUy.jpg?size=1280x1280&quality=95&type=album'
              }}
            />
          </View>

          <View style={styles.trackInformation}>
            <Text style={styles.trackName}>{trackName}</Text>
            <Text style={styles.trackAuthors}>{trackAuthors}</Text>
          </View>
        </View>

        <View style={styles.carousel}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginRight: 20}}>
              <TextInput 
                style={styles.input} 
                placeholder='Enter track name'
                placeholderTextColor='#d3d3d3'
                onChangeText={setTrackNameOrDefault} />
            </View>

            <View>
              <TextInput 
                style={styles.input} 
                placeholder='Enter track authors'
                placeholderTextColor='#d3d3d3'
                onChangeText={setTrackAuthorsOrDefault} />
            </View>
          </ScrollView>
        </View>
        <StatusBar style='light' />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carousel: {
    width: 350,
    height: 40,
    marginTop: 25,
  },
  img: {
    width: 350,
    height: 350,
    borderRadius: 10,
  },
  trackInformation: {
    marginTop: 25,
  },
  trackName: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  trackAuthors: {
    color: '#d3d3d3',
    fontSize: 14,
  },
  shadow: {
    borderRadius: 10,
    backgroundColor: '#000',
    shadowColor: '#ffffff',
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 20,    
      },
      android: {
        elevation: 20,
      },
    }),
  },
  input: {
    color: '#ffffff',
    fontSize: 17,
    width: 250,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ffffff',
    padding: 7,
  }
});
