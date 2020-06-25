import React, {useContext, useState} from 'react';
import {Text, TextInput, View} from 'react-native';

import Screen from '../../components/Screen';
import Button from '../../components/Button';

import {store} from '../../store';
import {State} from '../../store/interfaces';

const ForgotPasswordScreen = ({navigation}) => {
  const {colorMode, theme}: State = useContext(store);
  const styles = theme[colorMode as keyof typeof theme];

  const [email, onChangeEmail] = useState('');

  return (
    <Screen centered>
      <View style={[styles.content, formStyle]}>
        <Text style={styles.text}>Email:</Text>
        <TextInput style={styles.textInput} onChangeText={onChangeEmail} />
        <Button
          onPress={() => {
            navigation.navigate('login');
          }}>
          Reset Password
        </Button>
        <Text style={styles.text}> </Text>
      </View>
    </Screen>
  );
};

const formStyle = {
  minWidth: 320,
  margin: 12,
  paddingBottom: 50,
};

export default ForgotPasswordScreen;
