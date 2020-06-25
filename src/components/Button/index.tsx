import React, {useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {store} from '../../store';
import {State} from '../../store/interfaces';

const Button = ({
  onPress,
  customStyles,
  level,
  children,
}: {
  onPress: Function;
  customStyles?: any;
  level?: 'alert' | 'error' | 'warning' | 'success' | 'info';
  children?: any;
}) => {
  const {colorMode, theme}: State = useContext(store);
  const styles = theme[colorMode as keyof typeof theme];

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[
        styles.button,
        level ? styles[level] : {},
        (customStyles || {}).button,
      ]}>
      {typeof children === 'string' && (
        <Text style={[styles.buttonText, (customStyles || {}).text]}>
          {children}
        </Text>
      )}
      {typeof children !== 'string' && children}
    </TouchableOpacity>
  );
};

export default Button;
