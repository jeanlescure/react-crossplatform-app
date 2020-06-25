import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import moment from 'moment';

import Screen from '../../components/Screen';
import TopBar from '../../components/TopBar';

import {store} from '../../store';
import {State} from '../../store/interfaces';

const ProfileScreen = ({navigation}) => {
  const {colorMode, theme, userProfile}: State = useContext(store);
  const styles = theme[colorMode as keyof typeof theme];

  const {dob} = userProfile;
  const {title, first, last} = userProfile.name;

  return (
    <Screen>
      <TopBar navigation={navigation} />
      <View style={[styles.content, cardStyle]}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subTitle}>User #1234</Text>
        <View style={styles.separator} />
        <View style={textRowStyle}>
          <Image
            source={{uri: userProfile.picture.large, width: 100, height: 100}}
          />
        </View>
        <View style={textRowStyle}>
          <Text style={styles.text}>
            <Text style={[styles.text, boldStyle]}>Name: </Text>
            {`${title} ${first} ${last}`}
          </Text>
        </View>
        <View style={textRowStyle}>
          <Text style={styles.text}>
            <Text style={[styles.text, boldStyle]}>Date of Birth: </Text>
            {moment(dob.date).format('MMMM Do, YYYY')}
          </Text>
        </View>
      </View>
    </Screen>
  );
};

const cardStyle = {
  margin: 20,
  flexDirection: 'column',
};

const textRowStyle = {
  marginTop: 5,
  marginBottom: 10,
};

const boldStyle = {
  fontWeight: 'bold',
};

export default ProfileScreen;
