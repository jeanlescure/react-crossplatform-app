import React, {useContext} from 'react';
import {Text, View} from 'react-native';

import Screen from '../../components/Screen';
import TopBar from '../../components/TopBar';
import Button from '../../components/Button';

import {store} from '../../store';
import {State} from '../../store/interfaces';

const defaultAlert = {
  message: 'Hello World',
  show: true,
};

const dismissAction = {
  type: 'GlobalActions',
  name: 'setAlert',
};

const HomeScreen = ({navigation}) => {
  const {dispatch, colorMode, theme}: State = useContext(store);
  const styles = theme[colorMode as keyof typeof theme];

  return (
    <Screen>
      <TopBar navigation={navigation} />
      <View style={[styles.content, widgetStyle]}>
        <View style={widgetDataStyle}>
          <Text style={[styles.alertText, bigNumberStyle]}>1</Text>
          <Text style={styles.alertText}>Alert</Text>
          <Button
            onPress={() => {
              dispatch({
                ...dismissAction,
                payload: {
                  alert: {
                    ...defaultAlert,
                    level: 'alert',
                  },
                },
              });
            }}>
            Show Alert
          </Button>
        </View>
        <View style={widgetDataStyle}>
          <Text style={[styles.errorText, bigNumberStyle]}>2</Text>
          <Text style={styles.errorText}>Errors</Text>
          <Button
            onPress={() => {
              dispatch({
                ...dismissAction,
                payload: {
                  alert: {
                    ...defaultAlert,
                    level: 'error',
                  },
                },
              });
            }}>
            Show Errors
          </Button>
        </View>
        <View style={widgetDataStyle}>
          <Text style={[styles.warningText, bigNumberStyle]}>3</Text>
          <Text style={styles.warningText}>Warnings</Text>
          <Button
            onPress={() => {
              dispatch({
                ...dismissAction,
                payload: {
                  alert: {
                    ...defaultAlert,
                    level: 'warning',
                  },
                },
              });
            }}>
            Show Warnings
          </Button>
        </View>
        <View style={widgetDataStyle}>
          <Text style={[styles.successText, bigNumberStyle]}>4</Text>
          <Text style={styles.successText}>Success</Text>
          <Button
            onPress={() => {
              dispatch({
                ...dismissAction,
                payload: {
                  alert: {
                    ...defaultAlert,
                    level: 'success',
                  },
                },
              });
            }}>
            Show Success
          </Button>
        </View>
        <View style={widgetDataStyle}>
          <Text style={[styles.infoText, bigNumberStyle]}>5</Text>
          <Text style={styles.infoText}>Info</Text>
          <Button
            onPress={() => {
              dispatch({
                ...dismissAction,
                payload: {
                  alert: {
                    ...defaultAlert,
                    level: 'info',
                  },
                },
              });
            }}>
            Show Info
          </Button>
        </View>
      </View>
    </Screen>
  );
};

const widgetStyle = {
  margin: 20,
  flexDirection: 'row',
  flexWrap: 'wrap',
};

const widgetDataStyle = {
  flexDirection: 'column',
  alignItems: 'center',
  margin: 10,
};

const bigNumberStyle = {
  fontSize: 20,
  fontWeight: 'bold',
};

export default HomeScreen;
