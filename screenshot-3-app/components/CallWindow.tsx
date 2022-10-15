import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const whatsappIcon = require('../icons/whatsapp-icon.png');
const phoneIcon = require('../icons/filled-phone.png');
const speakerphoneIcon = require('../icons/speakerphone.png');
const earSpeakerIcon = require('../icons/ear-speaker.png');
const microphoneIcon = require('../icons/microphone.png');
const mutedMicrophoneIcon = require('../icons/muted-microphone.png');

const CallWindow = ({contactName, contactAvatarImagePath}: {contactName: string, contactAvatarImagePath: string}) => {
  const[isMutedMicrophone, setIsMutedMicrophone] = React.useState(false);
  const changeMicrophoneState = () => {
    setIsMutedMicrophone(!isMutedMicrophone);
  }

  const[isSpeakerphone, setIsSpeakerphone] = React.useState(false);
  const changeSpeakerState = () => {
    setIsSpeakerphone(!isSpeakerphone);
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInnerContainer}>
          <View style={styles.headerRow}>
            <Image 
              style={styles.headerIcon} 
              source={whatsappIcon}/>

            <Text style={styles.headerTitle}>WhatsApp Call</Text>
          </View>
          
          <Text style={styles.contactName}>{contactName}</Text>

          <Text style={styles.callDuration}>03:34</Text>
        </View>
      </View>

      <View style={styles.contactAvatar}>
        <Image 
          style={styles.image} 
          source={{uri: contactAvatarImagePath}} />
      </View>

      <View style={styles.bottom}>
        <View style={styles.bottomInnerContainer}>
          <View style={styles.bottomRow}>
            <TouchableOpacity onPress={changeSpeakerState}>
              <View style={styles.secondaryButton}>
                <Image 
                  style={styles.secondaryIcon} 
                  source={isSpeakerphone ? earSpeakerIcon : speakerphoneIcon} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.primaryButton}>
                <Image 
                  style={styles.primaryIcon} 
                  source={phoneIcon} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={changeMicrophoneState}>
              <View style={styles.secondaryButton}>
                <Image 
                  style={styles.secondaryIcon} 
                  source={isMutedMicrophone ? microphoneIcon : mutedMicrophoneIcon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export { CallWindow };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  headerInnerContainer: {
    flex: 1,
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 'auto',
  },
  contactAvatar: {
    height: Dimensions.get('window').width,
  },
  bottom: {
    flex: 2,
  },
  bottomInnerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerTitle: {
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  headerIcon: {
    width: 16,
    height: 16,
    opacity: 0.6,
    marginRight: 4,
  },
  contactName: {
    color: 'rgba(255,255,255,1)',
    fontSize: 38,
    fontWeight: '300',
  },
  callDuration: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 18,
  },
  image: {
    height: '100%',
  },
  primaryButton: {
    backgroundColor: 'rgba(220,40,60,1)',
    borderRadius: 50,
    padding: 20,
  },
  primaryIcon: {
    width: 50,
    height: 50,
    tintColor: '#ffffff',
  },
  secondaryButton: {
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 50,
    padding: 15,
  },
  secondaryIcon: {
    width: 35,
    height: 35,
  },
});