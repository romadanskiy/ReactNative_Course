import React from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import moment from 'moment';

export interface ICallHistoryData {
  id: string,
  contactName: string,
  contactAvatarImagePath: string,
  callType: 'voice' | 'video',
  callDate: string,
}

const CallHistoryItem = ({data}: {data: ICallHistoryData}) => {
  return(
    <View style={styles.container}>
      <View style={styles.shadow}>
        <Image 
          style={styles.contactAvatar} 
          source={{uri: data.contactAvatarImagePath}} 
        />
      </View>

      <View style={{flex: 1}}>
        <Text style={styles.contactName} numberOfLines={1} ellipsizeMode={'tail'}>
          {data.contactName}
        </Text>

        <Text style={styles.callDate}>
          {moment(data.callDate).format('DD MMM hh:mm a')}
        </Text>
      </View>

      <View style={[styles.shadow2, {shadowColor: data.callType === 'voice' ? 'green' : 'blue'}]}>
        <Image 
          style={styles.callIcon} 
          source={data.callType === 'voice' 
            ? require('../icons/call-icon.png') 
            : require('../icons/video-call-icon.png')} 
        />
      </View>
    </View>
  );
}

export { CallHistoryItem };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
  },
  contactAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  contactName: {
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
  },
  callDate: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 14,
  },
  callIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  shadow: {
    marginRight: 12,
    borderRadius: 50,
    backgroundColor: '#000',
    shadowColor: 'black',
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 40,    
      },
      android: {
        elevation: 40,
      },
    }),
  },
  shadow2: {
    marginLeft: 12,
    borderRadius: 50,
    backgroundColor: '#000',
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 70,    
      },
      android: {
        elevation: 70,
      },
    }),
  },
});