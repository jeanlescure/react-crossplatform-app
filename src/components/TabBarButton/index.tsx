import React, {useContext} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {store} from '../../store';
import {State} from '../../store/interfaces';
import colors from '../../themes/default/colors';

const TabBarButton = ({
  focused,
  iconName,
  labelText,
  onPress,
}: {
  focused: boolean;
  iconName: string;
  labelText: string;
  onPress: Function;
}) => {
  const {colorMode, theme}: State = useContext(store);
  const styles = theme[colorMode as keyof typeof theme];

  return (
    <View
      style={[
        itemStyle[colorMode],
        focused ? selectedItemStyle[colorMode] : {},
      ]}
    >
      <TouchableOpacity style={centerStyle} onPress={() => onPress()}>
        <Icon
          name={iconName}
          size={18}
          color={focused ? selectedIconColor[colorMode] : iconColor[colorMode]}
        />
        <Text
          style={focused ? selectedTextStyle[colorMode] : textStyle[colorMode]}
        >
          {labelText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const itemStyle = {
  light: {
    width: '50%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopColor: colors.mediumGray,
    borderTopWidth: 1,
  },
  dark: {
    width: '50%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkGray,
    borderTopColor: colors.lightGray,
    borderTopWidth: 1,
  },
};

const selectedItemStyle = {
  light: {
    backgroundColor: colors.lightGray,
  },
  dark: {
    backgroundColor: colors.mediumGray,
  },
};

const centerStyle = {
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
};

const iconColor = {
  light: colors.darkGray,
  dark: colors.lightGray,
};

const textStyle = {
  light: {
    color: colors.darkGray,
  },
  dark: {
    color: colors.lightGray,
  },
};

const selectedIconColor = {
  light: colors.black,
  dark: colors.white,
};

const selectedTextStyle = {
  light: {
    color: colors.black,
  },
  dark: {
    color: colors.white,
  },
};

export default TabBarButton;
