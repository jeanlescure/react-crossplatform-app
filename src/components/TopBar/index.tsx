import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';

import {store} from '../../store';
import {State} from '../../store/interfaces';
import colors from '../../themes/default/colors';

const {Popover} = renderers;

const alertAction = {
  type: 'GlobalActions',
  name: 'setAlert',
  payload: {
    alert: {
      message: 'Menu alert!',
      level: 'alert',
      show: true,
    },
  },
};

const onLogoutPress = (dispatchApi: Function) => {
  dispatchApi({
    actionType: 'UserActions',
    actionPrefix: 'logout',
    apiPath: '83b0da29-0601-4853-b01e-e1b18ee8c2b7',
    method: 'get',
  });
};

const TopBar = ({navigation}) => {
  const {dispatch, dispatchApi, colorMode, theme}: State = useContext(store);
  const styles = theme[colorMode as keyof typeof theme];

  return (
    <View style={[styles.content]}>
      <View style={barStyle}>
        <View>
          <Text style={[styles.text, spacingStyle]}>Organization Name</Text>
          <Text style={styles.text}>License ID: 0123ABCD</Text>
        </View>
        <View>
          <Menu renderer={Popover} rendererProps={{placement: 'bottom'}}>
            <MenuTrigger>
              <Icon
                name="hamburger"
                size={39}
                color={colorMode === 'light' ? colors.black : colors.white}
              />
            </MenuTrigger>
            <MenuOptions customStyles={menuOptionsStyles}>
              <MenuOption onSelect={() => navigation.navigate('confirmation')}>
                <Text>Perform Action</Text>
              </MenuOption>
              <MenuOption onSelect={() => dispatch(alertAction)}>
                <Text>Send Alert</Text>
              </MenuOption>
              <MenuOption onSelect={() => onLogoutPress(dispatchApi)}>
                <Text>Log Out</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>
    </View>
  );
};

const barStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const menuOptionsStyles = {
  optionsWrapper: {
    minWidth: 130,
  },
};

const spacingStyle = {
  marginBottom: 6,
};

export default TopBar;
