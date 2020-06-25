import {Theme} from '../interfaces';
import {StyleSheet} from 'react-native';
import light from './light';
import dark from './dark';
import colors from './colors';

const theme: Theme = {
  name: 'default',
  displayName: 'Default Theme',
  light: StyleSheet.create(light),
  dark: StyleSheet.create(dark),
  colors,
};

export default theme;
