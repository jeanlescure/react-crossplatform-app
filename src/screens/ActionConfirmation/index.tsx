import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {store} from '../../store';
import {State} from '../../store/interfaces';
import colors from '../../themes/default/colors';

import Screen from '../../components/Screen';
import Button from '../../components/Button';

const AcionConfirmationScreen = ({navigation}) => {
  const {colorMode, theme}: State = useContext(store);
  const styles = theme[colorMode as keyof typeof theme];

  return (
    <Screen customStyles={screenCustomStyles} centered>
      <View style={[styles.content, customBackground]}>
        <Text style={[styles.title, titleStyle]}>Acion Confirmation</Text>
        <Button
          onPress={() => {
            navigation.navigate('app');
          }}>
          Cool!
        </Button>
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

const titleStyle = {
  color: colors.white,
  marginBottom: 39,
};

export default AcionConfirmationScreen;
