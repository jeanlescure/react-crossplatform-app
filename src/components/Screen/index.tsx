import React, {useContext} from 'react';
import {View} from 'react-native';

import {store} from '../../store';
import {State} from '../../store/interfaces';

const Screen = ({
  children,
  customStyles,
  centered,
}: {
  children: any;
  customStyles?: any;
  centered?: boolean;
}) => {
  const {colorMode, theme}: State = useContext(store);
  const styles = theme[colorMode as keyof typeof theme];

  return (
    <View
      style={[
        centered ? styles.screenCentered : styles.screen,
        (customStyles || {}).screen,
      ]}
    >
      <View
        style={[
          centered ? styles.containerCentered : styles.container,
          (customStyles || {}).container,
        ]}
      >
        {children}
      </View>
    </View>
  );
};

export default Screen;
