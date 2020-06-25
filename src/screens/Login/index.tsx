import React, {useContext, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {Link} from '@react-navigation/native';

import Screen from '../../components/Screen';

import {store} from '../../store';
import {State} from '../../store/interfaces';

const onLoginPress = (
  dispatchApi: Function,
  payload: {user: string; password: string},
) => {
  dispatchApi({
    actionType: 'UserActions',
    actionPrefix: 'login',
    apiPath: '83b0da29-0601-4853-b01e-e1b18ee8c2b7',
    method: 'post',
    payload,
  });
};

const LoginScreen = () => {
  const {dispatchApi, colorMode, theme}: State = useContext(store);
  const styles = theme[colorMode as keyof typeof theme];

  const [user, onChangeUser] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <Screen centered>
      <View style={[styles.content, formStyle]}>
        <Text style={styles.text}>User:</Text>
        <TextInput style={styles.textInput} onChangeText={onChangeUser} />
        <Text style={styles.text}>Password:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangePassword}
          secureTextEntry
        />
        <Button
          onPress={() => {
            onLoginPress(dispatchApi, {user, password});
          }}
          title="Log In"
        />
        <Text style={styles.text}> </Text>
        <Link style={styles.link} to="/forgot-password">
          Forgot password?
        </Link>
      </View>
    </Screen>
  );
};

const formStyle = {
  minWidth: 320,
  margin: 12,
  paddingBottom: 50,
};

export default LoginScreen;
