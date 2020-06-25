import React, {useContext} from 'react';
import {Button, View, Text} from 'react-native';

import {store} from '../../store';
import {State} from '../../store/interfaces';
import colors from '../../themes/default/colors';

import Screen from '../../components/Screen';

const AcionConfirmationScreen = ({navigation}) => {
  const {colorMode, theme}: State = useContext(store);
  const styles = theme[colorMode as keyof typeof theme];

  return (
    <Screen customStyles={screenCustomStyles} centered>
      <View style={[styles.content, customBackground]}>
        <Text style={styles.text}>Acion Confirmation</Text>
        <Button
          onPress={() => {
            navigation.navigate('app');
          }}
          title="Cool!"
        />
      </View>
    </Screen>
  );
};

const customBackground = {
  backgroundColor: colors.brandColors[0],
};

const screenCustomStyles = {
  screen: customBackground,
  container: customBackground,
};

export default AcionConfirmationScreen;
