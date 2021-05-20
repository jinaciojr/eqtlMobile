import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import ProfilePhoto from '../../assets/profile.png';

// import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={ProfilePhoto}
        style={{
          width: 300,
          height: 120,
          marginTop: -40,
          marginBottom: 20,
          // position: 'absolute',
          // top: 100,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
