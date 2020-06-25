import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';

import {store} from '../../store';
import {State} from '../../store/interfaces';

import {AppAlertOptions} from './interfaces';

const dismissAction = {
  type: 'GlobalActions',
  name: 'setAlert',
  payload: {
    alert: null,
  },
};

const AppAlert = ({
  message,
  level,
  verifyLabel,
  dismissLabel,
  onVerify,
  onDismiss,
  show,
}: AppAlertOptions) => {
  const {dispatch, colorMode, theme}: State = useContext(store);
  const styles = theme[colorMode as keyof typeof theme];

  const verifyPressHandler = () => {
    if (onVerify) {
      onVerify();
    }

    dispatch(dismissAction);
  };

  const dismissPressHandler = () => {
    if (onDismiss) {
      onDismiss();
    }

    dispatch(dismissAction);
  };

  console.log(typeof message, message);

  if (show) {
    return (
      <>
        <View style={styles.modalBackground} />
        <View style={styles.modalContent}>
          <View style={alertContainerStyle}>
            <View style={[styles[level], alertStyle]}>
              <Text style={[styles[level], messageStyle]}>{message}</Text>
              <View style={buttonContainerStyle}>
                {verifyLabel && (
                  <>
                    <Button onPress={verifyPressHandler} title={verifyLabel} />
                    <Text style={styles.text}> </Text>
                  </>
                )}
                <Button
                  onPress={dismissPressHandler}
                  title={dismissLabel || 'Ok'}
                />
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }

  return null;
};

const alertContainerStyle = {
  alignItems: 'center',
};

const alertStyle = {
  flexDirection: 'column',
  padding: 20,
  borderRadius: 2,
  minWidth: 320,
  maxWidth: 500,
  margin: 20,
};

const messageStyle = {
  marginBottom: 10,
};

const buttonContainerStyle = {
  flexDirection: 'row',
  justifyContent: 'flex-end',
};

export default AppAlert;
