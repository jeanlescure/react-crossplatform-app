import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';

import Button from '../Button';

import {store} from '../../store';
import {State} from '../../store/interfaces';
import colors from '../../themes/default/colors';

import {AppAlertOptions} from './interfaces';

const levelIcon = {
  alert: <Icon name="rocket1" size={39} color={colors.alert} />,
  error: <Icon name="closecircleo" size={39} color={colors.error} />,
  warning: <Icon name="warning" size={39} color={colors.warning} />,
  success: <Icon name="checkcircleo" size={39} color={colors.success} />,
  info: <Icon name="infocirlceo" size={39} color={colors.info} />,
};

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
            <View style={[styles.content, alertStyle]}>
              <View style={rowStyle}>
                <View style={iconStyle}>{levelIcon[level]}</View>
                <View style={contentStyle}>
                  <Text style={[styles.text, messageStyle]}>{message}</Text>
                  <View style={buttonContainerStyle}>
                    {verifyLabel && (
                      <>
                        <Button onPress={verifyPressHandler} level={level}>
                          {verifyLabel}
                        </Button>
                        <Text style={styles.text}> </Text>
                      </>
                    )}
                    <Button
                      onPress={dismissPressHandler}
                      level={verifyLabel ? 'info' : level}>
                      {dismissLabel || 'OK'}
                    </Button>
                  </View>
                </View>
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
  paddingTop: 10,
  marginBottom: 10,
  minHeight: 52,
};

const buttonContainerStyle = {
  flexDirection: 'row',
  justifyContent: 'flex-end',
};

const rowStyle = {
  flexDirection: 'row',
};

const iconStyle = {
  flexDirection: 'column',
  paddingRight: 15,
};

const contentStyle = {
  flexDirection: 'column',
  flex: 1,
};

export default AppAlert;
